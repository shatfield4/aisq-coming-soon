import Image from 'next/image';
import { useEffect, useState } from 'react';

const ComingSoon = () => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowButton(true), 1500);
    setTimeout(() => setShowImage(true), 1500);
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mb-40">
      <div className={`relative h-40 w-40 md:h-40 md:w-64 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src="/aisq_full_logo.svg"
          alt="Aisq Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1 className={`font-inter font-medium md:text-6xl text-4xl leading-6xl tracking-tighter text-white bg-clip-text text-center transition-opacity duration-1000 delay-500 mx-6 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        Automate Your Shopify<br />Customer Service Experience
      </h1>
      <div className={`font-inter font-normal md:text-2xl text-xl leading-2xl text-gray-400 mt-5 text-center mx-6 transition-opacity duration-1000 delay-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        No more manual responses, no more missed emails.
      </div>
      <button className={`flex items-center justify-center font-inter font-medium text-base text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full pl-8 pr-6 py-3 mt-8 transition-opacity duration-1000 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
        <span>Coming Soon</span>
        <svg className="w-4 h-4 ml-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="flex justify-center my-8 w-full md:w-2/3 px-5 mt-16">
        <div className={`rounded-xl p-2 shadow-purple-glow transition-opacity duration-1000 ${showImage ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/dashboard.png"
            alt="Dashboard"
            width={1200}
            height={800}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
