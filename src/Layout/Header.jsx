import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/logo/logo.png";
import { useWishlist } from "../Store/WishlistContext";
import { useCart } from "../Store/CartContext";
import { navLinks } from "../util/contant";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < 50 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`w-full fixed z-40 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:flex justify-center gap-1 items-center px-6 py-2 bg-black text-white">
        <div className="flex items-center space-x-2">
          <span className="text-sm">Get 25% OFF on your first order.</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold">Order Now</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white flex items-center justify-between px-5 sm:px-16 py-4 ">
        <div className="text-xl font-bold sm:ml-3">
          <img src={logo} alt="logo" className="w-[4.5rem] sm:w-[6rem]" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex items-center">
            <FaSearch className="absolute left-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-10 py-2 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <Link to={"/cartitems"} className="relative ">
              <GiShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-primary  text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
            <Link to={"/wishlist"} className="relative">
              <CiHeart size={24} />
              <span className="absolute -top-2 -right-2 bg-primary  text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlist.length}
              </span>
            </Link>
            <Link to={"/profile"} className="relative">
              <PiUserCircleLight size={24} />
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 bg-white h-screen">
          <button className="mb-6" onClick={toggleMenu}>
            <FaTimes size={24} />
          </button>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-[#FF7629] ${
                  location.pathname === link.path
                    ? "text-[#FF7629]"
                    : "text-black"
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
