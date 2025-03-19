import { useState } from "react";

const paymentMethods = [
  {
    id: 0,
    title: "I would like a store voucher",
    description: "Receive an instant voucher to use on new orders.",
  },
  {
    id: 1,
    title: "I want a refund",
    description: "I want a refund",
  },
  {
    id: 2,
    title: "I would like a replacement product",
    description: "We will replace your product with a new one.",
  },
];

const StepFourPaymentMethod = ({
  //eslint-disable-next-line
  returnOrderDetails,
  //eslint-disable-next-line
  setReturnOrderDetails,
}) => {
  const [selectPaymentMethod, setSelectPaymentMethod] = useState();
  console.log(returnOrderDetails, "asdfasdferwerbdbxxf");
  return (
    <div>
      <h1>Choose the method for receiving payment</h1>
      <div className="mt-5">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`p-4 border rounded-lg mt-5 ${
              selectPaymentMethod === method.id
                ? "border-[#7f56D9]"
                : "border-gray-300"
            }`}
          >
            <label
              className="flex items-start gap-3 cursor-pointer"
              onClick={() => {
                setSelectPaymentMethod(method.id);
                setReturnOrderDetails((prev) => ({
                  ...prev,
                  returnPaymentMethod: method.title,
                }));
              }}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectPaymentMethod === method.id
                    ? "border-[#7f56D9]"
                    : "border-gray-300"
                }`}
              >
                {selectPaymentMethod === method.id && (
                  <div className="w-2.5 h-2.5 bg-[#7f56D9] rounded-full" />
                )}
              </div>
              <div>
                <h1 className="text-gray-700 font-medium">{method.title}</h1>
                <p className="text-gray-400">{method.description}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepFourPaymentMethod;
