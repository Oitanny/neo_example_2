'use client'; // Add this if you're using the App Router

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '/styles/globals.css';

export default function InterviewPaused() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/main');
  };

  const handleNext = () => {
    router.push('/interview_submitted');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-6 px-8">
      {/* <div className="flex flex-row absolute top-5 left-5 items-center">
        <Image src="/back_arrow.svg" alt="Back Arrow" width={15} height={15} />
        <button
          onClick={handleGoBack}
          className="border-none bg-white px-3 py-1 text-black flex items-center"
        >
          <span className="ml-1">Go Back</span>
        </button>
      </div> */}
      <h1 className='text-center font-bold text-2xl mb-8'>Interview Paused</h1>
      <div className="bg-[#E0FBFC] shadow-md rounded-md w-56 h-56 items-center justify-center flex mb-6">
        <Image
          src="/paused.png"
          alt="Begin Interview"
          width={150}
          height={180}
        />
      </div>
      {/* <div className="flex flex-col mt-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-bold text-left">Note</h2>
        <ul className="list-disc ml-5">
          <li>Do not switch tabs.</li>
          <li>Make sure you have a good internet connection.</li>
        </ul>
      </div> */}

     
      <div className="flex flex-col justify-between mt-6 bottom-0">
      <button
          onClick={handleGoBack}
          className="bg-[#EE6C4D] text-white px-6 py-2 rounded-md text-center m-2 text-xl"
        >
          Return & Continue
        </button>
        <button
          onClick={handleNext}
          className="bg-[#AEAEAE] text-white px-6 py-2 rounded-md text-center m-2 text-xl"
        >
          End Interview
        </button>
        
      </div>
    </div>
  );
}
