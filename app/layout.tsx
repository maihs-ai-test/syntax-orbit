import "./globals.css";
import TopBar from "../components/TopBar";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CtaSection from "../components/CtaSection";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import SideCta from "../components/SideCta";

export const metadata = {
  title: "Syntax Orbit - IT Solutions & Digitale Transformatie Amsterdam",
  description: "Professionele webdevelopment, digitale branding en groeistrategieën voor moderne bedrijven. Syntax Orbit helpt u succesvol digitaal transformeren.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <TopBar />
        <Nav />
        {children}
        <CtaSection />
        <Footer />
        <FloatingWhatsapp />
        <SideCta />
      </body>
    </html>
  );
}
