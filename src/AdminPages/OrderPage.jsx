import {
  FiSearch,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import AdminPageHeader from "../AdminComponents/AdminPageHeader";
import { dogfeed } from "../util/productDetails";

function OrderPage() {
  const orders = [
    {
      id: 1,
      name: "Dog Foof Container",
      orderDate: "2024-03-01",
      total: "$75.00",
      status: "Processing",
      image: dogfeed,
    },
    {
      id: 2,
      name: "Rotatable Dog food feedee",
      orderDate: "2024-03-02",
      total: "$35.00",
      status: "Completed",
      image: dogfeed,
    },
    {
      id: 3,
      name: "Rubber Toys For Cats",
      orderDate: "2024-03-03",
      total: "$27.00",
      status: "Cancelled",
      image: dogfeed,
    },
    {
      id: 4,
      name: "Pedigree Dog Food",
      orderDate: "2024-03-04",
      total: "$22.00",
      status: "Processing",
      image: dogfeed,
    },
    {
      id: 5,
      name: "Dog Food Tray",
      orderDate: "2024-03-05",
      total: "$43.00",
      status: "Completed",
      image: dogfeed,
    },
    {
      id: 6,
      name: "Portable Pet Suitcase",
      orderDate: "2024-03-06",
      total: "$35.00",
      status: "Cancelled",
      image: dogfeed,
    },
    {
      id: 7,
      name: "Dog Leash",
      orderDate: "2024-03-07",
      total: "$57.00",
      status: "Processing",
      image: dogfeed,
    },
    {
      id: 8,
      name: "Cat Food",
      orderDate: "2024-03-08",
      total: "$30.00",
      status: "Completed",
      image: dogfeed,
    },
  ];

  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <AdminPageHeader />

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="bg-white rounded-lg shadow">
            {/* Products Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h1 className="text-xl font-semibold">Orders</h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search orders"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <FiChevronLeft size={16} className="inline" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-12 w-12 rounded-md object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {product.orderDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.total}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            product.status === "Cancelled" &&
                            `bg-red-100 text-red-800`
                          } ${
                            product.status === "Completed" &&
                            `bg-green-100 text-green-800`
                          } ${
                            product.status === "Processing" &&
                            `bg-orange-100 text-orange-800`
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <FiMoreHorizontal
                          size={20}
                          className="text-gray-500 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 flex items-center justify-center">
              <nav className="flex items-center space-x-2">
                <button className="p-2 rounded-md border border-gray-300">
                  <FiChevronLeft size={16} />
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
                  1
                </button>
                <button className="px-3 py-1 rounded-md text-gray-700">
                  2
                </button>
                <span className="px-3 py-1">...</span>
                <button className="px-3 py-1 rounded-md text-gray-700">
                  23
                </button>
                <button className="px-3 py-1 rounded-md text-gray-700">
                  24
                </button>
                <button className="p-2 rounded-md border border-gray-300">
                  <FiChevronRight size={16} />
                </button>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default OrderPage;
