import user1 from "../assets/images/testimonials/testimonialuser1.png";
import productimage1 from "../assets/images/testimonials/testimonialbg1.jpeg";
import productimage2 from "../assets/images/testimonials/testimonialbg2.jpeg";
import productimage3 from "../assets/images/testimonials/testimonialbg3.jpeg";
import { useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      avatar: user1,
      text: "Amazing quality and fast delivery! I ordered a pet bed for my dog, and he absolutely loves it. The material is soft, and it's exactly as shown on the website. Will definitely shop again!",
      productImage: productimage1,
      bgcolor: "#DF9B9E",
    },
    {
      id: 2,
      name: "John Doe",
      location: "Delhi",
      rating: 5,
      avatar: user1,
      text: "I recently purchased a scratching post for my cat, and the product quality is excellent. The packaging was secure, and I received it on time.",
      productImage: productimage2,
      bgcolor: "#C4AC68",
    },
    {
      id: 3,
      name: "Aisha Khan",
      location: "Bangalore",
      rating: 5,
      avatar: user1,
      text: "The pet toys I ordered are durable and my puppy loves them! Great value for money and excellent customer service.",
      productImage: productimage3,
      bgcolor: "#7199B6",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calculate indices for visible testimonials
  const getVisibleIndices = () => {
    const prev =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleIndices();

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 paddingTop paddingBottom">
      <h2 className="text-4xl font-bold text-center text-gold mb-12">
        What Our Clients Say
        <br />
        About Our Products
      </h2>

      <div className="relative">
        {/* Mobile view - single card */}
        <div className="md:hidden">
          <div
            className=" rounded-lg shadow-lg p-6 relative mb-4"
            style={{ backgroundColor: testimonials[current].bgcolor }}
          >
            <div className="flex items-center mb-3">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="ml-2 text-white text-sm">
                — {testimonials[currentIndex].name},{" "}
                {testimonials[currentIndex].location}
              </p>
            </div>
            <div className="text-yellow-300 mb-3">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
            <p className="text-white text-sm leading-relaxed">
              &quot;{testimonials[currentIndex].text}&quot;
            </p>
            <div className="mt-4">
              <img
                src={
                  testimonials[currentIndex].productImage || "/placeholder.svg"
                }
                alt="Product"
                className="rounded-lg shadow-lg w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop view - carousel with visible cards */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center">
            {/* Previous testimonial (partially visible) */}
            <div className="absolute left-0 z-0 w-1/4 transform -translate-x-1/2 opacity-70">
              <div className="bg-white rounded-lg shadow-md p-4 h-32 w-full">
                <div className="flex items-center mb-2">
                  <img
                    src={testimonials[prev].avatar || "/placeholder.svg"}
                    alt={testimonials[prev].name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <div className="text-xs text-yellow-400">
                      {renderStars(testimonials[prev].rating)}
                    </div>
                  </div>
                </div>
                <p className="text-xs line-clamp-3">
                  {testimonials[prev].text}
                </p>
              </div>
            </div>

            {/* Current testimonial */}
            <div className="relative z-10 w-full max-w-xl">
              <div className="flex items-center">
                {/* Testimonial card */}
                <div
                  className={`rounded-xl shadow-lg p-6 w-2/3 relative z-10 h-72`}
                  style={{ backgroundColor: testimonials[current].bgcolor }}
                >
                  <div className="flex items-center mb-3">
                    <img
                      src={testimonials[current].avatar || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <p className="ml-2 text-white text-sm">
                      — {testimonials[current].name},{" "}
                      {testimonials[current].location}
                    </p>
                  </div>
                  <div className="text-yellow-300 mb-3">
                    {renderStars(testimonials[current].rating)}
                  </div>
                  <p className="text-white text-sm leading-relaxed pr-5">
                    &quot;{testimonials[current].text}&quot;
                  </p>
                </div>

                {/* Product image (overlapping) */}
                <div className="w-1/2 -ml-5 relative z-20">
                  <img
                    src={
                      testimonials[current].productImage || "/placeholder.svg"
                    }
                    alt="Product"
                    className="rounded-xl shadow-lg h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Next testimonial (partially visible) */}
            <div className="absolute right-0 z-0 w-1/4 transform translate-x-1/2 opacity-70">
              <div className="bg-white rounded-lg shadow-md p-4 h-32 w-full">
                <div className="flex items-center mb-2">
                  <img
                    src={testimonials[next].avatar || "/placeholder.svg"}
                    alt={testimonials[next].name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <div className="text-xs text-yellow-400">
                      {renderStars(testimonials[next].rating)}
                    </div>
                  </div>
                </div>
                <p className="text-xs line-clamp-3">
                  {testimonials[next].text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-lg border border-black flex items-center justify-center hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <LuArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-lg border border-black flex items-center justify-center hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <LuArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
