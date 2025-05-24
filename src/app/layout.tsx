import type { Metadata } from "next";
import { Instrument_Sans, } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import Link from "next/link";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "A Dictionary of Color Combinations",
  description: "Explore a comprehensive collection of color combinations and swatches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} antialiased`}
      >
        <Analytics />
        <header className="p-4 bg-black text-white">
          <nav className="flex justify-between" >
            <Link href="/" className="font-bold">
              <circle className="inline-block w-4 h-4 mr-1 bg-[#E97451] rounded-full" />
            </Link>
            <div className="flex justify-end space-x-4">
              <Link href="/about">
                About
              </Link>
              <Link href="/swatch">
                Swatches
              </Link>
              <Link href="/combinations">
                Combinations
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
