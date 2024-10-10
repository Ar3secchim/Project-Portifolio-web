import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Manrope } from 'next/font/google';
import '../styles/globals.css';

const manrope = Manrope({
  weight: ['400', '200', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={manrope.className}>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </main>
  );
}
