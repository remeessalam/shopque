import { useState } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import AdminPageHeader from "./AdminPageHeader";

const AddProductForm = () => {
  // State for form values
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    slug: "",
    sku: "",
    description: "",
    stockStatus: "in-stock",
    quantity: "",
    colors: [],
    sizes: [],
  });

  // State for images
  const [images, setImages] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData({
        ...formData,
        title: value,
        slug: slug,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle image uploads
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substring(2, 9),
    }));

    setImages([...images, ...newImages]);
  };

  // Remove image
  const removeImage = (id) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
  };

  // Toggle color selection
  const toggleColor = (color) => {
    const newColors = formData.colors.includes(color)
      ? formData.colors.filter((c) => c !== color)
      : [...formData.colors, color];

    setFormData({
      ...formData,
      colors: newColors,
    });
  };

  // Toggle size selection
  const toggleSize = (size) => {
    const newSizes = formData.sizes.includes(size)
      ? formData.sizes.filter((s) => s !== size)
      : [...formData.sizes, size];

    setFormData({
      ...formData,
      sizes: newSizes,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Form Data:", formData);
    console.log("Images:", images);
    alert("Product added successfully!");
  };

  // Color options
  const colorOptions = [
    { name: "yellow", bgClass: "bg-yellow-400" },
    { name: "orange", bgClass: "bg-orange-500" },
    { name: "lightblue", bgClass: "bg-blue-300" },
    { name: "green", bgClass: "bg-green-500" },
  ];

  // Size options
  const sizeOptions = ["S", "M", "X", "XL", "XXL"];

  return (
    <>
      <div className="w-full bg-gray-100  min-h-screen shadow-md ">
        <AdminPageHeader />
        <div className="max-w-6xl mx-auto bg-white rounded-md mt-10">
          <h1 className="text-xl font-medium text-start border-b mb-6 p-5">
            Add Product
          </h1>

          <form onSubmit={handleSubmit} className="p-5 ">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Side */}
              <div className="flex-1">
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="clothing">Clothing</option>
                    <option value="shoes">Shoes</option>
                    <option value="accessories">Accessories</option>
                    <option value="electronics">Electronics</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="slug"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Slug
                  </label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="sku"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    SKU
                  </label>
                  <input
                    type="text"
                    id="sku"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex-1">
                <div className="mb-4">
                  <label
                    htmlFor="stockStatus"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Stock Status
                  </label>
                  <select
                    id="stockStatus"
                    name="stockStatus"
                    value={formData.stockStatus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="in-stock">In Stock</option>
                    <option value="out-of-stock">Out of Stock</option>
                    <option value="backorder">Backorder</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Available Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Images
                  </label>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      document.getElementById("product-images").click()
                    }
                  >
                    <FaCloudUploadAlt className="mx-auto text-gray-400 text-3xl mb-2" />
                    <p className="text-sm text-gray-500">
                      Click to upload or drag images here
                    </p>
                    <input
                      type="file"
                      id="product-images"
                      onChange={handleImageUpload}
                      multiple
                      accept="image/*"
                      className="hidden"
                    />
                  </div>

                  {images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {images.map((image) => (
                        <div
                          key={image.id}
                          className="relative w-20 h-20 rounded overflow-hidden border border-gray-200"
                        >
                          <img
                            src={image.preview}
                            alt="Product preview"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(image.id)}
                            className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs"
                          >
                            <FaTimes />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Colors
                  </label>
                  <div className="flex space-x-3">
                    {colorOptions.map((color) => (
                      <div
                        key={color.name}
                        onClick={() => toggleColor(color.name)}
                        className={`w-8 h-8 rounded-full cursor-pointer ${
                          color.bgClass
                        } ${
                          formData.colors.includes(color.name)
                            ? "ring-2 ring-offset-2 ring-gray-800"
                            : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sizes
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sizeOptions.map((size) => (
                      <div
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1 border rounded-md cursor-pointer text-center ${
                          formData.sizes.includes(size)
                            ? "bg-gray-800 text-white border-gray-800"
                            : "bg-gray-100 text-gray-800 border-gray-200"
                        }`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-fit px-5 text-black py-3 rounded-md font-medium hover:bg-black hover:text-white border border-black transition-colors mt-6"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
