import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOULA FAMILY — GTA RP",
  description:
    "Moula Family, la famille GTA RP qui monte. Rejoins-nous et fais partie de l'aventure.",
  icons: {
    icon: "/favicon.svg",
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
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `body{background-color:#050507;color:#F0EFF4}`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-noir text-blanc"
        style={{ backgroundColor: "#050507", color: "#F0EFF4" }}
      >
        <CustomCursor />
        <div className="editorial-line" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
