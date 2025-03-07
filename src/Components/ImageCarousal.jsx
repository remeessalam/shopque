import { useRef, useState, useEffect } from "react";

/*eslint-disable */
const ImageCarousel = ({ productData }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Update active index when scroll happens
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const imageWidth = carouselRef.current.offsetWidth;
        const index = Math.round(carouselRef.current.scrollLeft / imageWidth);
        setActiveIndex(index);
      }
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener("scroll", handleScroll);
    return () => carousel?.removeEventListener("scroll", handleScroll);
  }, []);

  if (!productData?.images?.length) {
    return null;
  }

  const scrollToImage = (index) => {
    if (carouselRef.current) {
      const imageWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollLeft = index * imageWidth;
      setActiveIndex(index);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (carouselRef.current) {
      const imageWidth = carouselRef.current.offsetWidth;
      const scrollPosition = carouselRef.current.scrollLeft;
      const index = Math.round(scrollPosition / imageWidth);
      scrollToImage(index);
    }
  };

  return (
    <div className="w-full h-full bg-gray-50 p-5 rounded-lg mx-auto">
      <div
        ref={carouselRef}
        className="relative flex overflow-x-auto scroll-smooth snap-x snap-mandatory h-full gap-4 "
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {productData?.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0 snap-center"
          />
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="flex justify-center mt-1 space-x-2">
        {productData?.images?.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeIndex === index ? "bg-gray-500" : "bg-gray-300"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
