import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import { FaPlug, FaDesktop, FaClipboardList, FaEnvelopeOpenText } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aisq - Coming Soon</title>
      </Head>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        {/* Top bar */}
        <nav className="bg-gray-800 text-white py-2">
          <div className="container mx-auto flex justify-between items-center">
            <div className="h-10 w-10 md:h-12 md:w-12 relative">
              <Image
                src="/aisq_no_letters.svg"
                alt="Aisq Logo"
                layout="fill"
                objectFit="contain"
                className='p-1'
              />
            </div>
            <button className="block md:hidden">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>
            <ul className="hidden md:flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Content */}
        <main className="flex-1">
          <div className="container mx-auto flex flex-col items-center justify-center mb-40">
            <div className="relative h-40 w-40 md:h-64 md:w-64">
              <Image
                src="/aisq_full_logo.svg"
                alt="Aisq Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-white text-center mt-2 md:text-lg max-w-2xl">
              Coming soon.
            </p>
            <div className="flex flex-col items-center mt-8 md:flex-row md:justify-center md:mt-16">
            <div className="w-full md:w-2/3">
              <h2 className="text-green-500 text-3xl font-bold text-center mb-8">Key Features</h2>
              <ul className="text-gray-300 space-y-8">
                <li className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="rounded-full bg-green-500 p-2 md:p-4">
                    <FaPlug className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                  <div className="ml-4 md:ml-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white">Powerful API</h3>
                    <p className="text-gray-400 mt-2 md:text-lg max-w-md">
                      Integrate with ease and speed. Our API is designed to make the process as simple as possible.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="rounded-full bg-green-500 p-2 md:p-4">
                    <FaDesktop className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                  <div className="ml-4 md:ml-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white">Connects to Your Store</h3>
                    <p className="text-gray-400 mt-2 md:text-lg max-w-md">
                    Connect your Shopify store and access your customer support inbox directly in our app.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="rounded-full bg-green-500 p-2 md:p-4">
                    <FaClipboardList className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                  <div className="ml-4 md:ml-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white">Automated Customer Support</h3>
                    <p className="text-gray-400 mt-2 md:text-lg max-w-md">
                      Respond to your customers with order and shipping updates, refunds, returns, and replacements, all from within our app.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="rounded-full bg-green-500 p-2 md:p-4">
                    <FaEnvelopeOpenText className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                  <div className="ml-4 md:ml-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white">AI-Powered Support</h3>
                    <p className="text-gray-400 mt-2 md:text-lg max-w-md">
                      Train the AI in our app to respond to customer support emails based on rules you set in plain English, and filter out emails that don't require a response.
                    </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      </div>
    </main>
    {/* Footer */}
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm">
          Made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          by Aisq
        </p>
      </div>
    </footer>
  </div>
</>
);
}

export default MyApp;
