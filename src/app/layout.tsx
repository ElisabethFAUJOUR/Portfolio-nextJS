import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "../styles/globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio - Elisabeth FAUJOUR - Développeuse Web Front-End",
  description:
    "Portfolio de Elisabeth FAUJOUR, développeuse Web Front-end, et réalisé avec amour en HTML/CSS/Javascript.",
  keywords:
    "Elisabeth FAUJOUR, Portfolio, Développeuse, Développeur, Développeur Web, NextJS, Web, reconversion ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} antialiased`}>
        <div className="container">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
