import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

const DonationCard = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/donations");
        // console.log(response);
        setDonations(response.data.data.slice(0, 4));
        // toast.success("Retrieved all donations successfully!");
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch all donations:", error);
        // toast.error("Failed to retrieve all donations");
        setLoading("Failed to retrieve all donations");
      }
    };
    fetchDonations();
  }, []);

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  // Slice the donations array to show only the first 4
  // const featuredDonations = donations.slice(0, 4);

  return (
    <div className="px-6 py-20 bg-gray-100 max-w-[1440px] mx-auto">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Featured Donation Campaigns
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8 px-2">
          Discover impactful campaigns that are making a real difference.
          <br /> Your generous contributions can help us reach our goals and
          transform lives.
        </p>
      </div>

      {/* Donation Cards */}
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

      <div className="mt-20 text-center">
        <Link to={"/donationPage"}>
          <button className="px-6 py-3 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-shadow ">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
