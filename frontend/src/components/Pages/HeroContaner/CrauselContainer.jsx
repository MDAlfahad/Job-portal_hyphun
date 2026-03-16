import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import CrauselCard from '../../Components/Cards/CrauselCard';

const CrauselContainer = () => {
  const cards = [1]; 
  
  const [current, setCurrent] = useState(0);


  const maxIndex = cards.length - 1;

  const prevSlide = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  return (
    <div className="w-full max-w-[1800px] m-auto px-4 md:px-12 py-40 flex items-center gap-4">
      
      <button 
        onClick={prevSlide} 
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft strokeWidth={1.5} size={32} />
      </button>

  
      <div className="overflow-hidden w-full py-12">
        <div
          className="flex transition-transform duration-500 ease-out"

          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {cards.map((_, index) => (
            <div key={index} className="min-w-full px-2">
              <CrauselCard />
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={nextSlide}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <ChevronRight strokeWidth={1.5} size={32} />
      </button>

    </div>
  );
};

export default CrauselContainer;