'use client'; // Add this if you're using the App Router

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '/styles/globals.css';
import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaStar } from 'react-icons/fa';
import '/styles/globals.css';

export default function FeedbackForm() {
  const router = useRouter();
  const [timer, setTimer] = useState('00:00:00');

  const handleEnd = () => {
    router.push('/interview_submitted');
  };

  const handlePause = () => {
    router.push('/interview_paused');
  };
  useEffect(() => {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    const interval = setInterval(() => {
      seconds += 1;

      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }

      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }

      setTimer(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    }, 1000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);



  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-6 px-8 w-full mx-auto">
      <h3 className='text-center font-bold text-2xl mb-8'>Front Desk Staff Interview</h3>
      <p className="text-center mb-6 text-xl">{timer}</p>
      <div className="relative w-[8rem] h-[8rem] rounded-full border-15 border-[#424242] mb-4 shadow-lg animate-blob">
        <Image
          src="/ai.png"
          alt="Avatar 1"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-[8rem] h-[8rem] rounded-full border-15 border-[#EE6C4D] mb-8 shadow-lg">
        <Image
          src="/user.png"
          alt="Avatar 2"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className='border-[#c7c7c7] border-2 rounded-lg p-2 flex flex-row items-center justify-between w-full mb-4'>
      <div className='border-[#424242] border-2 rounded-lg p-3 bg-[#424242] mr-5'>
        <FaMicrophone size={26} className='text-white'/>
      </div>
      ----------------------

      </div>
      <div className="flex justify-between mt-6 bottom-0 w-full">
        <button
          onClick={handleEnd}
          className="bg-[#AEAEAE] text-white px-5 py-2 rounded-md flex items-center text-sm"
        >
          End Interview
        </button>
        <button
          onClick={handlePause}
          className="bg-[#EE6C4D] text-white px-5 py-2 rounded-md flex items-center text-sm"
        >
          Pause Interview
        </button>
      </div>

        
    </div>
  );
}
