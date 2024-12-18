import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import toast from "react-hot-toast";
import { Link } from "react-router";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";

const DonationCard = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setDonations(response.data.data.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch all donations:", error);
        setLoading("Failed to retrieve all donations");
      }
    };

    fetchDonations();
  }, []);

  // Spinner for Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="relative w-20 h-20">
          <div className="absolute  inset-0 animate-spin rounded-full border-4 border-t-green-700 border-b-transparent border-l-transparent"></div>
          <div className="absolute inset-2 animate-spin-slower rounded-full border-4 border-t-transparent border-b-green-700 border-r-transparent"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-20 bg-gray-100 max-w-[1440px] mx-auto">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-6"
          data-aos="fade-up"
        >
          Featured Donation Campaigns
        </h2>
        <p
          className="text-lg text-center text-gray-600 mb-8 px-2"
          data-aos="fade-up"
        >
          Discover impactful campaigns that are making a real difference.
          <br /> Your generous contributions can help us reach our goals and
          transform lives.
        </p>
      </div>

      {/* Donation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {donations.map((donation, index) => (
          <div
            key={donation.id}
            className="bg-white shadow-lg rounded-sm overflow-hidden flex flex-col transition-transform transform hover:scale-105"
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {donation.title}
              </h3>
              <p className="text-gray-600 flex-grow mt-2 line-clamp-2">
                {donation.description}
              </p>
              <div className="mt-4">
                <p className="text-lg font-medium text-gray-500 mt-2">
                  Amount:{" "}
                  <span className="text-gray-500 font-semibold">
                    ${donation.amount}
                  </span>
                </p>
              </div>
              <div className="mt-4 text-gray-500 text-sm font-medium">
                <span className="text-lg font-bold">{donation.category}</span>
              </div>
              <div className="mt-4">
                <Link
                  to={`/donations/${donation._id}`}
                  className="inline-block"
                >
                  <button className="mt-8 px-4 py-3 rounded-sm transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-shadow">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center" data-aos="fade-up">
        <Link to={"/donationPage"}>
          <button className="px-6 py-3 rounded-sm transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-shadow ">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
