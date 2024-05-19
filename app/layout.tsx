import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skymark",
  description: "Leading the most reliable IFF drone technology.",
  icons: "images/icon.png",
};
import { cn } from "@/utils/utils";
import Head from "next/head";
export default function  RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="images/icon.png" />
      </Head>
      <body className={cn('bg-black', inter.className)}>{children}</body>
    </html>
  );
}
