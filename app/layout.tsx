import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: '山根プロ - 一流の芸能事務所',
  description: '1997年創業、日本を代表する芸能事務所として、数多くの才能ある俳優、女優、タレントをサポートしています。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-gradient-to-br from-white via-slate-50 to-blue-50 text-gray-800 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}