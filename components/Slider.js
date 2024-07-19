import { useState, useEffect } from 'react';
import {router, useRouter} from 'next/navigation';

const Carousel = ({ images, captions }) => {
  const router=useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const nextSlide = () => {
    setSlideDirection('slide-left');
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideDirection('slide-right');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setSlideDirection(index > currentIndex ? 'slide-left' : 'slide-right');
    setCurrentIndex(index);
  };

  const skip = () => {
    router.push('/interview_instructions');
    // Add your skip logic here
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDirection('');
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="w-full mx-auto p-6 rounded-3xl">
      <div className="h-[25rem] overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${images.length * 100}%`
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 px-3">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
      <p className="text-gray-600 mb-6 mt-4 text-center">
        {captions[currentIndex]}
      </p>
      <div className="flex justify-between mt-6 bottom-0">
        <button
          onClick={skip}
          className="bg-[#AEAEAE] text-white px-6 py-2 rounded-md flex items-center"
        >
          Skip
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#EE6C4D] text-white px-6 py-2 rounded-md flex items-center"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;