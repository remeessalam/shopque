import {
  FiSearch,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import AdminPageHeader from "../AdminComponents/AdminPageHeader";

function CustomerDetails() {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      shippingAddress: "123 Main St, New York, NY 10001",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      shippingAddress: "456 Elm St, Los Angeles, CA 90001",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      shippingAddress: "789 Oak St, Chicago, IL 60601",
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily.brown@example.com",
      shippingAddress: "321 Pine St, Houston, TX 77001",
    },
    {
      id: 5,
      name: "Daniel Wilson",
      email: "daniel.wilson@example.com",
      shippingAddress: "654 Maple St, Phoenix, AZ 85001",
    },
    {
      id: 6,
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      shippingAddress: "987 Birch St, Philadelphia, PA 19101",
    },
    {
      id: 7,
      name: "William Anderson",
      email: "william.anderson@example.com",
      shippingAddress: "741 Cedar St, San Antonio, TX 78201",
    },
    {
      id: 8,
      name: "Sophia Taylor",
      email: "sophia.taylor@example.com",
      shippingAddress: "852 Walnut St, San Diego, CA 92101",
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
              <h1 className="text-xl font-semibold">Customers</h1>
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
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Shipping Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {customers.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {/* <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-12 w-12 rounded-md object-cover"
                        /> */}
                        <div className="text-sm font-medium text-blue-600 bg-blue-50 p-4 w-fit">
                          {product.name
                            .split(" ") // Split the name into words
                            .map((word) => word[0]) // Take the first letter of each word
                            .join("") // Join them together
                            .toUpperCase()}{" "}
                          {/* Convert to uppercase */}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {product.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.shippingAddress}
                        </div>
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

export default CustomerDetails;
