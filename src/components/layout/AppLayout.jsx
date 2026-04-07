import { useState } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";

export function AppLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-app-bg flex min-h-screen w-full flex-col text-white">
      <AnnouncementBar />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
