import { showOrderNumber } from "../../util/helper";
import { conditionOptions, returnReasonOptions } from "../../util/contant";
//eslint-disable-next-line
function StepTwoSelectedOrder({ returnOrderDetails, setReturnOrderDetails }) {
  const handleConditionSelection = (selectedCondition) => {
    setReturnOrderDetails((prevDetails) => ({
      ...prevDetails,
      reasonToReturn: {
        ...prevDetails.reasonToReturn,
        answer1: selectedCondition.label,
      },
    }));
  };

  const handleReasonSelection = (selectedReason) => {
    setReturnOrderDetails((prevDetails) => ({
      ...prevDetails,
      reasonToReturn: {
        ...prevDetails.reasonToReturn,
        answer2: selectedReason.label,
      },
    }));
  };
  console.log(returnOrderDetails, "asdfasdfasdfwerfsdf");
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
              {
                //eslint-disable-next-line
                returnOrderDetails?.orders?.map((order) =>
                  order.products.map((product) => (
                    <tr key={product.id} className="border-t">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <span className="text-gray-900">{product.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right text-gray-900">
                        #{showOrderNumber(order.orderID)}
                      </td>
                      <td className="py-4 px-4 text-right text-gray-900">
                        {product.returnDate}
                      </td>
                    </tr>
                  ))
                )
              }
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              What is the product&apos;s current condition?
            </h2>
            <div className="space-y-3">
              {conditionOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => handleConditionSelection(option)}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                ${
                  //eslint-disable-next-line
                  returnOrderDetails?.reasonToReturn?.answer1 === option.label
                    ? "border-[#7f56D9]"
                    : "border-gray-300"
                }`}
                  >
                    {
                      //eslint-disable-next-line
                      returnOrderDetails?.reasonToReturn?.answer1 ===
                        option.label && (
                        <div className="w-2.5 h-2.5 bg-[#7f56D9] rounded-full" />
                      )
                    }
                  </div>
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              What is the primary reason for returning the product?
            </h2>
            <div className="space-y-3">
              {returnReasonOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => handleReasonSelection(option)}
                >
                  <input
                    type="checkbox"
                    checked={
                      //eslint-disable-next-line
                      returnOrderDetails?.reasonToReturn?.answer2 ===
                      option.label
                    }
                    onChange={() => handleReasonSelection(option)}
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
