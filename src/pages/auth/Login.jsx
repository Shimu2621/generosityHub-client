import React, { useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import loginanimation from "../../../public/login-page.json";
import { useNavigate } from "react-router";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/signin",
        user,
        { withCredentials: true }
      );
      console.log("Response: ", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error: ", error.response?.data || error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-[1480px] h-auto mx-auto  px-4 sm:px-8 py-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Animation Section */}
        <div className=" flex justify-center items-center p-4">
          <Lottie
            className="w-[300px] sm:w-[450px] md:w-[550px] h-auto"
            animationData={loginanimation}
            loop={true}
          />
        </div>

        {/* Login Form */}
        <div className="p-4 sm:p-10 ">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-10">
            Login to Your Account
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-[700px] bg-teal-900 h-auto px-6 py-8  shadow-xl space-y-6"
          >
            {/* Email Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-sm sm:text-base">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input rounded-none input-bordered input-success w-full"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-sm sm:text-base">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input rounded-none input-bordered input-success w-full"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <h5 className="text-left text-white text-sm mt-2 pb-4">
                Forget your password?
              </h5>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold  shadow-lg hover:shadow-green-500/50 transition-shadow"
            >
              Login
            </button>

            {/* Signup Link */}
            <div className="mt-4 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-green-600 font-bold hover:underline"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
