import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Functors",
  description: "Functors",
  icons: ["assets/logo_func.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ overflow: "hidden" }}>
        <Header />
        <div className="h-screen mt-8 rounded-tr-[124px] rounded-tl-[124px] overflow-auto max-w-desktop mx-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
