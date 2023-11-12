import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Layout } from "@/components/Layout";

const microTecni = localFont({
  src: "../../public/fonts/microTecni.ttf",
  display: "swap",
  variable: "--font-microTecni",
});

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/helvetica_medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/helvetica_medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/helvetica_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "XR Tech",
  description: "Developed by @xrtech",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${microTecni.variable} ${helvetica.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
