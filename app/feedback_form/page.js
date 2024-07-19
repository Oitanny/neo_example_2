'use client'; // Add this if you're using the App Router

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '/styles/globals.css';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


export default function FeedbackForm() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/main');
  };

  const handleSubmit = () => {
    router.push('/interview_submitted');
  };
  const [rating, setRating] = useState(0);


  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-6 px-8">
      <h1 className='text-center font-bold text-2xl mb-8'>Feedback Form</h1>
      <p className='text-center mb-6 text-sm'>Your feedback helps us to make this app better. Please consider taking out few minutes to share your interview experience and feedback on platform usage with us.</p>
      {/* <div className="flex flex-col mt-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-bold text-left">Note</h2>
        <ul className="list-disc ml-5">
          <li>Do not switch tabs.</li>
          <li>Make sure you have a good internet connection.</li>
        </ul>
      </div> */}
            <div className="bg-[#F8F8F8] p-2 rounded-lg flex justify-between items-center border-[#C7C7C7] border-2 mb-6">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                className="hidden"
              />
              <FaStar
                size={20}
                className={`cursor-pointer ${ratingValue <= rating ? 'text-yellow-500' : 'text-gray-400'} m-1`}
              />
            </label>
          );
        })}
      </div>
      <textarea
        className="bg-[#F8F8F8] p-4 rounded-lg border border-[#98C1D9] text-gray-900 placeholder-[#C7C7C7] w-full max-w-md mb-5"
        rows="6"
        placeholder="Write your feedback here..."
      ></textarea>


        <button
          onClick={handleSubmit}
          className="bg-[#EE6C4D] text-white px-24 py-2 rounded-md text-center m-2"
        >
          Submit
        </button>
        
    </div>
  );
}
