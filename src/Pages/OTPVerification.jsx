import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import forgotpasswordimage from "../assets/images/forgotpasswordimage.jpeg";
const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Focus on the first input when component mounts
  useEffect(() => {
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, []);

  const handleChange = (index, value) => {
    // Allow only numbers
    if (!/^\d*$/.test(value)) return;

    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Take only the first character
    setOtp(newOtp);

    // Move to next input field if current field is filled
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current field is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted content contains only numbers
    if (!/^\d+$/.test(pastedData)) return;

    // Fill the OTP fields with pasted data
    const newOtp = [...otp];
    for (let i = 0; i < Math.min(pastedData.length, 4); i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    // Focus on the appropriate input
    if (pastedData.length < 4) {
      inputRefs[pastedData.length].current.focus();
    } else {
      inputRefs[3].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    console.log("Verifying OTP:", otpValue);
    // Add your OTP verification logic here
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image (same as forgot password page) */}
      <div className="md:w-1/2 relative">
        <div className="absolute top-6 left-6">
          <div className="flex items-center gap-2 text-amber-700">
            <img src={logo} alt="Shopque Nest LLP" className="h-16" />
          </div>
        </div>
        <img
          src={forgotpasswordimage}
          alt="Person with dog"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - OTP Verification Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          {/* Back Button */}
          <div className="w-fit">
            <Link
              to="/forgot-password"
              className="flex items-center text-black"
            >
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
            </Link>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Enter OTP</h1>
            <p className="text-gray-500">
              We have shared a code to your registered email address
              robertfox@example.com
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div
                className="flex justify-center space-x-4"
                onPaste={handlePaste}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-14 h-14 text-center text-xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    maxLength={1}
                    inputMode="numeric"
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              disabled={otp.some((digit) => digit === "")}
            >
              Verify
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Didn&apos;t receive the code?{" "}
              <button className="text-amber-600 hover:text-amber-500 font-medium">
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
