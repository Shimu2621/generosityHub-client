import React from "react";
import axios from "axios";
import Lottie from "lottie-react";
import loginanimation from "../../../public/login.json";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    const form = e.target; // Access form element
    const email = form.email.value; // Get email value
    const password = form.password.value; // Get password value
    const user = {
      email,
      password,
    };

    console.log("User Data: ", user);

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

  return (
    <div className="max-w-[1440px] h-[650px] mx-auto bg-orange-100 px-12 py-14 mt-28">
      <div className="grid grid-cols-2 text-center gap-20">
        {/* Animation Section */}
        <div className="bg-white">
          <Lottie
            className="w-[600px] h-[500px]"
            animationData={loginanimation}
            loop={true}
          />
        </div>

        {/* Login Form */}
        <div className="p-2 sm:p-10 max-w-[1000px] bg-white">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Login to Your Account
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-[700px] h-[46vh] px-8 pt-6 shadow-2xl bg-orange-50 space-y-4"
          >
            {/* Email Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email" // Add name attribute for form access
                placeholder="Enter your email"
                className="input rounded-none input-bordered pb-1 w-full"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password" // Add name attribute for form access
                placeholder="Enter your password"
                className="input rounded-none input-bordered pb-1 w-full"
                required
              />
              {/* <h5 className="pr-80 text-sm">Forget your password?</h5> */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-300 to-orange-600 text-white font-bold shadow-lg hover:shadow-orange-500/50 transition-shadow"
            >
              Login
            </button>

            {/* Signup Link */}
            <div className="mt-4 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-orange-600 text-sm font-bold hover:underline"
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
