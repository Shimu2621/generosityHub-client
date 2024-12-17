import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import useAuthProvider from "../../utils/authProvider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaSearch } from "react-icons/fa";

const DonationPage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthProvider();
  console.log("This is from donation page:", user);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the original trigger point
      easing: "ease-in-out",
      once: true,
    });

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

  // Spinner for Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-green-500 border-b-transparent border-l-transparent"></div>
          <div className="absolute inset-2 animate-spin-slower rounded-full border-4 border-t-transparent border-b-green-500 border-r-transparent"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-[1600px] mx-auto ">
      {/* Banner Section */}
      <div className="relative mb-10" data-aos="fade-in">
        <img
          src="https://i.ytimg.com/vi/SQexRN_p_xU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC39bqGqsIemyRB_YIbgCjJYbHDag"
          alt="Donation Banner"
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
          {/* text */}
          <h2 className="text-5xl font-bold mb-4" data-aos="zoom-in">
            Make a Difference Today
          </h2>
          <p className="text-lg" data-aos="zoom-in">
            Your generosity can change lives.
          </p>
        </div>

        {/* Add the search input and filter bar */}
        <div className="absolute top-4/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1120px] w-full bg-black flex justify-center items-center p-14  shadow-lg">
          <div className="flex w-full space-x-4" data-aos="zoom-in">
            {/* Search input */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for a donation category..."
                className="w-full py-4 px-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="absolute inset-y-0 right-0 flex items-center p-6 border border-spacing-1 text-gray-600 cursor-pointer">
                {/* Search Icon */}
                <FaSearch />
              </span>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center ">
              <select className="p-4  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Filter by Amount</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Introduction Section */}
      <div className="max-w-[1440px] mx-auto pt-40">
        <div className="text-center mb-12" data-aos="zoom-in">
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
          {donations.map((donation, index) => (
            <div
              key={donation.id}
              className="bg-white shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
              data-aos={
                (index + 1) % 4 === 1 || (index + 1) % 4 === 2
                  ? "fade-right"
                  : "fade-left"
              } // Cards 1 & 2 in each row/group:
              // Animated from right to center ("fade-right").

              // Cards 3 & 4 in each row/group:
              // Animated from left to center ("fade-left").
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
