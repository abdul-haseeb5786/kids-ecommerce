import React from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";

const ImageSlider = () => {
  const slides = [
    { img: pic1, url: "/link1" },
    { img: pic2, url: "/link2" },
    { img: pic1, url: "/link3" },
    { img: pic2, url: "/link4" }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full h-[375px] sm:h-[450px] md:h-[400px] lg:h-[500px] xl:h-[650px] overflow-hidden relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out transform ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover transition-none"
          />
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition duration-500 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
