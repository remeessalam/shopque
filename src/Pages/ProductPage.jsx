import { useState } from "react";
import ProductGrid from "../Components/ProductGrid";
import { products } from "../util/productDetails";
import JoinSection from "../Components/JoinSection";

function ProductPage() {
  const [filters, setFilters] = useState({
    categories: ["Pet Dog Products"],
    size: ["M"],
    price: 890,
  });

  const removeFilter = (type, value) => {
    if (type === "category") {
      setFilters({
        ...filters,
        categories: filters.categories.filter((cat) => cat !== value),
      });
    } else if (type === "size") {
      setFilters({
        ...filters,
        size: filters.size.filter((s) => s !== value),
      });
    }
  };

  const petCategories = [
    { id: "pet-dog-products", label: "Pet Dog Products", checked: true },
    { id: "pet-cat-products", label: "Pet Cat Products" },
    { id: "pet-dog-food", label: "Pet Dog Food" },
    { id: "pet-cat-food", label: "Pet Cat Food" },
    { id: "pet-cloths", label: "Pet Cloths" },
    { id: "pet-toys", label: "Pet Toys" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      <div className="bg-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-gray-600">
            <span>Ecommerce</span>
            <span className="mx-2">{">"}</span>
            <span>Search</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="wrapper py-6 ">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="border border-gray-200 p-4 rounded-md">
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {petCategories.map(({ id, label, checked }) => (
                    <div key={id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={id}
                        className="mr-2"
                        defaultChecked={checked}
                      />
                      <label htmlFor={id} className="text-sm">
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-300 border border-gray-300 cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-yellow-200 border border-gray-300 cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-green-400 border border-gray-300 cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="border border-gray-300 px-3 py-1 text-sm rounded">
                    S
                  </button>
                  <button className="border border-gray-300 px-3 py-1 text-sm rounded bg-gray-100">
                    M
                  </button>
                  <button className="border border-gray-300 px-3 py-1 text-sm rounded">
                    L
                  </button>
                  <button className="border border-gray-300 px-3 py-1 text-sm rounded">
                    XL
                  </button>
                  <button className="border border-gray-300 px-3 py-1 text-sm rounded mt-2">
                    XXL
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Price</h3>
                <div className="mb-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={filters.price}
                    className="w-full"
                    onChange={(e) =>
                      setFilters({ ...filters, price: e.target.value })
                    }
                  />
                </div>
                <div className="text-right bg-gray-800 text-white text-xs px-2 py-1 inline-block rounded">
                  $ {filters.price}.00
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 md:pl-6">
            {/* Applied Filters */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Applied Filters:</h3>
              <div className="flex flex-wrap gap-2">
                {filters.categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center bg-white border border-gray-200 rounded-md px-3 py-1"
                  >
                    <span className="text-sm">{category}</span>
                    <button
                      className="ml-2 text-gray-500"
                      onClick={() => removeFilter("category", category)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                {filters.size.map((size) => (
                  <div
                    key={size}
                    className="flex items-center bg-white border border-gray-200 rounded-md px-3 py-1"
                  >
                    <span className="text-sm">Size: {size}</span>
                    <button
                      className="ml-2 text-gray-500"
                      onClick={() => removeFilter("size", size)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Count and Sort */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">
                Showing 1-9 Of 36 Results.
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">SORT BY</span>
                <button className="text-sm flex items-center">
                  <span className="mr-1">▼</span>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div>
              <ProductGrid products={products.slice(0, 9)} cardslength={3} />
            </div>
          </div>
        </div>
      </div>
      <JoinSection />
    </div>
  );
}

export default ProductPage;
