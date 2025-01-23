'use client'
import React, { useState } from 'react';
import TimerStyled from '../TimerStyled/TimerStyled';

interface CountDownTimerProps {
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  pause: () => void;
  resume: () => void;
  restart:()=> void;
  setTimerHandler: (hours: number, minutes: number, seconds: number) => void;
  setTimerStart: (start: boolean) => void;
  timerStart: boolean;
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({
  seconds,
  minutes,
  hours,
  isRunning,
  pause,
  resume,
  setTimerHandler,
  setTimerStart,
  timerStart,
}) => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  const setTimerBtnHandler = () => {
    setTimerHandler(hour, minute, second);
    setTimerStart(true);
  };

  return (
    <div className="flex flex-col items-center h-[150px]">
      {timerStart ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-center items-center h-[80px]">
            <TimerStyled seconds={seconds} minutes={minutes} hours={hours} />
          </div>
          <div className="flex space-x-2">
            <button
              className="px-4 py-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-700"
              onClick={() => setTimerHandler(0, 0, 0)}
            >
              Cancel
            </button>
            {isRunning ? (
              <button
                className="px-4 py-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-700"
                onClick={pause}
              >
                Pause
              </button>
            ) : (
              <button
                className="px-4 py-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-700"
                onClick={resume}
              >
                Resume
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center translate-y-[50%] space-y-4">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <input
                className="w-12 px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded"
                type="number"
                value={hour}
                onChange={(e) => setHour(parseInt(e.target.value) || 0)}
                max={24}
                min={0}
              />
              <span className="text-white">Hour</span>
            </div>
            <div className="flex flex-col items-center">
              <input
                className="w-12 px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded"
                type="number"
                value={minute}
                onChange={(e) => setMinute(parseInt(e.target.value) || 0)}
                max={60}
                min={0}
              />
              <span className="text-white">Min</span>
            </div>
            <div className="flex flex-col items-center">
              <input
                className="w-12 px-2 py-1 bg-gray-800 text-white border border-gray-600 rounded"
                type="number"
                value={second}
                onChange={(e) => setSecond(parseInt(e.target.value) || 0)}
                max={60}
                min={0}
              />
              <span className="text-white">Sec</span>
            </div>
          </div>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={setTimerBtnHandler}
          >
            Set Timer
          </button>
        </div>
      )}
    </div>
  );
};

export default CountDownTimer;
