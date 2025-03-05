import { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegFileLines } from "react-icons/fa6";
import { PiHandCoins } from "react-icons/pi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TfiBackLeft } from "react-icons/tfi";
import StepOneShowProducts from "./StepOneShowProducts";
import StepTwoSelectedOrder from "./StepTwoSelectedOrder";
import StepThreeReturnMethod from "./StepThreeReturnMethod";
import StepFourPaymentMethod from "./StepFourPaymentMethod";
import StepFiveReviewRequest from "./StepFiveReviewRequest";

function ShowOdersPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: <RiShoppingBag3Line />, text: "Your details" },
    { icon: <TfiBackLeft />, text: "Reason for Return" },
    { icon: <CiDeliveryTruck />, text: "Pickup Method" },
    { icon: <PiHandCoins />, text: "Payment Reimbursement" },
    { icon: <FaRegFileLines />, text: "Review & Submit" },
  ];

  return (
    <div className="min-h-screen w-full px-4 ">
      <div className="">
        <h1 className="text-xl font-semibold mb-6">Return my order&apos;s</h1>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-8 relative">
          <div className="absolute w-[81%] left-20 border-[.8px] bottom-10 " />
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1 ">
              <div
                className={`w-10 h-10 rounded-full border  flex items-center justify-center z-10 ${
                  index + 1 === currentStep
                    ? "bg-[#7f56D9] text-white"
                    : "bg-white"
                }`}
              >
                {step.icon}
              </div>
              <span className="text-xs mt-2 text-center">{step.text}</span>
            </div>
          ))}
        </div>

        {currentStep === 0 && <StepOneShowProducts />}
        {currentStep === 1 && <StepTwoSelectedOrder />}
        {currentStep === 2 && <StepThreeReturnMethod />}
        {currentStep === 3 && <StepFourPaymentMethod />}
        {currentStep === 4 && <StepFiveReviewRequest />}

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-5 mt-5">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="px-4 py-2 bg-[#7f56D9] text-white rounded-md hover:bg-purple-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowOdersPage;
