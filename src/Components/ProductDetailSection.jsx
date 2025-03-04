/* eslint-disable*/
const ProductDetailSection = ({ productData }) => {
  return (
    <div className="mt-12 md:col-span-2">
      <h2 className="text-2xl font-bold text-start mb-4">Detail</h2>
      <p className="text-gray-700 mb-6">{productData.description}</p>

      <h3 className="font-bold mb-2">Key Features:</h3>
      <ul className="mb-6">
        {productData.keyFeatures.map((feature, index) => (
          <li key={index} className="flex items-start mb-2">
            <span className="inline-block w-5 h-5 bg-green-500 text-white rounded-sm text-xs flex items-center justify-center mr-2 mt-0.5">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <h3 className="font-bold mb-2">Why Choose This Food Dispenser?</h3>
      <ul className="mb-6">
        {productData.whyChoose.map((reason, index) => (
          <li key={index} className="flex items-start mb-2">
            <span className="mr-2">✓</span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetailSection;
