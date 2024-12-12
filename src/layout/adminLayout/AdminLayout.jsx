import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import Lottie from "lottie-react";

const AdminLayout = () => {
  return (
    <div className="drawer bg-black lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-teal-400 rounded-none text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li className=" font-semibold">
            <Link to="/">GenerosityHub</Link>
          </li>
          {/* Admin Home route */}
          <li className=" font-semibold">
            <NavLink
              to="/admin/admin-home"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "black",
              })}
            >
              Admin Home
            </NavLink>
          </li>
          {/* Create Donation route */}
          <li className=" font-semibold">
            <NavLink
              to="/admin/create-donation"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "black",
              })}
            >
              Create Donation
            </NavLink>
          </li>
          {/* Create Fundraiser route */}
          <li className=" font-semibold">
            <NavLink
              to="/admin/create-fundraiser"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "black",
              })}
            >
              Create Fundraiser
            </NavLink>
          </li>
          {/* All Donation route */}
          <li className=" font-semibold">
            <NavLink
              to="/admin/all-donation"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "black",
              })}
            >
              All Donation
            </NavLink>
          </li>

          {/* All Fundraiser route */}
          <li className=" font-semibold">
            <NavLink
              to="/admin/all-fundraiser"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "black",
              })}
            >
              All Fundraiser
            </NavLink>
          </li>
          {/* All User route */}
          <li className=" font-semibold">
            <NavLink
              to="/admin/all-user"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "black",
              })}
            >
              All User
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
