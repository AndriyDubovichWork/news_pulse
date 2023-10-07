'use client';
import './globals.scss';
import type { Metadata } from 'next';
import { useState } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { SessionProvider } from 'next-auth/react';
import SideBar from './Layout/SideBar';

// export const metadata: Metadata = {
//   title: 'news pulse',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang='en'>
      <body>
        <SessionProvider>
          {isSidebarOpen ? (
            <SideBar setIsSidebarOpen={setIsSidebarOpen} />
          ) : (
            <>
              <Header setIsSidebarOpen={setIsSidebarOpen} />
              {children}
              <Footer />
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
