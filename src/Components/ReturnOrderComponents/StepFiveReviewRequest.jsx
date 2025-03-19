import { showOrderNumber } from "../../util/helper";

//eslint-disable-next-line
const StepFiveReviewRequest = ({ returnOrderDetails, setCurrentStep }) => {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto  rounded-lg  p-6 md:p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Review your return request{" "}
        </h1>

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
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <h1>
                {
                  //eslint-disable-next-line
                  returnOrderDetails.reasonToReturn.question1
                }
                <span className="font-medium">
                  {
                    //eslint-disable-next-line
                    returnOrderDetails.reasonToReturn.answer1
                  }
                </span>
              </h1>
            </li>
            <li>
              <h1>
                {
                  //eslint-disable-next-line
                  returnOrderDetails.reasonToReturn.question2
                }
                <span className="font-medium">
                  {
                    //eslint-disable-next-line
                    returnOrderDetails.reasonToReturn.answer2
                  }
                </span>
              </h1>
            </li>
            <li>
              <h1>
                Method for returning the product:{" "}
                <span className="font-medium">
                  {
                    //eslint-disable-next-line
                    returnOrderDetails.methodForReturning
                  }
                </span>
              </h1>
            </li>
            <li>
              <h1>
                Method for receiving the product:{" "}
                <span className="font-medium">
                  {
                    //eslint-disable-next-line
                    returnOrderDetails.returnPaymentMethod
                  }
                </span>
              </h1>
            </li>
          </ul>

          <button
            className="mt-4 font-medium text-[#7f56D9] p-2"
            onClick={() => setCurrentStep(5)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepFiveReviewRequest;
