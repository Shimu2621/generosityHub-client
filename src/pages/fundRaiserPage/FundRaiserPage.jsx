import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const FundRaiserpage = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the original trigger point
      easing: "ease-in-out",
      once: true,
    });

    const fetchFundraisers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/fundraisers"
        );
        // console.log(response.data);
        setFundraisers(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching fundraisers:", error);
        setLoading(false);
      }
    };
    fetchFundraisers();
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
    <div className="max-w-[1600px] mx-auto bg-gray-50 px-4 py-8">
      {/* Banner Section */}
      <div className="relative mb-10" data-aos="zoom-in">
        <img
          src="https://t4.ftcdn.net/jpg/06/49/97/85/360_F_649978563_zFoVsTGtWXzaKlf4XQre1iF4DJzBZDdm.jpg"
          className=" w-full h-[60vh] md:h-[60vh] object-cover rounded-none shadow-lg"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
          {/* text */}
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            {" "}
            Fundraising for a Better Future
          </h2>
          <p className="md:text-lg text-sm text-center px-4" data-aos="fade-up">
            We believe that together, we can overcome challenges and make
            lasting changes!
          </p>
        </div>

        {/* Add the search input and filter bar */}
        <div className="absolute top-4/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1120px] w-full bg-black flex justify-center items-center p-14  shadow-lg">
          <div className="flex w-full space-x-4" data-aos="fade-up">
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
            <div className="flex items-center">
              <select className="p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Filter by Amount</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className=" max-w-[1440px] mx-auto text-center pt-40 md-12 px-6">
        <div
          className=" container mx-auto text-center px-6 mb-12"
          data-aos="zoom-in"
        >
          <h2 className=" text-2xl md:text-4xl font-bold text-gray-800 pt-4">
            Explore Our Featured Fundraiser Campaigns
          </h2>
          <p className=" text-sm md:text-lg text-gray-600 mt-2">
            Your contribution can transform lives and bring hope to communities
            in need.
            <br /> Explore our campaigns and be a part of the change.
          </p>
        </div>
      </div>

      {/* Fundraising Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {fundraisers.map((fundraiser, index) => (
          <div
            key={fundraiser.id}
            className="card bg-base-100 w-26 rounded-none mx-auto max-w-[1400px] shadow-xl"
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
                className="w-full h-48 sm:h-56 object-cover"
                src={fundraiser?.thumbnail}
                alt={fundraiser?.title}
              />
            </figure>
            <div className="flex flex-grow flex-col px-5 pt-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {fundraiser?.title}
              </h2>
              <p className="text-gray-600 flex-grow mt-2 line-clamp-3">
                {fundraiser?.description}
              </p>

              {/* progress bar */}
              <div className="mt-4">
                <progress
                  className="progress progress-success w-56"
                  value={
                    (fundraiser.raisedAmount / fundraiser.targetedAmount) * 100
                  }
                  max="100"
                ></progress>
                <p className="mt-1 text-gray-600 font-normal">
                  Raised ${fundraiser.raisedAmount} of{" "}
                  {fundraiser.targetedAmount}
                </p>
              </div>

              <div className="mt-2">
                <p>
                  <strong className="font-medium">
                    Goal:{" "}
                    <strong>
                      ${fundraiser?.targetedAmount.toLocaleString()}
                    </strong>
                  </strong>
                </p>
                {/* Raised amount */}
                <p>
                  <strong className="font-medium">
                    Raised:{" "}
                    <strong>
                      ${fundraiser?.raisedAmount.toLocaleString()}
                    </strong>
                  </strong>
                </p>
                {/* Days remaining */}
                <p className="mt-2 text-gray-500">
                  {fundraiser.daysLeft > 0
                    ? `${fundraiser.daysLeft} days remaining`
                    : "Campaign Ended"}
                </p>
                {/* Status */}
                <div className="mt-2 text-gray-500 text-sm font-medium">
                  <span className="text-gray-700 font-bold ">Status: </span>
                  <span
                    className={`font-bold  ${
                      fundraiser.status === "active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {fundraiser.status}
                  </span>
                </div>
                {/* Button */}
                <div className="mt-2">
                  <Link to={`/fundraisers/${fundraiser._id}`}>
                    <button className="mt-8 px-3 py-3 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-shadow">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundRaiserpage;
