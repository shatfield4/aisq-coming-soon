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
        {/* Content */}
        <main className="flex-1">
          <div className="container mx-auto flex flex-col items-center justify-center mb-40">
            <div className="relative h-40 w-40 md:h-40 md:w-64">
              <Image
                src="/aisq_full_logo.svg"
                alt="Aisq Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            {/* <div className="relative h-screen w-screen md:h-full md:w-auto bg-gray-900 shadow-xl rounded-xl">
              <Image
                src="/dashboard.svg"
                alt="Dashboard"
                layout="fill"
                objectFit="cover"
              />
            </div> */}




            <h1 className="font-inter font-medium md:text-6xl text-4xl leading-6xl tracking-tighter text-white bg-clip-text text-center">
              Automate Your Shopify<br />Customer Service Experience
            </h1>

            <div className="font-inter font-normal text-2xl leading-2xl text-gray-400 mt-5 text-center mx-6">
              No more manual responses, no more missed emails.
            </div>
            <button className="flex items-center justify-center font-inter font-medium text-base text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full pl-8 pr-6 py-3 mt-8">
              <span>Coming Soon</span>
              <svg className="w-4 h-4 ml-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>







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
                      Train the AI in our app to respond to customer support emails based on rules you set in plain English, and filter out emails that dont require a response.
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
