import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import amex from "../assets/images/amex.png";
import visa from "../assets/images/visa.png";
import master from "../assets/images/mastercard.png";
import { companyDetails } from "../util/contant";
const Footer = () => {
  const images = [master, amex, visa];
  return (
    <footer className="relative bg-white py-[7rem] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:justify-items-center">
          {/* Company Info */}
          <div className="">
            <img src={logo} alt="Shopque Nest LLP" className="h-16 mb-4" />
            <p className="text-gray-600 mb-6 max-w-[18rem]">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className="flex space-x-4">
              <Link
                to={companyDetails.facebook}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                to={companyDetails.instagram}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                to={companyDetails.twitter}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                to={companyDetails.youtube}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="font-normal text-gray-900 text-lg mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/termsandconditions"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms of use
                </Link>
              </li>
              <li>
                <Link
                  to="/privacypolicy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-normal text-gray-900 text-lg mb-4">COMPANY</h3>
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
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-gray-900"
                >
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
                <Link
                  to="/contact-us"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-normal text-gray-900 text-lg mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-gray-900"
                >
                  MY Account
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h3 className="font-normal text-gray-900 text-lg mb-4">
              ACCEPTED PAYMENTS
            </h3>
            <div className="flex gap-2">
              {images.map((obj, i) => (
                <img
                  key={i}
                  src={obj}
                  alt="payment-method"
                  className="grayscale"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
