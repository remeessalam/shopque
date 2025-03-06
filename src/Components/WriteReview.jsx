import { useState } from "react";
import { CgClose } from "react-icons/cg";

//eslint-disable-next-line
function WriteReview({ showReview, setShowReview }) {
  //   const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    review: "",
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Handle review submission here
    setShowReview(false);
  };

  return (
    <div className="">
      {/* Review Modal */}
      {showReview && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center p-8 border-b">
              <h2 className="text-xl font-semibold">Write Review</h2>
              <button
                onClick={() => setShowReview(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <CgClose size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="p-8">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Review</label>
                <textarea
                  className="w-full p-2 border rounded-lg h-32 resize-none"
                  value={formData.review}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="text-2xl"
                    >
                      {star <= rating ? "★" : "☆"}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Submit Your Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default WriteReview;
