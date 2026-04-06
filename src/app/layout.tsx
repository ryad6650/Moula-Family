import type { Metadata } from "next";
import { Inter, Oswald, Cormorant_Garamond } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOULA FAMILY — GTA RP",
  description:
    "Moula Family, la famille GTA RP qui monte. Rejoins-nous et fais partie de l'aventure.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${oswald.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `body{background-color:#0A0A12;color:#F5F0EB}`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#0A0A12", color: "#F5F0EB" }}
      >

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
