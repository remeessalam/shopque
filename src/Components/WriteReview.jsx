import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";

//eslint-disable-next-line
function WriteReview({ showReview, setShowReview, productData }) {
  const [rating, setRating] = useState(0);
  console.log(productData, "asdfsdfsd");

  //eslint-disable-next-line
  const productId = productData._id;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, rating, productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      alert("Review submitted successfully!");
      setShowReview(false);
      reset();
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review. Please try again.");
    }
  };

  return (
    <div className="">
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

            <form onSubmit={handleSubmit(onSubmit)} className="p-8">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Review</label>
                <textarea
                  className="w-full p-2 border rounded-lg h-32 resize-none"
                  {...register("review", {
                    required: "Review cannot be empty",
                  })}
                />
                {errors.review && (
                  <p className="text-red-500 text-sm">
                    {errors.review.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => {
                        setRating(star);
                        setValue("rating", star);
                      }}
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
