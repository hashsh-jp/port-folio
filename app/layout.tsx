import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const noto_sans_jp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: '橋本 和也 ポートフォリオ',
  description: '橋本 和也のポートフォリオサイトです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto_sans_jp.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}