import { Layout } from "@/components/Layout";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/microTecni.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XR Systems",
  description: "Developed by @xrsistemas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
