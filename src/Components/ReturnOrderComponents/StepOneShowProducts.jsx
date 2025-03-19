import { useState } from "react";
import ShimmerLoadingEffect from "../../Components/ShimmerLoadingEffect";
//eslint-disable-next-line
const StepOneShowProducts = ({ orders, isLoading, setReturnOrderDetails }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (orderID, products) => {
    const hasSelectedProducts = products.some((item) =>
      selectedItems.includes(item.id)
    );

    if (hasSelectedProducts) {
      setSelectedItems((prev) =>
        prev.filter((id) => !products.some((item) => item.id === id))
      );

      setReturnOrderDetails((prevState) => ({
        ...prevState,
        orders: prevState.orders.filter((order) => order.orderID !== orderID),
      }));
    } else {
      setSelectedItems((prev) => [...prev, ...products.map((item) => item.id)]);

      setReturnOrderDetails((prevState) => {
        const productDetails = products.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
          returnDate: item.returnDate,
        }));

        return {
          ...prevState,
          orders: [
            ...prevState.orders.filter((order) => order.orderID !== orderID),
            {
              orderID: orderID,
              products: productDetails,
            },
          ],
        };
      });
    }
  };

  console.log(orders, "asdfwerwemnbmwer");
  //eslint-disable-next-line
  const formattedOrders = orders.flatMap((order) =>
    order.products
      //eslint-disable-next-line
      .filter((product) => order.orderStatus !== "return")
      .map((product) => ({
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

  const groupedByOrder = formattedOrders.reduce((acc, item) => {
    if (!acc[item.orderID]) {
      acc[item.orderID] = {
        orderID: item.orderID,
        orderNumber: item.orderNumber,
        returnDate: item.returnDate,
        products: [],
      };
    }
    acc[item.orderID].products.push(item);
    return acc;
  }, {});

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
              {Object.values(groupedByOrder).map((orderGroup) =>
                orderGroup.products.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <td className="p-3 align-middle">
                      {index === 0 && (
                        <input
                          type="checkbox"
                          checked={orderGroup.products.some((product) =>
                            selectedItems.includes(product.id)
                          )}
                          onChange={() =>
                            handleCheckboxChange(
                              orderGroup.orderID,
                              orderGroup.products
                            )
                          }
                          className="w-5 h-5 rounded border-gray-300 accent-[#7f56D9]"
                        />
                      )}
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
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StepOneShowProducts;
