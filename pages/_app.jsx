import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </main>
  );
}
