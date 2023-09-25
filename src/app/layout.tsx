'use client';
import './globals.scss';
import type { Metadata } from 'next';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { SessionProvider } from 'next-auth/react';
export const metadata: Metadata = {
  title: 'news pulse',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
