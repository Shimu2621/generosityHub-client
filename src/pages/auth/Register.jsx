import Lottie from "lottie-react";
import React from "react";
import registeranimation from "../../../public/login.json";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {
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
  return (
    <div className="max-w-[1440px] h-[800px] mx-auto bg-orange-100 px-10 py-14 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-10">
        {/* Animation Section */}
        <div className="bg-white flex justify-center items-center">
          <Lottie
            className="w-[600px] h-[500px]"
            animationData={registeranimation}
            loop={true}
          />
        </div>

        {/* Register Form Section */}
        <div className="p-2 sm:p-10 max-w-[1000px] bg-white">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Create an Account
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-[700px] h-[560px] px-8 pt-6 py-6 shadow-2xl bg-orange-50 space-y-4"
          >
            {/* Name Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="input rounded-none input-bordered pb-1 w-full"
              />
            </div>

            {/* UserPhoto Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">UserPhoto</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your full name"
                required
                className="input rounded-none input-bordered pb-1 w-full"
              />
            </div>

            {/* Email Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="input rounded-none input-bordered pb-1 w-full"
              />
            </div>

            {/* Password Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="input rounded-none input-bordered pb-1 w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control w-full">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-300 to-orange-500 text-white font-bold shadow-lg hover:shadow-orange-500/50 transition-shadow"
              >
                Register
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-orange-600 font-bold hover:underline"
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
