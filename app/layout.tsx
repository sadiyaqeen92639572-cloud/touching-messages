import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono, Caveat } from "next/font/google";
import { LangSetter } from "@/components/LangSetter";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Touching Messages — Heartfelt Love Messages Platform",
  description:
    "An elegant collection of heartfelt romantic love messages, apologies, long distance notes, and emotional paragraphs. Create customized love notes with our AI Writer.",
  keywords: [
    "touching love messages for her",
    "touching love messages to make her cry",
    "heart touching love messages for him",
    "long distance love paragraphs",
  ],
  manifest: "/manifest.webmanifest",
  verification: {
    google: "Uh8RuMtnQuSHNN-jrQogPRkoNcV6UUgeJYz6iY9Ihy8",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <body className="bg-[#FAF7F2] text-[#2D2D2D] antialiased" suppressHydrationWarning>
        <LangSetter />
        {children}
      </body>
    </html>
  );
}
