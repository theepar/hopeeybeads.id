// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { TransitionProvider } from "./components/client"; // <-- Impor dari client.tsx
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hopeeybeads.id - Handcrafted Jewelry",
  description: "Discover unique, handcrafted jewelry that tells your story.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <TransitionProvider> {/* <-- Gunakan sebagai pembungkus */}
          <Navbar />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}