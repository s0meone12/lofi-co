'use client'
import React, { useState } from 'react';
import { chill, jazzy, sleep } from '../../data/songData';
import { useSelector } from 'react-redux';
import Player from '../Player/Player';

type MoodState = {
  moodMode: 'chill' | 'jazzy' | 'sleep';
};

type RootState = {
  moodState: MoodState;
};

const Footer: React.FC = () => {
  const data = useSelector((state: RootState) => state.moodState);
  const { moodMode } = data;

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className="absolute bottom-0 w-full  flex pb-10 items-center px-6">
      <div className="author flex items-center">
        {moodMode === 'chill' ? (
          <span className="text-white">Song name: {chill[currentSongIndex].name}</span>
        ) : moodMode === 'jazzy' ? (
          <span className="text-white">Song name: {jazzy[currentSongIndex].name}</span>
        ) : (
          <span className="text-white">Song name: {sleep[currentSongIndex].name}</span>
        )}
      </div>
      <div className="controller flex items-center absolute left-1/2 transform -translate-x-1/2">
        {moodMode === 'chill' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={chill}
          />
        ) : moodMode === 'jazzy' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={jazzy}
          />
        ) : (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={sleep}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
