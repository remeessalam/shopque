import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "./Footer";
import { checkUserTocken } from "../util/helper";

const ProtectedRoute = () => {
  const userToken = checkUserTocken();

  return userToken ? (
    <>
      <Header />
      <ScrollToTop />
      <div className="pt-[60px] md:pt-[116px]">
        <Outlet />
      </div>
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
