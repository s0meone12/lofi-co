'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RainToggleButton from '@/components/RainToggleButton/RainToggleButton';
import Footer from '@/components/Footer/Footer';
import { useTimer } from 'react-timer-hook';
import YoutubeVideo from '@/components/YoutubeVideo/YoutubeVideo';
import Header from '@/components/Header/Header';
import ModifierBoard from '@/components/ModifierBoard/ModifierBoard';

interface RootState {
  modeState: {
    mode: string;
  };
  rainState: {
    rainMode: string;
  };
}

const Home: React.FC = () => {
  const [timerStart, setTimerStart] = useState(false);

  const daynight = useSelector((state: RootState) => state.modeState);
  const rain = useSelector((state: RootState) => state.rainState);

  const { mode } = daynight;
  const { rainMode } = rain;

  const combineMode = `${mode}-${rainMode}`;

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 0);

  const { seconds, minutes, hours, isRunning, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => setTimerStart(false),
    });

  const setTimerHandler = (
    hour: number,
    minute: number,
    second: number
  ): void => {
    const time = new Date();
    const setupTimer =
      Number(hour) * 3600 + Number(second) + Number(minute) * 60;
    time.setSeconds(time.getSeconds() + setupTimer);
    restart(time);
  };

  return (
    <>
      {/* Embedded the background video based on each state */}
      {/* Night */}
      <video
        className={`${
          combineMode === 'night-clear' ? 'opacity-100' : 'opacity-0'
        } object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Night-clear.mp4" type="video/mp4" />
      </video>
      <video
        className={`${
          combineMode === 'night-rain' ? 'opacity-100' : 'opacity-0'
        }  object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Night-rainny.mp4" type="video/mp4" />
      </video>
      {/* Day */}
      <video
        className={`${
          combineMode === 'day-clear' ? 'opacity-100' : 'opacity-0'
        } object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Day-sunny.mp4" type="video/mp4" />
      </video>
      <video
        className={`${
          combineMode === 'day-rain' ? 'opacity-100' : 'opacity-0'
        } object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Day-rainny.mp4" type="video/mp4" />
      </video>
      <Header/>
      <RainToggleButton />
      <ModifierBoard
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        isRunning={isRunning}
        pause={pause}
        resume={resume}
        restart={restart}
        setTimerHandler={setTimerHandler}
        setTimerStart={setTimerStart}
        timerStart={timerStart}
      />
      <YoutubeVideo />
      <Footer/>
    </>
  );
};

export default Home;
