import { useEffect, useState } from "react";
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
import StepSixReturnOrder from "./StepSixReturnOrder";
import toast from "react-hot-toast";
import { getUserOrders } from "../../api/orderApi";

function ShowOdersPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [returnOrderDetails, setReturnOrderDetails] = useState({
    orders: [],
    reasonToReturn: {
      question1: "What is the product's current condition?",
      answer1: "",
      question2: "What is the primary reason for returning the product?",
      answer2: "",
    },
    methodForReturning: "",
    returnPaymentMethod: "",
  });

  useEffect(() => {
    const getOrders = async () => {
      try {
        setIsLoading(true);
        const response = await getUserOrders();
        setOrders(response.data);
        console.log(response.data, "orders fetched");
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getOrders();
  }, []);
  const steps = [
    { icon: <RiShoppingBag3Line />, text: "Your details" },
    { icon: <TfiBackLeft />, text: "Reason for Return" },
    { icon: <CiDeliveryTruck />, text: "Pickup Method" },
    { icon: <PiHandCoins />, text: "Payment Reimbursement" },
    { icon: <FaRegFileLines />, text: "Review & Submit" },
  ];
  const handleNext = () => {
    if (currentStep === 0) {
      if (returnOrderDetails.orders.length <= 0) {
        toast.error("Please Select product's you want to return.");
        return;
      }
    }
    if (currentStep === 1) {
      if (
        !returnOrderDetails.reasonToReturn.answer1 ||
        !returnOrderDetails.reasonToReturn.answer2
      ) {
        toast.error("Please select the reason for your return.");
        return;
      }
    }
    if (currentStep === 2) {
      if (!returnOrderDetails.methodForReturning) {
        toast.error("Please Choose the method for returning the product.");
        return;
      }
    }
    if (currentStep === 3) {
      if (!returnOrderDetails.returnPaymentMethod) {
        toast.error("Please Choose the method for receiving payment");
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="min-h-screen w-full px-4 ">
      <div className="">
        <h1 className="text-xl font-semibold mb-6">Return my order&apos;s</h1>

        <div className="flex justify-between items-center mb-8 relative">
          <div className="absolute w-[81%] left-20 border-[.8px] bottom-10 " />
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1 ">
              <div
                className={`w-10 h-10 rounded-full border  flex items-center justify-center z-10 ${
                  index + 1 <= currentStep
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

        {currentStep === 0 && (
          <StepOneShowProducts
            isLoading={isLoading}
            orders={orders}
            returnOrderDetails={returnOrderDetails}
            setReturnOrderDetails={setReturnOrderDetails}
          />
        )}
        {currentStep === 1 && (
          <StepTwoSelectedOrder
            returnOrderDetails={returnOrderDetails}
            setReturnOrderDetails={setReturnOrderDetails}
          />
        )}
        {currentStep === 2 && (
          <StepThreeReturnMethod
            returnOrderDetails={returnOrderDetails}
            setReturnOrderDetails={setReturnOrderDetails}
          />
        )}
        {currentStep === 3 && (
          <StepFourPaymentMethod
            returnOrderDetails={returnOrderDetails}
            setReturnOrderDetails={setReturnOrderDetails}
          />
        )}
        {currentStep === 4 && (
          <StepFiveReviewRequest
            setCurrentStep={setCurrentStep}
            returnOrderDetails={returnOrderDetails}
            setReturnOrderDetails={setReturnOrderDetails}
          />
        )}
        {currentStep === 5 && (
          <StepSixReturnOrder
            returnOrderDetails={returnOrderDetails}
            setReturnOrderDetails={setReturnOrderDetails}
          />
        )}

        <div className="flex justify-end gap-5 mt-5">
          {currentStep <= 3 && (
            <>
              <button
                onClick={() =>
                  setCurrentStep(currentStep === 0 ? 0 : currentStep - 1)
                }
                className={`px-4 py-2 border rounded-md ${
                  currentStep === 0 && `cursor-not-allowed`
                } text-gray-600 hover:bg-gray-50`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-[#7f56D9] text-white rounded-md hover:bg-purple-700"
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowOdersPage;
