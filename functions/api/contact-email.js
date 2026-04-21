const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL_FROM) {
    return json(
      {
        ok: false,
        message: "Missing env vars: RESEND_API_KEY or CONTACT_EMAIL_FROM",
      },
      500,
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: "Invalid JSON" }, 400);
  }

  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const contactType = String(body.contactType || "").trim();
  const subject = String(body.subject || "Consulta desde website").trim();
  const message = String(body.message || "").trim();

  if (!fullName || !email || !phone || !subject || !message) {
    return json(
      { ok: false, message: "Faltan campos requeridos en el formulario." },
      400,
    );
  }

  const recipient = env.CONTACT_EMAIL_TO || "apex.peptides.cr@gmail.com";

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <h3>Datos de contacto</h3>
    <p><strong>Nombre:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
    <p><strong>WhatsApp / Teléfono:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Tipo de consulta:</strong> ${escapeHtml(contactType)}</p>
    <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
    <h3>Mensaje</h3>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_EMAIL_FROM,
        to: [recipient],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return json(
        { ok: false, message: "Resend error", details: errorText },
        500,
      );
    }

    return json({ ok: true });
  } catch (error) {
    return json({ ok: false, message: error.message }, 500);
  }
}
