import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Quiero ser un vendedor autorizado");
    const body = encodeURIComponent("Hola, me gustaría ser un vendedor autorizado de Apex Peptides. Por favor contactarme para más información.");
    window.open(`mailto:apex.peptides.cr@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus productos.");
    window.open(`https://wa.me/50660624449?text=${message}`, "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/apex.peptides.cr/", "_blank");
  };

  const handleTikTokClick = () => {
    window.open("https://www.tiktok.com/@apexcostarica", "_blank");
  };

  return (
    <div className="bg-app-bg min-h-screen px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-4xl space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <Badge variant="sectionLabel">Contacto</Badge>
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white uppercase sm:text-5xl">
              Contáctanos
            </h1>
            <p className="max-w-2xl text-sm text-gray-400 sm:text-xl">
              Estamos aquí para ayudarte. Contacta con nosotros para ser un vendedor autorizado o hacer tus pedidos.
            </p>
          </div>
        </header>

        {/* Contact Options */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Email Section */}
          <div className="rounded-[2rem] border border-gray-800 bg-[#05060d]/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
                <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-sm text-gray-400">Para vendedores autorizados</p>
              </div>
            </div>
            <p className="mb-6 text-gray-300">
              ¿Quieres ser un vendedor autorizado de Apex Peptides? Contáctanos por email y te proporcionaremos toda la información necesaria.
            </p>
            <Button
              onClick={handleEmailClick}
              variant="heroPrimary"
              size="heroPrimary"
              className="w-full"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar Email
            </Button>
          </div>

          {/* WhatsApp Section */}
          <div className="rounded-[2rem] border border-gray-800 bg-[#05060d]/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                <p className="text-sm text-gray-400">Atención directa</p>
              </div>
            </div>
            <p className="mb-6 text-gray-300">
              Para consultas rápidas, pedidos o información general. Te responderemos lo más pronto posible.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              variant="heroPrimary"
              size="heroPrimary"
              className="w-full bg-green-600 hover:bg-green-500"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Abrir WhatsApp
            </Button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="rounded-[2rem] border border-gray-800 bg-[#05060d]/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Síguenos en Redes Sociales</h2>
            <p className="text-gray-400">Mantente al día con nuestras actualizaciones y contenido exclusivo</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Instagram */}
            <Button
              onClick={handleInstagramClick}
              variant="outline"
              className="h-auto p-6 border-gray-700 bg-transparent hover:bg-pink-500/10 hover:border-pink-500/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20">
                  <svg className="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.082.566c-.726.28-1.337.637-1.95 1.25S1.48 3.086 1.2 3.812C.936 4.505.754 5.314.701 6.52c-.053 1.206-.067 1.606-.067 5.227s.014 3.996.067 5.202c.053 1.206.235 2.015.499 2.708.264.693.637 1.304 1.25 1.937.613.613 1.224.976 1.917 1.24.693.264 1.502.446 2.708.499 1.206.053 1.606.067 5.227.067s3.996-.014 5.202-.067c1.206-.053 2.015-.235 2.708-.499.693-.264 1.304-.627 1.937-1.24.613-.613.976-1.224 1.24-1.917.264-.693.446-1.502.499-2.708.053-1.206.067-1.606.067-5.227s-.014-3.996-.067-5.202c-.053-1.206-.235-2.015-.499-2.708-.264-.693-.627-1.304-1.24-1.937C20.914 1.48 20.303.817 19.61.553c-.693-.264-1.502-.446-2.708-.499C15.696.001 15.296 0 12.017 0zm0 1.802c3.562 0 3.984.014 5.39.067 1.337.05 2.066.285 2.54.475.526.21.92.462 1.32.862.4.4.652.794.862 1.32.19.474.425 1.203.475 2.54.053 1.406.067 1.828.067 5.39s-.014 3.984-.067 5.39c-.05 1.337-.285 2.066-.475 2.54-.21.526-.462.92-.862 1.32-.4.4-.794.652-1.32.862-.474.19-1.203.425-2.54.475-1.406.053-1.828.067-5.39.067s-3.984-.014-5.39-.067c-1.337-.05-2.066-.285-2.54-.475-.526-.21-.92-.462-1.32-.862-.4-.4-.652-.794-.862-1.32-.19-.474-.425-1.203-.475-2.54C1.83 8.401 1.816 7.979 1.816 4.417s.014-3.984.067-5.39c.05-1.337.285-2.066.475-2.54.21-.526.462-.92.862-1.32.4-.4.794-.652 1.32-.862.474-.19 1.203-.425 2.54-.475 1.406-.053 1.828-.067 5.39-.067zm0 13.749c-3.673 0-6.652-2.979-6.652-6.652 0-3.673 2.979-6.652 6.652-6.652s6.652 2.979 6.652 6.652c0 3.673-2.979 6.652-6.652 6.652zm0-10.877c-2.39 0-4.325 1.935-4.325 4.325s1.935 4.325 4.325 4.325 4.325-1.935 4.325-4.325-1.935-4.325-4.325-4.325zm8.135 10.752c0 .828-.67 1.498-1.498 1.498s-1.498-.67-1.498-1.498.67-1.498 1.498-1.498 1.498.67 1.498 1.498z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">Instagram Oficial</div>
                  <div className="text-sm text-gray-400">@apex.peptides.cr</div>
                </div>
              </div>
            </Button>

            {/* TikTok */}
            <Button
              onClick={handleTikTokClick}
              variant="outline"
              className="h-auto p-6 border-gray-700 bg-transparent hover:bg-black hover:border-gray-500"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">TikTok</div>
                  <div className="text-sm text-gray-400">@apexcostarica</div>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="rounded-[2rem] border border-gray-800 bg-[#05060d]/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <h3 className="text-xl font-bold text-white mb-4">¿Por qué elegirnos?</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 mt-1">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Calidad Premium</h4>
                <p className="text-sm text-gray-400">Péptidos de investigación de la más alta pureza</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 mt-1">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Envío Seguro</h4>
                <p className="text-sm text-gray-400">Entrega discreta y confiable en Costa Rica</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 mt-1">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Atención Personalizada</h4>
                <p className="text-sm text-gray-400">Respuestas rápidas a todas tus consultas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 mt-1">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">Programa de Vendedores</h4>
                <p className="text-sm text-gray-400">Oportunidades para ser distribuidor autorizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}