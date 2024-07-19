'use client'

import { useState } from 'react';
import '/styles/globals.css'
import { useRouter } from 'next/navigation';

const indianLanguages = [
    'English',     // English
    'हिन्दी',      // Hindi
    'বাংলা',       // Bengali
    'తెలుగు',      // Telugu
    'मराठी',       // Marathi
    'தமிழ்',       // Tamil
    'اردو',         // Urdu
    'ગુજરાતી',      // Gujarati
    'ಕನ್ನಡ',       // Kannada
    'ଓଡ଼ିଆ',        // Odia
    'മലയാളം',      // Malayalam
    'ਪੰਜਾਬੀ',       // Punjabi
    'অসমীয়া',      // Assamese
    'मैथिली',       // Maithili
    'संस्कृतम्'      // Sanskrit
  ];
  
  console.log(indianLanguages);
  
export default function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleNext = () => {
    // Navigate to the LanguageSelect page
    router.push('/candidate_form');
  };

  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h2 className="text-2xl font-bold mb-6">Select a language</h2>
      
      <div className="overflow-y-scroll p-4 w-64 h-96 mb-6 rounded-lg border-2 border-[#c7c7c7]">
      {indianLanguages.map((lang) => (
          <div 
            key={lang} 
            className={`mb-3 p-3 cursor-pointer text-center bg-[#424242] rounded-lg  text-white  ${selectedLanguage === lang ? 'bg-[#EE6C4D]' : ''}`}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang}
          </div>
        ))}
      </div>
      
      <button 
        className="bg-[#EE6C4D] text-white px-6 py-2 rounded-md flex items-center"
        onClick={()=> {
          console.log(`Selected language: ${selectedLanguage}`)
          handleNext()
        }}
      >
        Next
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}