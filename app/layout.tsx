import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Clean, modern sans-serif for body text
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Elegant serif for headings
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Adaeze Chinazor Chukwuemeka | Portfolio",
  description: "Portfolio of Adaeze Chinazor Chukwuemeka - Educator, Event Planner, and Culinary Expert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* scroll-smooth is crucial for the anchor links to glide down the page nicely! */}
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}