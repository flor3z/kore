import Logo from './Logo';
import { FaInstagram } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="block">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="flex-col flex items-center">
          <Logo />
          <div className="text-center font-semibold">
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              Works
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              Support
            </a>
            <a
              href="#"
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-blue-600"
            >
              Help
            </a>
          </div>
          <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>
          <div className="mb-12 grid-cols-3 grid-flow-col grid max-w-52 gap-12 mx-auto">
            <a
              href="mailto:koreaesthetics.ko@gmail.com"
              className="mx-auto flex-col flex text-2xl max-w-10 items-center drop-shadow-lg justify-center text-black"
            >
              <SiGmail />
            </a>
            <a
              href="https://www.instagram.com/koreaesthetics.ko/"
              target="_blank"
              className="mx-auto flex-col flex text-2xl max-w-10 items-center drop-shadow-lg justify-center text-black"
            >
              <FaInstagram />
            </a>
            <a
              href="tel:+1-905-462-1687"
              className="mx-auto flex-col flex text-2xl max-w-10 items-center drop-shadow-lg justify-center text-black"
            >
              <FaPhoneSquareAlt />
            </a>
          </div>
          <p className="text-sm sm:text-base">
            © Copyright 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
