import type { Metadata } from "next";
import "./globals.css";
import "@/styles/variables.css";
import "@/styles/animations.css";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { InteractiveStars } from "@/components/ui/interactive-stars";
import { SITE_CONFIG } from "@/lib/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col text-white relative">
        {/* Fixed background gradient */}
        <div
          className="fixed inset-0 -z-10"
          style={{
            background: "radial-gradient(ellipse at top left, #22086f 0%, #080C16 60%)"
          }}
        />
        <InteractiveStars />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
