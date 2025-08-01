import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FotoProdukcija - Profesionalna fotografska storitev",
  description: "Profesionalne fotografije za poslovne in osebne trenutke. Profesionalni portreti, slikanje dogodkov in ostale fotografske storitve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
