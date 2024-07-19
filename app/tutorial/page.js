'use client' // Add this if you're using the App Router

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DynamicButton from '@/components/DynamicButton';
import { FaCamera, FaMicrophone } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSlider from '@/components/Slider';
import '/styles/globals.css';
import Carousel from '@/components/Slider';

export default function Tutorial() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/candidate_form');
  };

  const handleNext = () => {
    router.push('/tutorial');
  };
  const images=["sample.png","sample.png","sample.png"]
  const captions=["Tutorial related text 1 would be getting displayed here....","Tutorial related text 2 would be getting displayed here....","Tutorial related text 3 would be getting displayed here...."]

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className='flex flex-row mb-5 absolute top-5 left-5 items-center'>
        <Image
          src="/back_arrow.svg"
          alt="Back Arrow"
          width={15}
          height={15}
        />
        <button 
          onClick={handleGoBack} 
          className="border-none bg-white px-3 py-1 text-black flex items-center"
        >
          <span className="ml-1">Go Back</span>
        </button>
      </div>
      <h2 className="text-xl font-bold  text-center mt-12">Step-by-Step Usage Tutorial</h2>
      <div className="w-full max-w-md h-full">
        <Carousel images={images} captions={captions} />
      </div>
      
      {/* <div className='flex flex-row justify-between items-center'>
      <button 
        className="bg-[#c7c7c7] text-white px-6 py-2 rounded-md flex items-center mt-10"
        onClick={handleNext}
      >
        Skip
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>


        <button 
        className="bg-[#EE6C4D] text-white px-6 py-2 rounded-md flex items-center mt-10"
        onClick={handleNext}
      >
        Next
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      </div> */}
      
    </div>
  );
}
