import React from "react";
import erroranimation from "../../../public/error-page.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-5xl font-bold text-green-700">Page Not Found</h2>
      <p className="text-lg text-gray-500 font-semibold mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="relative  w-full h-[500px] mx-auto">
        <Lottie
          className="w-full h-full "
          animationData={erroranimation}
          loop={true}
        />
      </div>
      {/* <Link to="/">
        <button className="mx-auto items-center  left-1/2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-green-800 text-white font-bold rounded-md shadow-lg hover:shadow-green-500/50 transition-shadow">
          Go Home
        </button>
      </Link> */}
      <button class="px-4 py-2 bg-blue-500 text-white rounded">
        Basic Button
      </button>
      <button class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">
        Outline Button
      </button>
      <button class="px-4 py-2 bg-green-500 text-white rounded-full">
        Rounded Button
      </button>
      {/* icon */}
      <button class="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
      <button class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded">
        Gradient Button
      </button>
      <button
        class="px-4 py-2 bg-gray-400 text-gray-700 rounded cursor-not-allowed"
        disabled
      >
        Disabled Button
      </button>

      <button class="px-4 py-2 mb-10 bg-blue-500 text-white rounded shadow-lg hover:shadow-xl">
        Shadow Button
      </button>
      <button class="px-6 py-3 text-lg bg-blue-500 text-white rounded">
        Large Button
      </button>
      <button class="px-2 py-1 text-sm bg-blue-500 text-white rounded">
        Small Button
      </button>
      <button class="w-full px-4 py-2 bg-indigo-500 text-white rounded">
        Block Button
      </button>

      <button class="flex items-center px-4 py-2 bg-blue-500 text-white rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Button with Icon
      </button>
      <button class="flex items-center px-4 py-2 bg-green-500 text-white rounded">
        Button with Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ErrorPage;
