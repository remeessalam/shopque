import { useForm } from "react-hook-form";
import logo from "../assets/images/logo/logo.png";
import signupimage from "../assets/images/signuppageimage.jpeg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { API_BASE_URL } from "../util/contant";
import ButtonLoadingAnim from "../Components/ButtonLoadingAnim";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const lastPage = location.state?.from || "/";

  const onSubmit = async (data) => {
    try {
      if (loading) return;
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!result.status) {
        toast.error(result.message || "Signup failed. Please try again.");
        setLoading(false);
        return;
      }
      localStorage.setItem("userToken", result.token);
      reset();
      toast.success("Sign up successfully");
      setLoading(false);
      navigate(lastPage);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      setLoading(false);
      console.error("Signup error:", error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 relative">
        <div className="absolute top-6 left-6">
          <div className="flex items-center gap-2 text-amber-700">
            <img src={logo} alt="Shopque Nest LLP" className="h-16" />
          </div>
        </div>
        <img
          src={signupimage}
          alt="Person with dog"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-gray-500">Please enter details</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

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
              disabled={loading}
              className={`w-full h-11 py-3 ${
                loading
                  ? `bg-black/70 cursor-not-allowed`
                  : `bg-black hover:bg-gray-800`
              } text-white rounded-lg transition-colors`}
            >
              {loading ? <ButtonLoadingAnim /> : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-600 hover:text-amber-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
