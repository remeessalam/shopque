import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import loginimage from "../assets/images/loginpageimage.jpeg";
import logo from "../assets/images/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { checkUserTocken } from "../util/helper";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../util/contant";
import ButtonLoadingAnim from "../Components/ButtonLoadingAnim";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const lastPage = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const userToken = checkUserTocken();
    if (userToken) {
      navigate(lastPage, { replace: true });
    }
  }, [navigate, lastPage]);

  const onSubmit = async (data) => {
    if (loading) return;
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!result.status) {
        toast.error(result.message || "login failed. Please try again.");
        setLoading(false);
        return;
      }
      localStorage.setItem("userToken", result.token);
      reset();
      toast.success("Login successfully");
      setLoading(false);
      navigate(lastPage);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      setLoading(false);
      console.error("Signup error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="md:w-1/2 relative">
        <div className="absolute top-6 left-6">
          <div className="flex items-center gap-2 text-amber-700">
            <img src={logo} alt="Shopque Nest LLP" className="h-16" />
          </div>
        </div>
        <img
          src={loginimage}
          alt="Person with dog"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Login Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome 👋</h1>
            <p className="text-gray-500">Please login here</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="name@gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type={isHide ? "password" : "text"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Password cannot exceed 10 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).+$/,
                      message:
                        "Password must contain at least one uppercase letter and one number",
                    },
                  })}
                  placeholder="••••••••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <span
                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                  onClick={() => setIsHide((prev) => !prev)}
                >
                  {isHide ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 h-11 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              {loading ? <ButtonLoadingAnim /> : "Login"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            New here? Click here to{" "}
            <Link to="/signup" className="text-amber-600 hover:text-amber-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
