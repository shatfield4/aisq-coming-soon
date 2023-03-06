import { useState } from 'react';
import Image from 'next/image';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="relative h-12 w-12 md:h-16 md:w-16">
        <Image
          src="/aisq_full_logo.svg"
          alt="Aisq Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex items-center">
        <a href="#features" className="text-white mr-8">
          Features
        </a>
        <a href="#pricing" className="text-white mr-8">
          Pricing
        </a>
        <a href="#contact" className="text-white mr-8">
          Contact Us
        </a>
        <button className="bg-white text-purple-600 py-2 px-4 rounded-full font-medium">
          Sign In
        </button>
      </div>
      {showMenu && (
        <div className="md:hidden absolute top-0 right-0 h-full w-full bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="flex flex-col items-center justify-center h-full">
            <a
              href="#features"
              className="text-white text-center text-2xl py-4"
              onClick={() => setShowMenu(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-white text-center text-2xl py-4"
              onClick={() => setShowMenu(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-white text-center text-2xl py-4"
              onClick={() => setShowMenu(false)}
            >
              Contact Us
            </a>
            <button className="bg-white text-purple-600 py-2 px-4 rounded-full font-medium mt-4">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
