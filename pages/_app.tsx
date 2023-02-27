import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import ComingSoon from './componenents/ComingSoon';
import Footer from './componenents/Footer';


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
        <Footer />
    </div>
  </>
  );
}

export default MyApp;
