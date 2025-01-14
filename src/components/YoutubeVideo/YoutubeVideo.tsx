'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import ReactPlayer from 'react-player';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const YoutubeVideo: React.FC = () => {
  const [youtubeLink, setYoutubeLink] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYoutubeLink(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed bottom-1/2 left-4 z-50">
      {submitted ? (
        <div className="flex flex-col items-start">
          <ReactPlayer
            width="200px"
            height="100px"
            loop
            controls
            url={youtubeLink}
          />
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 px-3 py-1 bg-gray-800 text-gray-400 rounded hover:text-white"
          >
            Choose another video
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
           <Input
            value={youtubeLink}
            onChange={handleChange}
            placeholder="Youtube Music URL"
            className="flex-grow"
          />
           <Button
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default YoutubeVideo;
