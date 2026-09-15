import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { GlobalNav } from "@/components/museum/GlobalNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Digital Museum",
  description: "A collection of digital works and experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-museum-black text-museum-white font-sans selection:bg-museum-gold selection:text-museum-black">
        <GlobalNav />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
      </body>
    </html>
  );
}
