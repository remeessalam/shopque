import { FaArrowRight, FaBoxOpen } from "react-icons/fa";
//eslint-disable-next-line
function OrderDetails({ isOrders }) {
  // Sample order data
  const orders = [
    {
      id: "1",
      name: "Raw Black T-Shirt Lineup",
      date: "Ordered On: 27 July 2023",
      price: "$70.00",
      status: "Processing",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "2",
      name: "Monochromatic Wardrobe",
      date: "Ordered On: 9 March 2023",
      price: "$27.00",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <>
      {isOrders ? (
        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-md shadow-sm p-8 flex flex-col items-center justify-center min-h-[400px]">
            <div className="mb-6">
              <FaBoxOpen size={48} className="text-gray-400" />
            </div>
            <p className="text-gray-600 mb-6">
              Your order history is waiting to be filled.
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Start Shopping
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className=" bg-white w-full p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl font-bold text-gray-900 mb-8">Orders</h1>

            <div className="space-y-8">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-start space-x-4 border-b pb-8"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={order.image}
                      alt={order.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h2 className="font-medium text-gray-900">{order.name}</h2>
                    <p className="text-sm text-gray-600 mt-1">{order.date}</p>
                    <p className="text-sm text-gray-900 mt-1">{order.price}</p>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {order.status}
                    </span>

                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition-colors">
                      View item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderDetails;
