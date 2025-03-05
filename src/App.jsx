import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AboutPage from "./Pages/AboutPage";
import Homepage from "./Pages/Homepage";
import ProductPage from "./Pages/ProductPage";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import CheckOutPage from "./Pages/CheckOutPage";
import OrderStatusPage from "./Pages/OrderStatusPage";
import ProfilePage from "./Pages/ProfilePage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndCondition";
import BlogPage from "./Pages/BlogPage";
import ContactUsPage from "./Pages/ContactUsPage";
// import ContactusPage from "./Pages/ContactusPage";
// import CartPage from "./Pages/CartPage";
// import ProductPage from "./Pages/ProductsPage";
// import ProductDetails from "./Pages/ProductDetails";
// import WishlistPage from "./Pages/WishlistPage";

const AppRouter = createBrowserRouter([
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
]);

export default AppRouter;
