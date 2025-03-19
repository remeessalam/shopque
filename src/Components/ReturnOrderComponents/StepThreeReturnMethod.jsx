import { useState } from "react";

const returnMethods = [
  {
    id: 0,
    title: "Standard Shipping - ₹40",
    description: "Send it by tomorrow",
  },
  {
    id: 1,
    title: "In-store pickup - Free",
    description: "Send it by 10/11/2024",
  },
];
const StepThreeReturnMethod = ({
  //eslint-disable-next-line
  returnOrderDetails,
  //eslint-disable-next-line
  setReturnOrderDetails,
}) => {
  const [selectReturnMethod, setSelectReturnMethod] = useState(null);
  console.log(returnOrderDetails, "asdfasdfasdfsdf");
  return (
    <div>
      <h1>Choose the method for returning the product</h1>
      <div className="mt-5">
        {returnMethods.map((method) => (
          <div
            key={method.id}
            className={`p-4 border rounded-lg ${
              selectReturnMethod === method.id
                ? "border-[#7f56D9]"
                : "border-gray-300"
            } mt-5`}
          >
            <label
              className="flex items-start gap-3 cursor-pointer"
              onClick={() => {
                setSelectReturnMethod(method.id);
                setReturnOrderDetails((prev) => ({
                  ...prev,
                  methodForReturning: method.title,
                }));
              }}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectReturnMethod === method.id
                    ? "border-[#7f56D9]"
                    : "border-gray-300"
                }`}
              >
                {selectReturnMethod === method.id && (
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

export default StepThreeReturnMethod;
