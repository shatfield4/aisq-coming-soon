import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center text-center mb-4 md:mb-0 md:text-left md:mr-8">
          <div className="mr-4">
            <Image src="/aisq_full_logo.svg" alt="Aisq logo" width={80} height={80} />
          </div>
          <p className="text-gray-400 text-sm">© 2023 All rights reserved.</p>
        </div>
        <div className="text-center md:text-left">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white text-sm">Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white text-sm">Terms of Service</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-400 hover:text-white text-sm">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
