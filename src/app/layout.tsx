import './globals.scss';
import type { Metadata } from 'next';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
