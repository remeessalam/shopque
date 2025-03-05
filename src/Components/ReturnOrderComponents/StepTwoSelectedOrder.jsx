import { useState } from "react";

function StepTwoSelectedOrder() {
  const [currentCondition, setCurrentCondition] = useState("sealed");
  const [primaryReason, setPrimaryReason] = useState("unsatisfactory");
  const conditionOptions = [
    {
      id: "sealed",
      label: "I would like to return a sealed product.",
    },
    {
      id: "mistake",
      label: "I want to return an item ordered by mistake.",
    },
    {
      id: "defective",
      label: "The product is defective or damaged.",
    },
    {
      id: "unsealed",
      label: "I wish to return an unsealed but functional product.",
    },
    {
      id: "wrong",
      label: "Received the wrong product.",
    },
  ];
  const returnReasonOptions = [
    {
      id: "unsatisfactory",
      label: "The product quality is unsatisfactory.",
    },
    {
      id: "non-functional",
      label: "I need to return a non-functional, unsealed product.",
    },
    {
      id: "changed-mind",
      label: "I changed my mind or the product was not as expected.",
    },
    {
      id: "misleading",
      label: "The product information was misleading.",
    },
    {
      id: "not-delivered",
      label: "The product was not delivered.",
    },
  ];

  return (
    <div className="">
      <div className="max-w-4xl mx-auto  rounded-lg  p-6 md:p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Select the reason for your return
        </h1>
        <p className="text-gray-600 mb-8">
          To help us process your request quickly, please answer the following
          questions.
        </p>

        {/* Product Information Table */}
        <div className="overflow-x-auto mb-8 border rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-4 px-4 text-gray-600 font-medium">
                  Product
                </th>
                <th className="text-right py-4 px-4 text-gray-600 font-medium">
                  Order Number
                </th>
                <th className="text-right py-4 px-4 text-gray-600 font-medium">
                  Return Term
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=100&h=100&fit=crop"
                      alt="Pedigree Pro Dog Food"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="text-gray-900">Pedigree Pro Dog Food</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right text-gray-900">#65872</td>
                <td className="py-4 px-4 text-right text-gray-900">
                  12/06/2020
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Two Column Layout for Questions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Condition */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              What is the product&apos;s current condition?
            </h2>
            <div className="space-y-3">
              {conditionOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setCurrentCondition(option.id)}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                ${
                  currentCondition === option.id
                    ? "border-[#7f56D9]"
                    : "border-gray-300"
                }`}
                  >
                    {currentCondition === option.id && (
                      <div className="w-2.5 h-2.5 bg-[#7f56D9] rounded-full" />
                    )}
                  </div>
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Primary Reason */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              What is the primary reason for returning the product?
            </h2>
            <div className="space-y-3">
              {returnReasonOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setPrimaryReason(option.id)}
                >
                  <input
                    type="checkbox"
                    checked={primaryReason.includes(option.id)}
                    onChange={() => setPrimaryReason(option.id)}
                    className="min-w-5 min-h-5 h-5 w-5 rounded border-gray-300 accent-[#7f56D9]"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwoSelectedOrder;
