import { useState } from "react";
import forgotPasswordImage from "../assets/images/forgotpageimage.jpeg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP sending logic here
    console.log("Sending OTP to:", email);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="md:w-1/2 relative">
        <div className="absolute top-6 left-6">
          <div className="flex items-center gap-2 text-amber-700">
            <div className="font-semibold text-xl">SHOPQUE NEST LLP</div>
          </div>
        </div>
        <img
          src={forgotPasswordImage}
          alt="Person with dog"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Forgot Password Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          {/* Back Button */}
          <div>
            <a href="#" className="flex items-center text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </a>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Forgot Password?</h1>
            <p className="text-gray-500">
              Enter your registered email address. we’ll send you a code to
              reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send OTP
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Remember your password?{" "}
            <a href="#" className="text-amber-600 hover:text-amber-500">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
