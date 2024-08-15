import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrian | Personal Portfolio",
  description: "Welcome to my digital showcase of projects I worked on throughout college",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-stone-950 `}>
        <Navbar />
        <main className="min-h-screen flex-col flex p-2">
          {children}
        </main>
      </body>
    </html>
  );
}
