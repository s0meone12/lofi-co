'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from '@/redux/hooks';
import { changeRainStatus } from '../../redux/actions';
import ReactAudioPlayer from 'react-audio-player';

interface RootState {
  rainState: {
    rainMode: string;
    rainValue: number;
  };
}

const RainToggleButton: React.FC = () => {
  const dispatch = useDispatch();
  const rain = useSelector((state: RootState) => state.rainState);
  const { rainMode, rainValue } = rain;

  const [buttonClick, setButtonClick] = useState(false);

  const rainButtonHandler = () => {
    if (rainValue === 0) dispatch(changeRainStatus(rainMode, 30));
    else dispatch(changeRainStatus(rainMode, 0));
    setButtonClick(!buttonClick);
  };

  return (
    <div className="z-10 absolute right-3 top-[12%] w-[250px] h-[100px] text-white text-sm font-sans cursor-pointer flex flex-col items-center justify-center">
      {buttonClick && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="./assets/musics/rain_city.mp3"
          loop
          volume={rainValue / 100}
        />
      )}
      <div
        className="text-lg border-2 border-white rounded-full w-10 h-10 m-1 transition-[width,background-color,box-shadow] duration-&lsqb;0.5s&rsqb; ease-&lsqb;cubic-bezier(0.68,-0.55,0.265,1.55)&rsqb; hover:w-[125px] hover:bg-black/80 hover:shadow-md hover:text-[#91ccc2] hover:border-none active:shadow-sm active:duration-75"
        onClick={rainButtonHandler}
      >
        <div className="relative top-1/2 transform -translate-y-1/2 text-center">
          <i className="fas fa-cloud-rain"></i>
        </div>
      </div>
    </div>
  );
};

export default RainToggleButton;
