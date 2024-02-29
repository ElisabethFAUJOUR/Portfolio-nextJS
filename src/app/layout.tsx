import React from 'react';
import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import '../styles/globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Portfolio - Elisabeth FAUJOUR - Développeuse Web Front-End',
  description:
    'Portfolio de Elisabeth FAUJOUR, développeuse Web Front-end, et réalisé avec amour avec NextJS.',
  keywords:
    'Elisabeth FAUJOUR, Portfolio, Développeuse, Développeur, Développeur Web, Front-End, Javascript, NextJS, Web, Reconversion, React, UX/UI, HTML, CSS, SCSS, Typescript.',
  metadataBase: new URL('https://elisabethfaujour.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <div className="container">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
