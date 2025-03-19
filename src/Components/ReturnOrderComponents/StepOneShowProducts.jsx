import { useEffect, useState } from "react";
import { getUserOrders } from "../../api/orderApi";
import ShimmerLoadingEffect from "../../Components/ShimmerLoadingEffect";
//eslint-disable-next-line
const StepOneShowProducts = ({ returnOrderDetails, setReturnOrderDetails }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setIsLoading(true);
        const response = await getUserOrders();
        setOrders(response.data);
        console.log(response.data, "orders fetched");
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getOrders();
  }, []);

  const handleCheckboxChange = (item) => {
    console.log(item, "asdkfjweirnerwewer");
    setSelectedItems((prev) =>
      prev.includes(item.id)
        ? prev.filter((id) => id !== item.id)
        : [...prev, item.id]
    );
    setReturnOrderDetails((prevState) => {
      // Check if the orderID already exists in returnOrderDetails.orders
      const existingOrder = prevState.orders.find(
        (order) => order.orderID === item.orderID
      );

      if (existingOrder) {
        // If the item is already selected, remove it; otherwise, add it
        const updatedProducts = existingOrder.products.some(
          (product) => product.id === item.id
        )
          ? existingOrder.products.filter((product) => product.id !== item.id)
          : [
              ...existingOrder.products,
              {
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                quantity: item.quantity,
                returnDate: item.returnDate,
              },
            ];

        // If no products remain, remove the order; otherwise, update the products
        const updatedOrders =
          updatedProducts.length > 0
            ? prevState.orders.map((order) =>
                order.orderID === item.orderID
                  ? { ...order, products: updatedProducts }
                  : order
              )
            : prevState.orders.filter(
                (order) => order.orderID !== item.orderID
              );

        return { ...prevState, orders: updatedOrders };
      } else {
        // If the orderID doesn't exist, add a new order with the selected product
        return {
          ...prevState,
          orders: [
            ...prevState.orders,
            {
              orderID: item.orderID,
              products: [
                {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  price: item.price,
                  quantity: item.quantity,
                  returnDate: item.returnDate,
                },
              ],
            },
          ],
        };
      }
    });
  };
  console.log(returnOrderDetails, "asdfwerwemnbmwer");
  const formattedOrders = orders.flatMap((order) =>
    order.products.map((product) => ({
      id: product._id,
      orderID: order._id,
      image: product.productId.images[0],
      name: product.productId.name,
      orderNumber: `#${order._id.substring(order._id.length - 9)}`,
      returnDate: new Date(order.createdAt).toLocaleDateString("en-GB"),
      price: product.price,
      quantity: product.quantity,
    }))
  );

  return (
    <div className="mb-8">
      <h2 className="text-sm font-medium mb-4">
        Select product&apos;s you want to return:
      </h2>

      {isLoading ? (
        <div className="text-center py-8">
          <ShimmerLoadingEffect />
          {/* Loading your orders... */}
        </div>
      ) : formattedOrders.length === 0 ? (
        <div className="text-center py-8">No products available for return</div>
      ) : (
        <div className="space-y-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">
                  <span className="sr-only">Select</span>
                </th>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Order Number</th>
                <th className="p-3 text-left">Return Term</th>
              </tr>
            </thead>
            <tbody>
              {formattedOrders.map((item) => (
                <tr
                  key={item.id}
                  className="border-b last:border-b-0 hover:bg-gray-50"
                >
                  <td className="p-3 align-middle">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item)}
                      className="w-5 h-5 rounded border-gray-300 accent-[#7f56D9]"
                    />
                  </td>
                  <td className="p-3 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    {item.orderNumber}
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    {item.returnDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StepOneShowProducts;
