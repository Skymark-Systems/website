import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkyMark",
  description: "Leading the most reliable IFF drone technology.",
};
import { cn } from "@/utils/utils";
export default function  RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-black', inter.className)}>{children}</body>
    </html>
  );
}
