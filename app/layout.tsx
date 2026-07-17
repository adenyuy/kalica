import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalica & Faisal - Wedding Invitation",
  description: "A funny and cheerful photo dump wedding invitation for Kalica Bunga Serlinda and Faisal Rahman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-yellow-300 text-slate-900">{children}</body>
    </html>
  );
}
