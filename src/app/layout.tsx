import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";
import BackToTop from "@/components/ui/BackToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Jayapriyan K — Software Engineer",
  description:
    "Portfolio of Jayapriyan K — Software Engineer, Java Developer, Full Stack Developer, and AI enthusiast.",
  metadataBase: new URL("https://jayapriyan.dev"),
  openGraph: {
    title: "Jayapriyan K — Software Engineer",
    description:
      "Portfolio of Jayapriyan K — Software Engineer, Java Developer, Full Stack Developer, and AI enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">
        <CursorGlow />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
