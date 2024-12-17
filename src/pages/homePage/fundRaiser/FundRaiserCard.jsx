import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const FundRaiserCard = () => {
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
        setFundraisers(response.data.data.slice(0, 4));
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
          <div className="absolute  inset-0 animate-spin rounded-full border-4 border-t-green-500 border-b-transparent border-l-transparent"></div>
          <div className="absolute inset-2 animate-spin-slower rounded-full border-4 border-t-transparent border-b-green-500 border-r-transparent"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="px-4 sm:px-6 md:px-8 py-10 bg-gray-100 max-w-[1440px] mx-auto">
      <div className="container mx-auto ">
        <h1
          className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6"
          data-aos="fade-up"
        >
          Ongoing Fundraising Campaigns
        </h1>
        <p
          className="text-center text-gray-600 text-base sm:text-lg mb-8 px-4 sm:px-6"
          data-aos="fade-up"
        >
          {" "}
          Join us in making a difference! With your help, we can create safe
          learning <br /> environments, equip classrooms with necessary
          resources, and empower future generations.{" "}
        </p>

        {/* Fundraising Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {fundraisers.map((fundraiser, index) => (
            <div
              key={fundraiser?.id}
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
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {fundraiser?.title}
                </h2>
                <p className="text-gray-600 flex-grow mt-2 line-clamp-3 text-sm sm:text-base">
                  {fundraiser?.description}
                </p>

                {/* progress bar */}
                <div className="mt-4">
                  <progress
                    className="progress progress-success w-56"
                    value={
                      (fundraiser.raisedAmount / fundraiser.targetedAmount) *
                      100
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
                    <Link
                      to={`/fundraisers/${fundraiser._id}`}
                      className="inline-block"
                    >
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

        {/* View All Fundraisers Button */}
        <div className="text-center mt-10">
          <Link to="/fundraiserPage">
            <button className="mt-8 px-4 py-3 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-shadow">
              View All Fundraiser
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundRaiserCard;
