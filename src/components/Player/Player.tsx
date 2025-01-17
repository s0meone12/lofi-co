import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers'; // Adjust the path as per your project structure

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
    <div className="flex flex-col items-center text-white rounded-lg shadow-md">
      <audio loop src={songs[currentSongIndex]?.src} ref={audioElement}></audio>
      <div className="flex items-center space-x-4">
        <button
          className="skip-btn w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-gray-600"
          onClick={() => SkipSong(false)}
        >
          <img src="/assets/icons/prev.svg" alt="Previous" className="w-6 h-6" />
        </button>
        <button
          className="play-btn w-12 h-12 flex justify-center items-center bg-gray-700 rounded-full hover:bg-gray-600"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <img src="/assets/icons/pause.svg" alt="Pause" className="w-6 h-6" />
          ) : (
            <img src="/assets/icons/play.svg" alt="Play" className="w-6 h-6" />
          )}
        </button>
        <button
          className="skip-btn w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-gray-600"
          onClick={() => SkipSong(true)}
        >
          <img src="/assets/icons/next.svg" alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Player;
