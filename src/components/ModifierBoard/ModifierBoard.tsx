'use client'
import { useState } from 'react';
import { useDispatch, useSelector } from '@/redux/hooks';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import ReactAudioPlayer from 'react-audio-player';
import CountDownTimer from '../CountDownTimer/CountDownTimer';
import TodoList from '../TodoList/TodoList';
import { changeMoodStatus, changeRainStatus, changeVolume } from '../../redux/actions';

interface ModifierBoardProps {
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  pause: () => void;
  resume: () => void;
  restart: () => void;
  setTimerHandler: (hours: number, minutes: number, seconds: number) => void;
  setTimerStart: (start: boolean) => void;
  timerStart: boolean;
}

const ModifierBoard: React.FC<ModifierBoardProps> = ({
  seconds,
  minutes,
  hours,
  isRunning,
  pause,
  resume,
  restart,
  setTimerHandler,
  setTimerStart,
  timerStart,
}) => {
  const dispatch = useDispatch();
  /*eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const moodState = useSelector((state: any) => state.moodState);
  /*eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const rainState = useSelector((state: any) => state.rainState);
  /*eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const volumeState = useSelector((state: any) => state.volumeState);

  const { rainValue } = rainState;
  const { moodMode } = moodState;
  const { volumeValue } = volumeState;

  const [openMood, setOpenMood] = useState(false);
  const [openFocus, setOpenFocus] = useState(false);

  const [cityTraffic, setCityTraffic] = useState(0);
  const [cityRain, setCityRain] = useState(rainValue);
  const [fireplace, setFireplace] = useState(0);
  const [snow, setSnow] = useState(0);
  const [summerStorm, setSummerStorm] = useState(0);
  const [fan, setFan] = useState(0);
  const [forestNight, setForestNight] = useState(0);
  const [wave, setWave] = useState(0);
  const [wind, setWind] = useState(0);
  const [people, setPeople] = useState(0);
  const [river, setRiver] = useState(0);
  const [rainForest, setRainForest] = useState(0);

  const toggleMood = () => {
    setOpenMood(!openMood);
    setOpenFocus(false);
  };

  const toggleFocus = () => {
    setOpenFocus(!openFocus);
    setOpenMood(false);
  };

  /*eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const handleRainSliderChange = (e: any) => {
    const value = e.target.value;
    if (value > 0) {
      dispatch(changeRainStatus('clear', cityRain));
    } else {
      dispatch(changeRainStatus('rain', 0));
    }
    setCityRain(value);
  };

  const handleMoodChange = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(changeMoodStatus(e.currentTarget.id));
  };

  const handleVolumeChange = (e: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      dispatch(changeVolume(newValue));
    }
  };

  return (
    <div className="relative">
      {!openMood && (
        <div>
          <ReactAudioPlayer
            preload="auto"
            autoPlay
            src="./assets/musics/city_traffic.mp3"
            loop
            volume={cityTraffic / 100}
          />
          <ReactAudioPlayer
            preload="auto"
            autoPlay
            src="./assets/musics/fireplace.mp3"
            loop
            volume={fireplace / 100}
          />
          <ReactAudioPlayer
            preload="auto"
            autoPlay
            src="./assets/musics/rain_city.mp3"
            loop
            volume={rainValue / 100}
          />
        </div>
      )}

      <div
        className={`fixed z-50 top-[40%] right-0 transform -translate-y-1/2 bg-black bg-opacity-80 text-gray-300 rounded-full flex flex-col items-center justify-around w-[60px] mr-[20px] ${openMood ? 'rounded-r-full' : 'rounded-full'}`}
      >
        <div
          className={`p-4 cursor-pointer ${openMood ? 'text-yellow-500' : ''}`}
          onClick={toggleMood}
        >
          <i className="fas fa-sliders-h fa-2x"></i>
        </div>

        {openMood && (
          <div className="absolute right-full top-0 bg-black bg-opacity-80 text-white w-96 h-[450px] rounded-xl p-6 overflow-hidden">
            <h4 className="text-lg font-semibold">Mood</h4>
            <div className="flex mt-4">
              {['sleep', 'jazzy', 'chill'].map((mood) => (
                <div
                  key={mood}
                  id={mood}
                  onClick={handleMoodChange}
                  className={`flex flex-col items-center justify-center w-full h-[85px] mx-3 p-3 rounded-lg cursor-pointer bg-[#14141d] text-[#4e5054]`}
                >
                  <i className={`fas ${
                    mood === 'sleep'
                      ? 'fa-moon'
                      : mood === 'jazzy'
                      ? 'fa-guitar'
                      : 'fa-coffee'
                  } fa-2x ${
                    moodMode === mood ? 'text-[#f3a952]' : 'text-[#4e5054]'
                  }`}></i>
                  <span className={`${moodMode === mood ? 'text-[#ffff]' : 'text-[#4e5054]'}`}>{mood.charAt(0).toUpperCase() + mood.slice(1)}</span>
                </div>
              ))}
            </div>

            <div className="my-6">
              <Stack 
                direction="row" 
                spacing={2} 
                sx={{ mb: 1 }}
                alignItems="center"
                >
                <i className="fas fa-volume-down fa-lg text-[#f3a952]"></i>
                <Slider
                  value={volumeValue}
                  onChange={handleVolumeChange}
                 
                  sx={{
                    height: 10,
                    color: '#f3a952',
                    '& .MuiSlider-rail': {
                      backgroundColor: '#4e5054',
                    },
                  }}
                />
                <i className="fas fa-volume-up fa-lg text-[#f3a952]"></i>
              </Stack>
            </div>

            <h5 className="font-semibold mb-2">Background Noise</h5>
            <div className="overflow-y-auto h-60 w-full p-2 no-scrollbar">
            <div className="flex justify-between items-center mb-3">
                  <span className='text-[#4e5054]'>
                    City rain
                    </span>
                  <ReactAudioPlayer
                      preload="auto"
                      autoPlay
                      src='./assets/musics/rain_city.mp3'
                      loop
                      volume={rainValue / 100}
                    />
                  <Slider
                    value={rainValue}
                    onChange={handleRainSliderChange}
                    className="w-2/3"
                    sx={{
                      height: 10,
                      width: 180,
                      color: '#f3a952',
                      '& .MuiSlider-rail': {
                        backgroundColor: '#4e5054',
                      },
                    }}
                  />
                </div>
              {[ 
                { label: 'City traffic', value: cityTraffic, setValue: setCityTraffic, src: './assets/musics/city_traffic.mp3' },
                // { label: 'City rain', value : cityRain, setValue: setCityRain, src:  './assets/musics/rain_city.mp3'},
                { label: 'Fireplace', value: fireplace, setValue: setFireplace, src: './assets/musics/fireplace.mp3' },
                { label: 'Snow', value: snow, setValue: setSnow, src: './assets/musics/snow.mp3' },
                { label: 'Summer Storm', value: summerStorm, setValue: setSummerStorm, src: './assets/musics/summer_storm.mp3' },
                { label: 'Fan', value: fan, setValue: setFan, src: './assets/musics/fan.mp3' },
                { label: 'Forest Night', value: forestNight, setValue: setForestNight, src: './assets/musics/forest_night.mp3' },
                { label: 'Wave', value: wave, setValue: setWave, src: './assets/musics/waves.mp3' },
                { label: 'Wind', value: wind, setValue: setWind, src: './assets/musics/wind.mp3' },
                { label: 'People', value: people, setValue: setPeople, src: './assets/musics/people_talk_inside.mp3' },
                { label: 'River', value: river, setValue: setRiver, src: './assets/musics/river.mp3' },
                { label: 'Rain Forest', value: rainForest, setValue: setRainForest, src: './assets/musics/rain_forest.mp3' },
              ].map(({ label, value, src, setValue }) => (
                <div key={label} className="flex justify-between items-center mb-3">
                  <span className='text-[#4e5054]'>
                    {label}
                    </span>
                  <ReactAudioPlayer
                      preload="auto"
                      autoPlay
                      src={src}
                      loop
                      volume={value / 100}
                    />
                  <Slider
                    value={value}
                    /*eslint-disable-next-line @typescript-eslint/no-explicit-any */
                    onChange={(e: any) => setValue(e.target.value)}
                    className="w-2/3"
                    sx={{
                      height: 10,
                      width: 180,
                      color: '#f3a952',
                      '& .MuiSlider-rail': {
                        backgroundColor: '#4e5054',
                      },
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className={`p-4 cursor-pointer ${openFocus ? 'text-yellow-500' : ''}`}
          onClick={toggleFocus}
        >
          <i className="fas fa-book-reader fa-2x"></i>
        </div>

        {openFocus && (
          <div className="absolute right-full top-0 bg-black bg-opacity-80 text-white w-96 h-[450px] rounded-xl p-6">
            <h4 className="text-lg font-semibold">Focus Mode</h4>
            <CountDownTimer
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
            <h4 className="text-lg font-semibold ">To-do List</h4>
            <TodoList />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModifierBoard;
