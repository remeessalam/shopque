import { useState } from "react";

/*eslint-disable */
const OrderModal = ({ orderData, closeModal, handleUpdateStatus }) => {
  const [status, setStatus] = useState(orderData?.orderStatus || "placed");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="bg-gray-100 p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              Order ID: {orderData?._id}
            </span>
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          {orderData?.products?.map((item, index) => {
            const product = item.productId;
            return (
              <div key={index} className="mb-4 border p-2 rounded">
                <div className="flex items-center">
                  {product.images && product.images.length > 0 && (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-24 h-24 object-cover mr-4 rounded"
                    />
                  )}
                  <div>
                    <h4 className="font-bold">{product.name}</h4>
                    <p>
                      <strong>Price:</strong> ₹{product.price}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <strong>Colors:</strong>
                      {product.colors?.map((color) => (
                        <div
                          key={color._id}
                          className="w-6 h-6 rounded-full border"
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-gray-50 border-t">
          <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <strong>Name:</strong> {orderData?.shippingAddress?.name}
            </div>
            <div>
              <strong>Mobile:</strong> {orderData?.shippingAddress?.mobile}
            </div>
            <div className="md:col-span-2">
              <strong>Address:</strong> {orderData?.shippingAddress?.address},{" "}
              {orderData?.shippingAddress?.area}
            </div>
            <div>
              <strong>City:</strong> {orderData?.shippingAddress?.city}
            </div>
            <div>
              <strong>State:</strong> {orderData?.shippingAddress?.state}
            </div>
            <div>
              <strong>ZIP:</strong> {orderData?.shippingAddress?.zip}
            </div>
          </div>
        </div>

        <div className="p-4 bg-white border-t">
          <h3 className="text-lg font-semibold mb-2">
            Order & Payment Details
          </h3>
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <strong>Total Amount:</strong> ₹{orderData?.totalAmount}
            </div>
            <div>
              <strong>Order Status:</strong>
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded">
                {orderData?.orderStatus}
              </span>
            </div>
            <div>
              <strong>Payment Status:</strong>
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded">
                {orderData?.paymentStatus}
              </span>
            </div>
            <div>
              <strong>Order Date:</strong>{" "}
              {new Date(orderData?.createdAt).toLocaleString()}
            </div>
            <div>
              <strong>Payment ID:</strong>{" "}
              {orderData?.paymentDetails?.paymentId}
            </div>
            <div>
              <strong>Razorpay Order ID:</strong>{" "}
              {orderData?.paymentDetails?.razorpayOrderId}
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t">
          <h3 className="text-lg font-semibold mb-2">Update Order Status</h3>
          <div className="flex items-center space-x-2">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="placed">Placed</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
              <option value="return">Return</option>
            </select>
            <button
              onClick={() => handleUpdateStatus(orderData?._id, status)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
