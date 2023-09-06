import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'my personal portfolio site',
  openGraph: {
    images: 'https://imageupload.io/ib/iTsUpekDWiwKBN2_1693938223.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt'>
      <body className={`${inter.className} bg-zinc-900 text-white `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
