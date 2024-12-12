import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import useAuthProvider from "../../utils/authProvider/authProvider";

const DonationPage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthProvider();
  console.log("This is from donation page:", user);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/donations");
        setDonations(response.data.data);
        // toast.success("Retrieved all donations successfully!");
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch all donations:", error);
        toast.error("Failed to retrieve all donations");
        setLoading(false);
      }
    };
    fetchDonations();
  }, []);

  // if (loading) {
  //   return <div className="text-center text-xl mt-10">Loading...</div>;
  // }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Banner Section */}
      <div className="relative mb-10">
        <img
          src="https://i.ytimg.com/vi/SQexRN_p_xU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC39bqGqsIemyRB_YIbgCjJYbHDag"
          alt="Donation Banner"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
          {/* text */}
          <h2 className="text-4xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-lg">Your generosity can change lives.</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 pt-4">
            Explore Our Featured Donation Campaigns
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Your contribution can transform lives and bring hope to communities
            in need.
            <br /> Explore our campaigns and be a part of the change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="bg-white shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
            >
              <figure>
                <img
                  src={donation.thumbnail}
                  alt={donation.title}
                  className="w-full h-56 object-cover"
                />
              </figure>
              {/* Content */}
              <div className="flex-grow p-4 flex flex-col">
                {/* title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {donation.title}
                </h3>
                {/* description */}
                <p className="text-gray-600 flex-grow mt-2 line-clamp-3">
                  {donation.description}
                </p>
                {/*Amount */}
                <div className="mt-4">
                  <p className="text-lg font-medium text-gray-500 mt-2">
                    Amount:{" "}
                    <span className="text-gray-500 font-semibold">
                      ${donation.amount}
                    </span>
                  </p>
                </div>
                {/* category */}
                <div className="mt-4 text-gray-500 text-sm font-medium">
                  <span className="text-lg font-bold">{donation.category}</span>
                </div>
                {/* button */}
                <div className="mt-4">
                  <Link
                    to={`/donations/${donation._id}`}
                    className="inline-block"
                  >
                    <button className="mt-8 px-4 py-3 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-shadow">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
