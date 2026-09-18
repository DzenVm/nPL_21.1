import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gra logiczna w przeglądarce',
  description: 'Spokojna gra logiczna oparta na układaniu trasy i uważnej obserwacji planszy.',
  metadataBase: new URL('https://trasanaplanszy.online'),
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'pl_PL', title: 'Gra logiczna w przeglądarce', description: 'Ułóż trasę, zanim zmieni się układ planszy.' },
  robots: { index: true, follow: true }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pl"><body>{children}</body></html>; }
