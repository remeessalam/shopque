import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AboutPage from "./Pages/AboutPage";
import Homepage from "./Pages/HomePage";
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
import AdminProductPage from "./AdminPages/AdminProductPage";
import ProductPage from "./Pages/ProductPage";
import WishlistPage from "./Pages/WishlistPage";
import AdminLogin from "./AdminPages/AdminLogin";
import ProtectedRoute from "./Layout/ProtectedRoute";

const AppRouter = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/otp-verification", element: <OTPVerification /> },
  { path: "/admin/login", element: <AdminLogin /> },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/product-details/:id", element: <ProductDetails /> },
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
  // Protected Routes
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      { path: "/cartitems", element: <CartPage /> },
      { path: "/checkout", element: <CheckOutPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/wishlist", element: <WishlistPage /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/admin/products", element: <AdminProductPage /> },
      { path: "/admin/add-product-form", element: <AddProductForm /> },
      { path: "/admin/orders", element: <OrderPage /> },
      { path: "/admin/customer-details", element: <CustomerDetails /> },
      { path: "/admin/reveiws", element: <ReviewsPage /> },
      { path: "/admin/settings", element: <SettingPage /> },
    ],
  },
]);

export default AppRouter;
