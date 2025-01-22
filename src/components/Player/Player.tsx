'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers'; // Adjust the path as per your project structure
import Image from 'next/image'; // Import Next.js Image component

interface Song {
  src: string;
  title?: string;
  artist?: string;
}

interface PlayerProps {
  currentSongIndex: number;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
  songs: Song[];
}

const Player: React.FC<PlayerProps> = ({ currentSongIndex, setCurrentSongIndex, songs }) => {
  const data = useSelector((state: RootState) => state.volumeState);
  const { volumeValue } = data;

  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioElement.current) {
      if (isPlaying) {
        audioElement.current.play();
      } else {
        audioElement.current.pause();
      }
      audioElement.current.volume = volumeValue / 100;
    }
  }, [isPlaying, volumeValue]);

  useEffect(() => {
    if (isPlaying && audioElement.current) {
      audioElement.current.play();
    }
  }, [currentSongIndex, isPlaying]);

  const SkipSong = (forwards = true) => {
    setCurrentSongIndex((prevIndex) => {
      let temp = forwards ? prevIndex + 1 : prevIndex - 1;
      if (temp < 0) temp = songs.length - 1;
      if (temp >= songs.length) temp = 0;
      return temp;
    });
  };

  return (
    <div className="z-50 flex flex-col items-center text-white p-8 mb-12 relative ">
      <audio loop src={songs[currentSongIndex]?.src} ref={audioElement}></audio>
      <div className="flex items-center space-x-10">
        <button
          className="skip-btn w-16 h-16 flex justify-center items-center bg-transparent rounded-full transition duration-200"
          onClick={() => SkipSong(false)}
        >
          <Image src="/assets/icons/prev.svg" alt="Previous" width={60} height={60} />
        </button>
        <button
          className="play-btn w-20 h-20 flex justify-center items-center bg-transparent rounded-full transition duration-200"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Image src="/assets/icons/pause.svg" alt="Pause" width={72} height={72} />
          ) : (
            <Image src="/assets/icons/play.svg" alt="Play" width={72} height={72} />
          )}
        </button>
        <button
          className="skip-btn w-16 h-16 flex justify-center items-center bg-transparent rounded-full transition duration-200"
          onClick={() => SkipSong(true)}
        >
          <Image src="/assets/icons/next.svg" alt="Next" width={60} height={60} />
        </button>
      </div>
    </div>
  );
};

export default Player;
