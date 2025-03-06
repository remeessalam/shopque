const StepFiveReviewRequest = () => {
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
      </div>
    </div>
  );
};

export default StepFiveReviewRequest;
