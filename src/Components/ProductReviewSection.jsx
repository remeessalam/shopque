import { useState } from "react";
import { FiStar } from "react-icons/fi";
import WriteReview from "./WriteReview";
function ProductReviewSection() {
  // Sample reviews data
  const [showReview, setShowReview] = useState(false);

  const [reviews] = useState([
    {
      id: 1,
      name: "Emily Davis",
      initials: "ED",
      rating: 4,
      date: "1 WEEK AGO",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
    },
    {
      id: 2,
      name: "Daniel Smith",
      initials: "ED", // Using ED as shown in the image
      rating: 4,
      date: "2 MONTH AGO",
      comment: "I can't believe how affordable and high-quality this item is!",
    },
    {
      id: 3,
      name: "Benjamin Clark",
      initials: "ED", // Using ED as shown in the image
      rating: 4,
      date: "23 APRIL",
      comment: "These guys know their stuff, and it shows in their products.",
    },
  ]);

  // State for visible reviews (for load more functionality)
  const [visibleReviews, setVisibleReviews] = useState(3);

  // Function to load more reviews
  const loadMoreReviews = () => {
    setVisibleReviews((prevCount) => prevCount + 3);
  };

  return (
    <div className="mt-12 md:col-span-2">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-xl font-medium text-gray-900">Reviews</h2>
          <div className="flex items-center mt-1">
            <span className="text-4xl font-bold text-gray-900">4.2</span>
            <span className="ml-2 text-sm text-gray-500">— 54 Reviews</span>
          </div>
        </div>

        {/* Write a review button */}
        <div>
          <button
            onClick={() => setShowReview(true)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Write a review
          </button>
        </div>

        {/* Sort by dropdown */}
        <div className="flex justify-end">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none"
            >
              SORT BY
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Reviews list */}
        <div className="space-y-8">
          {reviews.slice(0, visibleReviews).map((review) => (
            <div key={review.id} className="flex space-x-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500">
                    {review.initials}
                  </span>
                </div>
              </div>

              {/* Review content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">
                    {review.name}
                  </h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "text-gray-900 fill-gray-900"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                <div className="mt-2 text-sm text-gray-700">
                  <p>{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button */}
        {visibleReviews < reviews.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreReviews}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Load more reviews
            </button>
          </div>
        )}
      </div>
      <div className="w-fit  mx-auto mt-12">
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Load more reviews
        </button>
      </div>
      <WriteReview showReview={showReview} setShowReview={setShowReview} />
    </div>
  );
}

export default ProductReviewSection;
