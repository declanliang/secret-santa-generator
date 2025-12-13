import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Secret Santa Generator - No Email Required | 2025",
  description: "Create your Secret Santa gift exchange in minutes. Free online generator with no registration. Perfect for office, family, and friends. Share via WhatsApp, email, or direct link!",
  keywords: "secret santa generator, free secret santa, gift exchange generator, no email required, secret santa online, random name picker, secret santa organizer, secret santa app",
  openGraph: {
    title: "Free Secret Santa Generator - No Email Required",
    description: "Create your Secret Santa gift exchange in minutes. Free online generator with no registration.",
    type: "website",
    url: "https://secret-santa-generator.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        {children}
        <Toaster position="top-center" richColors />
      </ClientBody>
    </html>
  );
}
