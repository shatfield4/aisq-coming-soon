import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import ComingSoon from './componenents/ComingSoon';
import FooterBar from './componenents/FooterBar';
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aisq - Coming Soon</title>
      </Head>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <main className="flex-1">
          <ComingSoon />
        </main>
        <FooterBar />
    </div>
    <Analytics />
  </>
  );
}

export default MyApp;
