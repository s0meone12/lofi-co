import React from 'react';

interface DigitProps {
  value: number;
  title: string;
}

const Digit: React.FC<DigitProps> = ({ value, title }) => {
  const leftDigit = value >= 10 ? value.toString()[0] : '0';
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();

  return (
    <div className="flex flex-col items-center mx-1 first:ml-0">
      <span className="text-xs mb-1 text-gray-400">{title}</span>
      <div className="flex">
        <span className="relative flex justify-center items-center text-lg bg-gray-700 rounded-md px-3 py-2 text-white mr-1">
          {leftDigit}
          <span className="absolute inset-0 top-1/2 h-0.5 bg-gray-600 opacity-40"></span>
        </span>
        <span className="relative flex justify-center items-center text-lg bg-gray-700 rounded-md px-3 py-2 text-white">
          {rightDigit}
          <span className="absolute inset-0 top-1/2 h-0.5 bg-gray-600 opacity-40"></span>
        </span>
      </div>
    </div>
  );
};

export default Digit;
