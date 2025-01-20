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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const moodState = useSelector((state: any) => state.moodState);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rainState = useSelector((state: any) => state.rainState);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRainSliderChange = (e: any) => {
    const value = e.target.value;
    if (value > 0) {
      dispatch(changeRainStatus('rain', cityRain));
    } else {
      dispatch(changeRainStatus('clear', 0));
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
        className={`fixed top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-gray-300 rounded-full flex flex-col items-center justify-around py-4 px-2 ${openMood ? 'rounded-r-full' : 'rounded-full'}`}
      >
        <div
          className={`p-4 cursor-pointer ${openMood ? 'text-yellow-500' : ''}`}
          onClick={toggleMood}
        >
          <i className="fas fa-sliders-h fa-2x"></i>
        </div>

        {openMood && (
          <div className="absolute right-full top-0 bg-black bg-opacity-80 text-white w-96 h-[450px] rounded-xl p-6">
            <h4 className="text-lg font-semibold">Mood</h4>
            <div className="flex mt-4">
              {['sleep', 'jazzy', 'chill'].map((mood) => (
                <div
                  key={mood}
                  id={mood}
                  onClick={handleMoodChange}
                  className={`flex flex-col items-center justify-center w-1/3 mx-1 p-3 rounded-lg cursor-pointer ${moodMode === mood ? 'bg-yellow-500 text-white' : 'bg-gray-800'}`}
                >
                  <i className={`fas ${
                    mood === 'sleep'
                      ? 'fa-moon'
                      : mood === 'jazzy'
                      ? 'fa-guitar'
                      : 'fa-coffee'
                  } fa-2x`}></i>
                  <span>{mood.charAt(0).toUpperCase() + mood.slice(1)}</span>
                </div>
              ))}
            </div>

            <div className="my-6">
              <h5 className="font-semibold">Volume</h5>
              <Stack direction="row" spacing={2} alignItems="center">
                <i className="fas fa-volume-down"></i>
                <Slider
                  value={volumeValue}
                  onChange={handleVolumeChange}
                  aria-labelledby="volume-slider"
                />
                <i className="fas fa-volume-up"></i>
              </Stack>
            </div>

            <h5 className="font-semibold mb-2">Background Noise</h5>
            <div className="overflow-y-scroll h-60">
              {[
                { label: 'City traffic', value: cityTraffic, setValue: setCityTraffic },
                { label: 'City rain', value: rainValue, setValue: setCityRain },
                { label: 'Fireplace', value: fireplace, setValue: setFireplace },
                { label: 'Snow', value: snow, setValue: setSnow },
                { label: 'Summer Storm', value: summerStorm, setValue: setSummerStorm },
                { label: 'Fan', value: fan, setValue: setFan },
                { label: 'Forest Night', value: forestNight, setValue: setForestNight },
                { label: 'Wave', value: wave, setValue: setWave },
                { label: 'Wind', value: wind, setValue: setWind },
                { label: 'People', value: people, setValue: setPeople },
                { label: 'River', value: river, setValue: setRiver },
                { label: 'Rain Forest', value: rainForest, setValue: setRainForest },
              ].map(({ label, value, setValue }) => (
                <div key={label} className="flex justify-between items-center mb-3">
                  <span>{label}</span>
                  <Slider
                    value={value}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e: any) => setValue(e.target.value)}
                    className="w-2/3"
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
            <h4 className="text-lg font-semibold mt-6">To-do List</h4>
            <TodoList />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModifierBoard;
