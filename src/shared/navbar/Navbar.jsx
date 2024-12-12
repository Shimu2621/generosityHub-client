import React from "react";
import { Link, NavLink } from "react-router";
import navlogo from "../../../public/images/navbarlogo/navlogo1.png";
import useAuthProvider from "../../utils/authProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuthProvider(); // Get user and logout function from authProvider.js
  console.log("user:", user);

  const handleLogout = () => {
    logout(); // Call the logout function to remove the token and clear user state
    toast.success("You Logged Out successfully!");
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 gap-80 max-w-screen-2xl mx-auto w-1/2 justify-center ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Donation</a>
            </li>
            <li>
              <a>Fundraiser</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Logo Container */}
        <div className="relative flex justify-center items-start mx-auto">
          <img
            src={navlogo}
            alt="Logo"
            className="h-16 w-16 object-contain left-20 top-0"
          />
          <a
            style={{ boxShadow: "0 1px 0 0 gray" }}
            className="font-bold text-md text-center underline decoration-gray-500 decoration-2 text-neutral-500 top-0 pt-4"
          >
            Generosity
            <span className="text-green-600 text-xl">Hub</span>
          </a>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center items-center space-x-6 text-center px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold"
                  : "text-gray-500 font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donationPage"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold"
                  : "text-gray-500 font-bold"
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fundraiserPage"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold"
                  : "text-gray-500 font-bold"
              }
            >
              Fund Raiser
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold"
                  : "text-gray-500 font-bold"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold"
                  : "text-gray-500 font-bold"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      {user && user.userPhoto ? (
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" m-1">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={user.userPhoto} />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[2]  underline-offset-auto w-40 p-2 shadow"
          >
            <li>
              <a>{user.userName}</a>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            {user.role === "admin" && ( // Check if user is an admin
              <li>
                <NavLink to="/admin/admin-home">Admin Panel</NavLink>
              </li>
            )}
            <li>
              <a onClick={handleLogout}>Log Out</a>
            </li>
          </ul>
        </div>
      ) : (
        <button className="btn btn-md custom-btn-size bg-gradient-to-r from-green-500 to-green-900 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow">
          <Link to="/register">
            <p>Join Us</p>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Navbar;
