import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AboutPage from "./Pages/AboutPage";
import Homepage from "./Pages/Homepage";
import ProductPage from "./AdminPages/ProductPage";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import CheckOutPage from "./Pages/CheckOutPage";
import OrderStatusPage from "./Pages/OrderStatusPage";
import ProfilePage from "./Pages/ProfilePage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndCondition";
import BlogPage from "./Pages/BlogPage";
import ContactUsPage from "./Pages/ContactUsPage";
import FAQPage from "./Pages/FAQPage";
import AdminDashboard from "./AdminPages/AdminDashboard";
import AdminLayout from "./Layout/Admin/AdminLayout";
import AddProductForm from "./AdminComponents/AddProductForm";
import OrderPage from "./AdminPages/OrderPage";
import CustomerDetails from "./AdminPages/CustomerDetails";
import ReviewsPage from "./AdminPages/ReviewsPage";
import SettingPage from "./AdminPages/SettingPage";
import Login from "./Pages/LoginPage";
import SignUp from "./Pages/SignupPage";
import ForgotPassword from "./Pages/ForGotPassword";
import OTPVerification from "./Pages/OTPVerification";
// import ContactusPage from "./Pages/ContactusPage";
// import CartPage from "./Pages/CartPage";
// import ProductPage from "./Pages/ProductsPage";
// import ProductDetails from "./Pages/ProductDetails";
// import WishlistPage from "./Pages/WishlistPage";

const AppRouter = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/otp-verification", element: <OTPVerification /> },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/cartitems", element: <CartPage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/product-details", element: <ProductDetails /> },
      { path: "/checkout", element: <CheckOutPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/blogs", element: <BlogPage /> },
      { path: "/faq", element: <FAQPage /> },
      {
        path: "/order-success",
        element: <OrderStatusPage orderPlaced={true} />,
      },
      {
        path: "/order-failed",
        element: <OrderStatusPage orderPlaced={false} />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/termsandconditions",
        element: <TermsAndConditions />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      { path: "products", element: <ProductPage /> },
      { path: "add-product-form", element: <AddProductForm /> },
      { path: "orders", element: <OrderPage /> },
      { path: "customer-details", element: <CustomerDetails /> },
      { path: "reveiws", element: <ReviewsPage /> },
      { path: "settings", element: <SettingPage /> },
    ],
  },
]);

export default AppRouter;
