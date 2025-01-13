import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center p-4 bg-gray-800">
        <Link href="/home" legacyBehavior>
          <a>
            <Image width={128} height={32}
              src="/assets/icons/lofi-logo.gif"
              alt="Lofi Logo"
            />
          </a>
        </Link>
        <div className="flex space-x-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gaurav-shende-164a1b248/"
            className="flex items-center text-white hover:text-gray-300"
          >
            <i className="fab fa-linkedin mr-2"></i>
            <span>LinkedIn</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/s0meone12"
            className="flex items-center text-white hover:text-gray-300"
          >
            <i className="fab fa-github mr-2"></i>
            <span>GitHub</span>
          </a>
          <Link href="/about" legacyBehavior>
            <a className="flex items-center text-white hover:text-gray-300">
              <i className="fas fa-info mr-2"></i>
              <span>About Us</span>
            </a>
          </Link>
        </div>
      </nav>

      {/* Description Section */}
      <section className="text-white text-center mt-16 p-4 space-y-4 max-w-xl">
        <h1 className="text-lg">
          Welcome to the auto-generated lofi music app made by Phuc Le.
        </h1>
        <h1 className="text-lg">The purpose of this application is for learning.</h1>
        <h1 className="text-lg">This web application is inspired by Lofi.co.</h1>
        <h1 className="text-lg">
          This app generates background noises, lofi music, focus mode, and lets
          you customize everything.
        </h1>
        <h1 className="text-lg">Hope this helps you work more effectively!</h1>
        <Link href="/" legacyBehavior>
          <a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-lg">
              Back to Homepage
            </button>
          </a>
        </Link>
      </section>
    </div>
  );
};

export default About;
