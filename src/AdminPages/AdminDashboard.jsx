"use client";

import { useState } from "react";
import { FiChevronRight, FiExternalLink } from "react-icons/fi";
import BarChart from "../AdminComponents/BarChart";
import LineChart from "../AdminComponents/LineChart";
import ProgressBar from "../AdminComponents/ProgressBar";
import DonutChart from "../AdminComponents/DonutChart";

function AdminDashboard() {
  const [salesData] = useState([
    35, 28, 45, 30, 25, 60, 40, 45, 35, 50, 35, 60, 40, 45, 35, 25, 40, 30, 45,
    35, 60, 40, 30,
  ]);
  const [customerData] = useState([
    30, 40, 35, 50, 45, 30, 40, 60, 35, 40, 30, 45, 50, 35, 45, 50, 40, 35, 30,
    45,
  ]);

  const bestSellingItems = [
    { name: "Dog Food Container", sales: 940 },
    { name: "Rotatable Food Food Feeder", sales: 790 },
    { name: "Rubber Toys for Cats", sales: 740 },
  ];

  const recentOrders = [
    {
      item: "Dog Food Container",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
    },
    {
      item: "Rotatable Food Food Feeder",
      date: "19 Mar, 2023",
      total: "$22.00",
      status: "Processing",
    },
    {
      item: "Rubber Toys for Cats",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
    },
    {
      item: "Cat Suitcase",
      date: "29 Jan, 2023",
      total: "$30.00",
      status: "Completed",
    },
    {
      item: "Dog Leash",
      date: "27 Jan, 2023",
      total: "$27.00",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-6">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm">
        <span className="text-amber-700">Admin</span>
        <FiChevronRight className="mx-2 text-gray-400" />
        <span className="text-gray-600">Dashboard</span>
        <FiExternalLink className="ml-auto text-gray-400" />
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Total Sales Card */}
        <div className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <h3 className="text-gray-700 font-medium">Total Sales</h3>
            <p className="text-xs text-gray-500">THIS MONTH</p>
          </div>
          <div className="flex justify-between items-baseline mb-4">
            <h2 className="text-2xl font-bold">$ 4,235</h2>
          </div>
          <div className="h-16">
            <BarChart data={salesData} />
          </div>
        </div>

        {/* Customers Card */}
        <div className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <h3 className="text-gray-700 font-medium">Customers</h3>
            <p className="text-xs text-gray-500">THIS MONTH</p>
          </div>
          <div className="flex justify-between items-baseline mb-4">
            <h2 className="text-2xl font-bold">2,571</h2>
          </div>
          <div className="h-16">
            <LineChart data={customerData} />
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <h3 className="text-gray-700 font-medium">Orders</h3>
            <p className="text-xs text-gray-500">MONTHLY GOALS: 1,000</p>
          </div>
          <div className="flex justify-between items-baseline mb-4">
            <h2 className="text-2xl font-bold">734</h2>
          </div>
          <div className="mt-6">
            <p className="text-xs text-gray-500 mb-1">266 Left</p>
            <ProgressBar value={73.4} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Best Selling */}
        <div className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <h3 className="text-gray-700 font-medium">Best Selling</h3>
            <p className="text-xs text-gray-500">THIS MONTH</p>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <h2 className="text-2xl font-bold">$2,400</h2>
              <span className="ml-2 text-xs text-gray-500">— Total Sales</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {bestSellingItems.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-gray-700">{item.name} —</span>
                <span className="text-gray-500">${item.sales} Sales</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-24 h-24">
              <DonutChart
                data={[
                  { value: bestSellingItems[0].sales, color: "#4F46E5" },
                  { value: bestSellingItems[1].sales, color: "#818CF8" },
                  { value: bestSellingItems[2].sales, color: "#C7D2FE" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-4 rounded shadow lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-700 font-medium">Recent Orders</h3>
            <button className="text-xs text-gray-500">View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b">
                  <th className="pb-2 font-medium">Item</th>
                  <th className="pb-2 font-medium">Date</th>
                  <th className="pb-2 font-medium">Total</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3 text-sm text-gray-700">{order.item}</td>
                    <td className="py-3 text-sm text-gray-500">{order.date}</td>
                    <td className="py-3 text-sm text-gray-700">
                      {order.total}
                    </td>
                    <td className="py-3 text-sm">
                      <span
                        className={`${
                          order.status === "Completed"
                            ? "text-gray-500"
                            : "text-gray-500"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
