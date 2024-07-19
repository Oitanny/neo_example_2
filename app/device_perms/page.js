'use client' // Add this if you're using the App Router

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DynamicButton from '@/components/DynamicButton';
import { FaCamera, FaMicrophone } from 'react-icons/fa';

export default function OTPPage() {
    const router=useRouter();
  const handleGoBack = () => {
    router.push('/device_perms');
  };
  const handleNext = () => {
    router.push('/tutorial');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative p-3">
        <div className='flex flex-row mb-5 top-5 left-5 absolute'>
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
      <h2 className="text-xl font-bold mb-6 text-center">Device Permissions</h2>
    <p className="text-gray-600 mb-6 text-center pl-10 pr-10">Please allow the access to your Camera and Microphone.</p>

      <div className="pl-10 pr-10 pt-6 pb-6 ml-3 mr-3 mt-3 mb-6 bg-white rounded-lg shadow-md w-auto">
        <div className='flex flex-row items-center justify-start mb-4'>
        <div className='bg-[#FF6969] p-3 rounded-md w-[70px] justify-center flex'>
            <FaCamera className='text-white w-6 h-6'/>
        </div>
        <p className='ml-7'>Camera</p>
        </div>
        <div className='flex flex-row items-center justify-start mb-4'>
        <div className='bg-[#FF6969] p-3 rounded-md w-[70px] justify-center flex'>
            <FaMicrophone className='text-white w-6 h-6'/>
        </div>
        <p className='ml-7'>Microphone</p>
        </div>

      </div>
      
      <button 
          className="bg-[#EE6C4D] text-white px-6 py-2 rounded-md flex items-center mt-10"
          onClick={handleNext}
        >
          Next
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <p className='text-xs absolute bottom-5 pl-4 pr-4 text-center'>Note: The permission would be valid till this session only.</p>
    </div>
  );
}