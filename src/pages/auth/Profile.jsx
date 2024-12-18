import React, { useState } from "react";
import useAuthProvider from "../../utils/authProvider/AuthProvider";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useAuthProvider();
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // If user is not logged in, show a message
  if (!user) {
    return <div>Please log in to view your profile!</div>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage(successMessage);
      toast.success("Profile updated successfully!");
    }, 2000); // Simulate API response delay
  };

  return (
    <div className="max-w-[1000px] mx-auto pt-20 h-auto">
      <h2 className="m-8 text-2xl font-semibold text-gray-700 mb-6">
        My Profile
      </h2>
      {/* Photo */}
      <div className="border border-gray-100 h-auto rounded-md shadow-2xl">
        <div className="px-8 flex flex-col md:flex-row justify-between items-center pt-4">
          <img
            className="w-36 h-36 object-cover rounded-full"
            src={user?.userPhoto || "/default-avatar.png"}
            alt="User"
          />
          {/* edit button */}
          <button
            onClick={handleUpdate}
            className="flex justify-center items-center gap-2 btn btn-success text-sm md:text-base py-2 px-4 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold  shadow-lg hover:shadow-green-500/50 transition-shadow"
          >
            <span className="text-white">
              <CiEdit size={20} />
            </span>
            Edit
          </button>
        </div>

        {/* Divider */}
        <div className="h-[1px] m-4 bg-gray-300 my-4"></div>

        {/* Card */}
        {successMessage && (
          <div className="text-green-600 font-medium mt-4 px-8">
            {successMessage}
          </div>
        )}
        {
          <div className="card bg-gray-100 m-5 w-full max-w-[960px] rounded-md">
            <h2 className="p-6 text-xl font-semibold text-gray-500">
              Personal Information
            </h2>
            <form className="card-body pt-0 py-2 px-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Fullname */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-500 font-medium break-words">
                    Fullname
                  </span>
                </label>
                <input
                  type="text"
                  placeholder={user?.userName || "Enter your name"}
                  className="input input-bordered rounded-md"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-500 font-medium break-words">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder={user?.email || "Enter your email"}
                  className="input input-bordered rounded-md"
                  required
                />
              </div>
              {/* Phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-500 font-medium break-words">
                    Phone Number (Optional)
                  </span>
                </label>
                <input
                  type="tel"
                  placeholder={user?.userPhone || "Enter phone number"}
                  className="input input-bordered rounded-md"
                  required
                />
              </div>
              {/* Member date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-500 font-medium break-words">
                    Member Since
                  </span>
                </label>
                <input
                  type="date"
                  value={
                    new Date(user?.createdAt || Date.now())
                      .toISOString()
                      .split("T")[0]
                  }
                  className="input input-bordered text-gray-500 rounded-md"
                  readOnly
                />
              </div>
            </form>
            {/* Address */}
            <div className="w-full ml-5 rounded-md py-2   mx-auto">
              <h2 className="p-2">Address</h2>
              <form className="card-body  py-2 px-5 grid grid-cols-2 gap-4 border border-gray-200 w-[96%] rounded-md">
                {/* Street*/}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-500 font-medium break-words">
                      Street
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Street"
                    className="input input-bordered rounded-md"
                    required
                  />
                </div>
                {/* City */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-500 font-medium break-words">
                      City
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="input input-bordered rounded-md"
                    required
                  />
                </div>
                {/* Zip code */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-500 font-medium break-words">
                      Zip Code
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Zip Code"
                    className="input input-bordered rounded-md"
                    required
                  />
                </div>
                {/* Country*/}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-500 font-medium break-words">
                      Country
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="input input-bordered text-gray-500 rounded-md"
                    required
                  />
                </div>
              </form>
              {/* Message */}
              <div>
                <label className="label">
                  <span className="label-text text-gray-500 font-medium break-words">
                    Message
                  </span>
                </label>
                <textarea
                  placeholder="Message here"
                  className="textarea textarea-bordered rounded-md textarea-sm w-full max-w-[920px]"
                ></textarea>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Profile;
