import { useState } from "react";
import { MiniCartSheet } from "../cart/MiniCartSheet";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
// AnnouncementBar removed per request
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";

export function AppLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(true);

  return (
    <div className="bg-app-bg flex min-h-screen w-full flex-col text-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <MiniCartSheet />

      <Dialog open={whatsAppModalOpen} onOpenChange={setWhatsAppModalOpen}>
        <DialogContent className="max-w-md rounded-2xl border border-green-500/30 bg-surface-900 p-0">
          <div className="p-6">
            <DialogHeader className="border-0 px-0 pb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.47 0 .08 5.4.08 12.04c0 2.18.58 4.3 1.67 6.16L0 24l6.02-1.6A11.96 11.96 0 0 0 12.06 24c6.6 0 11.97-5.4 11.97-12.04 0-3.2-1.26-6.2-3.51-8.48ZM12.06 21.9c-1.82 0-3.6-.49-5.15-1.42l-.37-.22-3.57.95 1-3.47-.24-.38A9.83 9.83 0 0 1 2.3 12.04c0-5.42 4.4-9.83 9.76-9.83 2.62 0 5.07 1.02 6.92 2.87A9.76 9.76 0 0 1 12.06 21.9Zm5.36-7.36c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.19.29-.73.94-.9 1.13-.16.19-.33.21-.62.07-.29-.15-1.22-.45-2.33-1.45-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.33.44-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.66-1.57-.9-2.15-.24-.58-.49-.5-.66-.51l-.56-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.16 2.95c.14.19 2 3.04 4.82 4.25.67.29 1.19.47 1.6.6.67.21 1.28.18 1.76.11.54-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.08-.12-.27-.19-.56-.34Z" />
                </svg>
              </div>
              <DialogTitle className="mt-4 text-left text-xl text-white">
                Atención al cliente
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="px-0 pb-6 text-left text-sm text-gray-300">
              Te atenderemos por whatsapp de inmediato. Chatea con nosotros y te
              responderemos enseguida.
            </DialogDescription>
            <DialogFooter className="flex-col gap-3 border-0 px-0 pt-0">
              <a
                href="https://wa.me/50660624449?text=Hola%20Apex%20CR%2C%20quiero%20más%20información"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.47 0 .08 5.4.08 12.04c0 2.18.58 4.3 1.67 6.16L0 24l6.02-1.6A11.96 11.96 0 0 0 12.06 24c6.6 0 11.97-5.4 11.97-12.04 0-3.2-1.26-6.2-3.51-8.48ZM12.06 21.9c-1.82 0-3.6-.49-5.15-1.42l-.37-.22-3.57.95 1-3.47-.24-.38A9.83 9.83 0 0 1 2.3 12.04c0-5.42 4.4-9.83 9.76-9.83 2.62 0 5.07 1.02 6.92 2.87A9.76 9.76 0 0 1 12.06 21.9Zm5.36-7.36c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.19.29-.73.94-.9 1.13-.16.19-.33.21-.62.07-.29-.15-1.22-.45-2.33-1.45-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.33.44-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.66-1.57-.9-2.15-.24-.58-.49-.5-.66-.51l-.56-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.16 2.95c.14.19 2 3.04 4.82 4.25.67.29 1.19.47 1.6.6.67.21 1.28.18 1.76.11.54-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.08-.12-.27-.19-.56-.34Z" />
                </svg>
                Chatear por WhatsApp
              </a>
              <Button
                variant="ghost"
                onClick={() => setWhatsAppModalOpen(false)}
                className="w-full border border-gray-700 bg-transparent text-gray-200 hover:text-white"
              >
                Cerrar
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
