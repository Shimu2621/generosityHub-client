import Lottie from "lottie-react";
import React, { useState } from "react";
import registeranimation from "../../../public/login-page.json";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const userName = form.name.value;
    const userPhoto = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = {
      userName,
      userPhoto,
      email,
      password,
      role: "user",
    };
    console.log(newUser);

    await axios
      .post("http://localhost:4000/api/signup", newUser)
      .then((response) => {
        // console.log(response);
        navigate("/login");
        toast.success("You have Successfully Registered!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="max-w-[1440px] h-[800px] mx-auto  px-10 py-10 mt-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-10">
        {/* Animation Section */}
        <div className="bg-white flex justify-center items-center">
          <Lottie
            className="w-[600px] h-[700px]"
            animationData={registeranimation}
            loop={true}
          />
        </div>

        {/* Register Form Section */}
        <div className="p-2 sm:p-10 max-w-[1000px] bg-white">
          <h2 className="text-4xl font-bold text-center text-gray-700">
            Create an Account
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-[700px] h-[600px] px-8 pt-6 py-6 shadow-2xl bg-teal-900 space-y-4"
          >
            {/* Name Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="input rounded-none input-bordered pb-1 input-success w-full "
              />
            </div>

            {/* UserPhoto Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">UserPhoto</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your full name"
                required
                className="input rounded-none input-bordered input-success pb-1 w-full"
              />
            </div>

            {/* Email Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="input rounded-none input-bordered input-success pb-1 w-full"
              />
            </div>

            {/* Password Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password" // Add name attribute for form access
                  placeholder="Enter your password"
                  className="input rounded-none input-bordered input-success pb-1 w-full"
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
              <h5 className="text-justify text-sm text-white pb-8">
                Forget your password?
              </h5>
            </div>

            {/* Submit Button */}
            <div className="form-control w-full">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold  shadow-lg hover:shadow-green-500/50 transition-shadow"
              >
                Register
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-green-600 font-bold hover:underline"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
