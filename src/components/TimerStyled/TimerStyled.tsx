import React from 'react';
import Digit from '../Digit/Digit';

interface TimerStyledProps {
  seconds: number;
  minutes: number;
  hours: number;
}

const TimerStyled: React.FC<TimerStyledProps> = ({ seconds, minutes, hours }) => {
  return (
    <div className="flex items-center mb-8">
      <Digit value={hours} title="HOURS"  />
      <span className="flex flex-col items-center self-end mx-2">
        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full my-1"></span>
        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full my-1"></span>
      </span>
      <Digit value={minutes} title="MINUTES" />
      <span className="flex flex-col items-center self-end mx-2">
        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full my-1"></span>
        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full my-1"></span>
      </span>
      <Digit value={seconds} title="SECONDS" />
    </div>
  );
};

export default TimerStyled;
