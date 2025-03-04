import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-white py-[7rem] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Zippty</h2>
            <p className="text-gray-600 mb-6 max-w-[18rem]">
              At Zippty, we know your pets are more than just
              animals—they&apos;re family. Whether you have a curious kitten or
              an energetic dog,
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebook size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cartitems"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Store</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                JP Colony, Shastri Nagar, Jaipur, Rajasthan - 302016
              </li>
              <li className="text-gray-600">+91-XXXXX XXXXX</li>
              <li className="text-gray-600">info@domain.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
