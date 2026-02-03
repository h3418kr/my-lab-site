import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Prof. Seung Kyu Hwang | Advanced Materials & Energy Lab',
  description: 'Researching the future of energy storage and environmental sustainability with MXene and advanced nanomaterials.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable + ' ' + montserrat.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
