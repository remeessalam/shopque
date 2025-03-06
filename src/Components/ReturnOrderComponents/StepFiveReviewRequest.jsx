//eslint-disable-next-line
const StepFiveReviewRequest = ({ setCurrentStep }) => {
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
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <h1>
                Current state of the product:{" "}
                <span className="font-medium">
                  I would like to return a sealed product.
                </span>
              </h1>
            </li>
            <li>
              <h1>
                Main reason for returning the product::{" "}
                <span className="font-medium">
                  The product quality is unsatisfactory.
                </span>
              </h1>
            </li>
            <li>
              <h1>
                Method for returning the product::{" "}
                <span className="font-medium">Standard Shipping - $40</span>
              </h1>
            </li>
            <li>
              <h1>
                Method for receiving the product::{" "}
                <span className="font-medium">
                  I would like a store voucher
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
