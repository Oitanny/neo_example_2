import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa'; // Example loading icon from react-icons
import { useRouter } from 'next/navigation';
const DynamicButton = ({ label, clickPath }) => {
  const [loading, setLoading] = useState(false);
  const router=useRouter();
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(clickPath); // Replace with your actual next page route
    }, 2000); // 2-second delay
  };
  return (
    <button
      className={`bg-[#EE6C4D] w-full text-white py-2 rounded-md transition duration-300 ${
        loading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-gray-400'
      }`}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <span className='flex flex-row items-center justify-center' ><FaSpinner className="animate-spin mr-3" /> {label} </span>: label}
    </button>
  );
};

export default DynamicButton;
