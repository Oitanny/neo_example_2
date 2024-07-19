'use client' // Add this if you're using the App Router

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DynamicButton from '@/components/DynamicButton';

export default function OTPPage() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs[index - 1].current.focus();
    }
  };
  const handleGoBack = () => {
    router.push('/candidate_form');
  };

  const handleSubmit = () => {
    const otpString = otp.join('');
    console.log('Submitted OTP:', otpString);
    // Here you would typically send the OTP to your server for verification
    // For now, we'll just simulate a successful verification and redirect
    router.push('/success'); // Redirect to a success page
  };

  return (
    <div className="flex flex-col justify-center min-h-screen relative p-3">
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
      <div className="p-8 m-3 bg-white ">
      {/* rounded-lg shadow-md"> */}
      <p className="text-gray-600 mb-10 text-center">A 4 digit OTP has been sent to your contact number.</p>

        <h3 className="text-xl font-bold mb-6 text-center">Enter the OTP below:</h3>
        <div className="flex justify-center space-x-4 mb-[100px]">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <DynamicButton label={"Verify OTP"} clickPath={"/device_perms"}/>
      </div>
    </div>
  );
}