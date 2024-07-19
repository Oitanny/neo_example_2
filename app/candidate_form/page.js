'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CandidateForm() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/language_select');
  };

  const handleNext = () => {
    router.push('/otp_verification');
  };

  return (
    <div className="flex flex-col p-5  h-full relative">
      <div className='flex flex-row items-center mb-5 absolute'>
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

      <main className="flex flex-col items-center justify-center min-h-screen relative">
        <h1 className="text-3xl font-bold mb-2">Candidate Details</h1>
        <p className="text-gray-600 mb-6">Please enter your details below</p>

        <div className="border-2 border-[#c7c7c7] rounded-lg p-6 w-full max-w-md mb-6">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 text-sm">Candidate Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border-2 border-[#98C1D9] rounded-md focus:outline-none focus:border-[#EE6C4D]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block mb-1 text-sm">Candidate Contact No.</label>
              <input 
                type="tel" 
                id="contact" 
                name="contact" 
                placeholder="Enter your contact number"
                className="w-full px-3 py-2 border-2 border-[#98C1D9] rounded-md focus:outline-none focus:border-[#EE6C4D]"
              />
            </div>
          </form>
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
      </main>
    </div>
  );
}