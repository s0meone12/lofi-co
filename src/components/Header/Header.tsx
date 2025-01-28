'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '@/redux/hooks';
import { changeDayNight } from '@/redux/actions';
import DarkLightSwitch from '@/components/DarkLightSwitch/DarkLightSwitch';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [fullscreen, setFullscreen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const daynight = useSelector((state: any) => state.modeState);
  const dispatch = useDispatch();

  const { mode } = daynight;

  const daynightHandler = () => {
    dispatch(changeDayNight(mode));
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enter fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  };

  return (
    <nav className="absolute left-0 w-full z-10 flex items-center">
      <Link href="/">
        <Image
          src="/assets/icons/lofi-logo.gif"
          unoptimized
          alt="Lofi Logo"
          width={150}
          height={150}
          className="max-w-[150px] max-h-[150px]"
        />
      </Link> 
      <div className="flex justify-center w-full relative">
        {/* Middle-left section */}
        <div className="absolute left-[22%] transform-translate-x-1/4 flex space-x-10">
          <Link href="/about" className="flex items-center text-white">
            <i className="fas fa-info"></i>
            <span className="ml-2 text-sm tracking-wide relative after:content-[''] after:block after:h-[2px] after:bg-white after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:opacity-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-&lsqb;cubic-bezier(0.25,0.46,0.45,0.94)&rsqb; hover:after:opacity-100 hover:after:scale-x-100">
              How it works
            </span>
          </Link>
          <a
            href="https://github.com/s0meone12/lofi-co"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-white"
          >
            <i className="fab fa-github"></i>
            <span className="ml-2 text-sm tracking-wide relative after:content-[''] after:block after:h-[2px] after:bg-white after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:opacity-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-&lsqb;cubic-bezier(0.25,0.46,0.45,0.94)&rsqb; hover:after:opacity-100 hover:after:scale-x-100">
              GitHub
            </span>
          </a>
        </div>

        {/* Middle-right section */}
        <div className="absolute right-[35%] transform translate-x-1/4 flex space-x-5">
          <div onClick={daynightHandler} className="cursor-pointer">
            <DarkLightSwitch theme={mode} />
          </div>
          <button onClick={toggleFullscreen} className="fullscreen-btn">
            {fullscreen ? (
              <i className="fa-solid fa-compress fa-lg text-white"></i>
            ) : (
              <i className="fa-solid fa-expand fa-lg text-white"></i>
            )}
          </button>
        </div>
      </div>

      <Link href="/login" className="flex items-center text-white pr-20">
        <i className="fas fa-sign-in-alt"></i>
        <span className="ml-2 text-sm tracking-wide relative after:content-[''] after:block after:h-[2px] after:bg-white after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:opacity-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-&lsqb;cubic-bezier(0.25,0.46,0.45,0.94)&rsqb; hover:after:opacity-100 hover:after:scale-x-100">
             Login
            </span>
      </Link>
    </nav>
  );
};

export default Header;
