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

function formatProducts(products) {
  if (!Array.isArray(products) || products.length === 0) {
    return "<li>Sin productos</li>";
  }

  return products
    .map((product) => {
      const quantity = Number(product.quantity || 0);
      const unitPrice = Number(product.unitPrice || 0);
      const lineTotal = quantity * unitPrice;

      return `
<li>
  ${escapeHtml(product.name)} (${escapeHtml(product.presentation)})
  <br/>
  Cantidad: ${quantity}
  <br/>
  Precio unitario: ₡${unitPrice}
  <br/>
  <strong>Total: ₡${lineTotal}</strong>
</li>`;
    })
    .join("");
}

// 🔥 IMPORTANTE PARA CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.RESEND_API_KEY || !env.ORDER_EMAIL_TO || !env.ORDER_EMAIL_FROM) {
    return json(
      {
        ok: false,
        message:
          "Missing env vars: RESEND_API_KEY, ORDER_EMAIL_TO, ORDER_EMAIL_FROM",
      },
      500
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: "Invalid JSON" }, 400);
  }

  const customer = body?.customer ?? {};
  const address = body?.address ?? {};
  const products = body?.products ?? [];
  const summary = body?.summary ?? {};

  if (!customer.fullName || !customer.email || !customer.phone) {
    return json(
      { ok: false, message: "Missing required customer fields" },
      400
    );
  }

  const subject = `🔥 Nueva orden Apex - ${customer.fullName}`;

  const html = `
    <h2>🔥 Nueva orden recibida</h2>

    <h3>👤 Datos personales</h3>
    <p><strong>Nombre:</strong> ${escapeHtml(customer.fullName)}</p>
    <p><strong>Celular:</strong> ${escapeHtml(customer.phone)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(customer.email)}</p>
    <p><strong>Cédula:</strong> ${escapeHtml(customer.cedula)}</p>

    <h3>📍 Dirección</h3>
    <p><strong>Provincia:</strong> ${escapeHtml(address.provincia)}</p>
    <p><strong>Cantón:</strong> ${escapeHtml(address.canton)}</p>
    <p><strong>Distrito:</strong> ${escapeHtml(address.distrito)}</p>
    <p><strong>Otras señas:</strong> ${escapeHtml(address.otrasSenas)}</p>

    <h3>🛒 Productos</h3>
    <ul>
      ${formatProducts(products)}
    </ul>

    <h3>💰 Resumen</h3>
    <p><strong>Subtotal:</strong> ₡${summary.subtotal}</p>
    <p><strong>Envío:</strong> ₡${summary.shipping}</p>
    <p><strong>Descuento:</strong> ₡${summary.discountAmount}</p>
    <p><strong>Total:</strong> <strong>₡${summary.total}</strong></p>
    <p><strong>Código aplicado:</strong> ${summary.appliedPromoCode || "N/A"}</p>
  `;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.ORDER_EMAIL_FROM,
        to: [env.ORDER_EMAIL_TO],
        subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return json(
        { ok: false, message: "Resend error", details: errorText },
        500
      );
    }

    return json({ ok: true });
  } catch (error) {
    return json({ ok: false, message: error.message }, 500);
  }
}