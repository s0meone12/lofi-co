'use client'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '@/redux/hooks';
import { changeDayNight } from '@/redux/actions';
import DarkLightSwitch from '@/components/DarkLightSwitch/DarkLightSwitch';
import Link from 'next/link';


const Header: React.FC = () => {
  const [fullscreen, setFullscreen] = useState(false);
//   const data = useSelector((state: any) => state.userState);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const daynight = useSelector((state: any) => state.modeState);
  const dispatch = useDispatch();

  const { mode } = daynight;

  const daynightHandler = () => {
    dispatch(changeDayNight(mode));
  };

//   const fullscreenHandler = () => {
//     if (!fullscreen) {
//       setFullscreen(true);
//       const e = document.documentElement;
//       e.requestFullscreen();
//     } else {
//       setFullscreen(false);
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       } else if (document.webkitExitFullscreen) {
//         /* Safari */
//         document.webkitExitFullscreen();
//       } else if (document.msExitFullscreen) {
//         /* IE11 */
//         document.msExitFullscreen();
//       }
//     }
//   };

useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement); // `fullscreenElement` is null if not in fullscreen
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
    <nav className="absolute top-0 left-0 w-full h-10 z-10 bg-gradient-to-b from-gray-800 via-gray-800/80 to-transparent flex justify-between items-center p-2.5">
      <Link href="/">
        <img src="/assets/icons/lofi-logo.gif" alt="" className="max-w-[150px] max-h-[150px]" />
      </Link>
      <div className="flex-1 flex justify-end space-x-5">
        <Link href="/about" className="flex items-center text-white">
          <i className="fas fa-info"></i>
          <span className="ml-2 text-sm tracking-wide relative after:content-[''] after:block after:h-[2px] after:bg-white after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:opacity-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:after:opacity-100 hover:after:scale-x-100">
            How it works
          </span>
        </Link>
        <a
          href="https://github.com/phuclevinh2000/Lofi-website"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-white"
        >
          <i className="fab fa-github"></i>
          <span className="ml-2 text-sm tracking-wide relative after:content-[''] after:block after:h-[2px] after:bg-white after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:opacity-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:after:opacity-100 hover:after:scale-x-100">
            GitHub
          </span>
        </a>
        <div onClick={daynightHandler} className="cursor-pointer">
          <DarkLightSwitch theme={mode} />
        </div>
        <button onClick={toggleFullscreen} className="fullscreen-btn">
      {fullscreen ? (

      <i className="fa-solid fa-compress fa-lg"></i> // Icon for exiting fullscreen
      ) : (
        <i className="fa-solid fa-expand fa-lg"></i> // Icon for entering fullscreen
      )}
    </button>
      </div>
    </nav>
  );
};

export default Header;
