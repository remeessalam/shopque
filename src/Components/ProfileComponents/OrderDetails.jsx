import { FaArrowRight, FaBoxOpen } from "react-icons/fa";
import { apiCall } from "../../api/apiController";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//eslint-disable-next-line
function OrderDetails({ isOrders }) {
  // Sample order data
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const getorder = async () => {
      const response = await apiCall({
        path: "/orders/user-orders",
        method: "GET",
      });
      setOrders(response.data);
      console.log(response, "asdfasdfsdf");
    };
    getorder();
  }, []);

  console.log(orders, "asdasdfasdfasdffasdfsdf");

  return (
    <>
      {orders?.length < 0 || !orders ? (
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
              {orders?.map((obj) => {
                const product = obj?.products;
                console.log(obj._id, "asdfasdfasdfasiuwrjthnmsd");
                return (
                  <div
                    key={obj._id}
                    className="flex items-start space-x-4 border-b pb-8"
                  >
                    <div className="flex flex-col gap-5 w-full">
                      {product?.map((singlePro) => {
                        const item = singlePro?.productId;
                        console.log(item, "asdfasdfsdfsdf");
                        return (
                          <>
                            <div
                              key={item._id}
                              className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
                            >
                              <img
                                src={item.images[0]}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="flex-grow">
                              <h2 className="font-medium text-gray-900">
                                {item.name}
                              </h2>
                              <p className="text-sm text-gray-600 mt-1">
                                Ordered On:{" "}
                                {new Date(obj.createdAt).toLocaleDateString()}
                              </p>
                              <p className="text-sm text-gray-900 mt-1 mb-3">
                                ₹ {item.price}
                              </p>
                              <Link
                                to={`/product-details/${item._id}`}
                                className="border border-gray-300  text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition-colors"
                              >
                                View item
                              </Link>
                            </div>
                          </>
                        );
                      })}
                    </div>

                    <div className="flex w-fit text-center">
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          obj.paymentStatus === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        Payment {obj.paymentStatus}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderDetails;
