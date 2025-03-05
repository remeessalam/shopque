import { useState } from "react";

const StepOneShowProducts = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };
  const orderItems = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&auto=format&fit=crop&q=60",
      name: "Pedigree Pro Dog Food",
      orderNumber: "#55672",
      returnDate: "18/09/2024",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&auto=format&fit=crop&q=60",
      name: "Kitcat Cat Food",
      orderNumber: "#73830",
      returnDate: "24/10/2024",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&auto=format&fit=crop&q=60",
      name: "Dog Food Bowl",
      orderNumber: "#50921",
      returnDate: "10/05/2024",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&auto=format&fit=crop&q=60",
      name: "Portable Pet Carrier",
      orderNumber: "#91820",
      returnDate: "14/08/2024",
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=60",
      name: "Royal Canin Premium Food for Dogs and animals",
      orderNumber: "#50924",
      returnDate: "15/10/2024",
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&auto=format&fit=crop&q=60",
      name: "Cat Food Tray",
      orderNumber: "#45014",
      returnDate: "16/10/2024",
    },
  ];
  return (
    <div className="mb-8">
      <h2 className="text-sm font-medium mb-4">
        Select product&apos;s you want to return:
      </h2>

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
            {orderItems.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="p-3 align-middle">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
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
                <td className="p-3 text-sm text-gray-600">{item.returnDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StepOneShowProducts;
