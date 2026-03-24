import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import CrauselCard from "../../Components/Cards/CrauselCard";

const CrauselContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [1, 2, 3, 4, 5, 6];
  const visibleCards = 3;
  const maxIndex = cards.length - visibleCards;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="max-w-[1800px] m-auto px-4 md:px-12 py-6">
      <h1 className="text-xl md:text-5xl font-semibold text-center py-10"><span className="text-secondary">Apply now,</span> to start for your carrier</h1>
      <div className="flex items-center justify-center w-full max-w-7xl mx-auto py-10">
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-200 rounded-full mx-2 hover:bg-secondary hover:text-white transition-colors"
        >
          <MoveLeft size={24} />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {cards.map((_, index) => (
              <div
                key={index}
                className="min-w-[calc(33.333%-1rem)] flex-shrink-0"
              >
                <CrauselCard />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="p-2 bg-gray-200 rounded-full mx-2 hover:bg-secondary hover:text-white transition-colors"
        >
          <MoveRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CrauselContainer;
