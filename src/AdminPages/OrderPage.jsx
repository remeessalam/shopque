import {
  FiSearch,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import AdminPageHeader from "../AdminComponents/AdminPageHeader";
import { dogfeed } from "../util/productDetails";
import { useEffect, useState } from "react";
import { getAllOrders } from "../api/orderApi";
import ShimmerLoadingEffect from "../Components/ShimmerLoadingEffect";
import toast from "react-hot-toast";

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrders, setExpandedOrders] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalOrders, setTotalOrders] = useState(0);
  const [ordersPerPage] = useState(10);

  useEffect(() => {
    fetchOrders(currentPage);
  }, [currentPage]);

  // Effect for search with debounce
  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(
      setTimeout(() => {
        // Reset to first page and fetch filtered results
        if (currentPage === 1) {
          fetchOrders(1);
        } else {
          setCurrentPage(1);
        }
      }, 500)
    );

    return () => {
      if (searchTimeout) clearTimeout(searchTimeout);
    };
  }, [searchTerm]);

  const fetchOrders = async (page) => {
    try {
      setLoading(true);
      // Add search parameter if searchTerm is not empty
      const searchParam = searchTerm
        ? `&search=${encodeURIComponent(searchTerm)}`
        : "";
      const data = await getAllOrders(page, ordersPerPage, searchParam);

      if (!data.status) {
        toast.error("Failed to get orders, try again later");
        return;
      }

      setOrders(data.data);
      setTotalPages(data.pagination.totalPages);
      setTotalOrders(data.pagination.totalOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to get orders, try again later");
    } finally {
      setLoading(false);
    }
  };

  const toggleOrderExpand = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle next and previous
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      // If total pages is 5 or less, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      // Show dots or page numbers in middle
      if (currentPage <= 3) {
        pageNumbers.push(2, 3, 4, "...");
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push("...", totalPages - 3, totalPages - 2, totalPages - 1);
      } else {
        pageNumbers.push(
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "..."
        );
      }

      // Always show last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  if (loading && orders.length === 0) {
    return (
      <div className="w-full h-full">
        <ShimmerLoadingEffect />
      </div>
    );
  }

  // If no orders after loading completed
  if (!orders.length && !loading) {
    return (
      <div className="flex w-full h-screen bg-gray-50">
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminPageHeader />
          <main className="flex-1 overflow-auto p-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-xl font-semibold mb-4">Orders</h1>
              <p className="text-gray-500">No orders found.</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toISOString().split("T")[0];
  };

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "placed":
        return "bg-orange-100 text-orange-800";
      case "delivered":
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <AdminPageHeader />

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="bg-white rounded-lg shadow">
            {/* Orders Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h1 className="text-xl font-semibold">Orders</h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search orders"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Orders Table */}
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
                  {orders.map((order) => (
                    <>
                      <tr key={order._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.products.length > 1 ? (
                            <button
                              className="mr-2 focus:outline-none"
                              onClick={() => toggleOrderExpand(order._id)}
                            >
                              {expandedOrders[order._id] ? (
                                <FiChevronUp
                                  size={16}
                                  className="text-gray-500"
                                />
                              ) : (
                                <FiChevronDown
                                  size={16}
                                  className="text-gray-500"
                                />
                              )}
                            </button>
                          ) : null}
                          <img
                            src={
                              order.products[0]?.productId?.images?.[0] ||
                              dogfeed
                            }
                            alt={
                              order.products[0]?.productId?.name ||
                              "Product image"
                            }
                            className="h-12 w-12 rounded-md object-cover inline-block"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {order.products[0]?.productId?.name ||
                              "Unknown Product"}
                            {order.products.length > 1 && (
                              <span className="ml-2 text-xs text-gray-500">
                                +{order.products.length - 1} more
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {formatDate(order.createdAt)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ₹ {order.totalAmount.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                              order.orderStatus
                            )}`}
                          >
                            {order.orderStatus || "Unknown"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <FiMoreHorizontal
                            size={20}
                            className="text-gray-500 cursor-pointer"
                          />
                        </td>
                      </tr>
                      {expandedOrders[order._id] &&
                        order.products.length > 1 && (
                          <tr>
                            <td colSpan="6" className="px-6 py-4 bg-gray-50">
                              <div className="text-sm font-medium text-gray-900 mb-2">
                                Products in this order:
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {order.products.map((product, index) => (
                                  <div
                                    key={`${order._id}-product-${index}`}
                                    className="flex items-center p-2 border border-gray-200 rounded-md"
                                  >
                                    <img
                                      src={
                                        product.productId?.images?.[0] ||
                                        dogfeed
                                      }
                                      alt={
                                        product.productId?.name ||
                                        "Product image"
                                      }
                                      className="h-10 w-10 rounded-md object-cover mr-3"
                                    />
                                    <div>
                                      <div className="text-sm font-medium">
                                        {product.productId?.name ||
                                          "Unknown Product"}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        ₹ {product.price.toFixed(2)} ×{" "}
                                        {product.quantity}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        )}
                    </>
                  ))}
                </tbody>
              </table>

              {loading && orders.length > 0 && (
                <div className="p-4 text-center">
                  <p className="text-gray-500">Loading more orders...</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 flex items-center justify-center">
              <nav className="flex items-center space-x-2">
                <button
                  className={`p-2 rounded-md border border-gray-300 ${
                    currentPage === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                >
                  <FiChevronLeft size={16} />
                </button>

                {getPageNumbers().map((number, index) =>
                  number === "..." ? (
                    <span key={`ellipsis-${index}`} className="px-3 py-1">
                      ...
                    </span>
                  ) : (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === number
                          ? "bg-blue-500 text-white font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {number}
                    </button>
                  )
                )}

                <button
                  className={`p-2 rounded-md border border-gray-300 ${
                    currentPage === totalPages
                      ? "text-gray-300 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  <FiChevronRight size={16} />
                </button>
              </nav>
            </div>

            {/* Showing page info */}
            <div className="px-6 pb-4 text-center text-sm text-gray-500">
              Showing {(currentPage - 1) * ordersPerPage + 1} to{" "}
              {Math.min(currentPage * ordersPerPage, totalOrders)} of{" "}
              {totalOrders} orders
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default OrderPage;
