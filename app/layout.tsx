import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Home from "@/components/Home/Home";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Home/Footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Gen AI",
  description: "AI Image Generating app using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {`${font.className} bg-gray-900 antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
