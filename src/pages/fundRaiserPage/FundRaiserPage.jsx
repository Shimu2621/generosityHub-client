import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FundRaiserpage = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-[1600px] mx-auto bg-gray-50 px-4 py-8">
      {/* Banner Section */}
      <div className="relative mb-10">
        <img
          src="https://t4.ftcdn.net/jpg/06/49/97/85/360_F_649978563_zFoVsTGtWXzaKlf4XQre1iF4DJzBZDdm.jpg"
          className=" w-full h-[60vh] md:h-[60vh] object-cover rounded-none shadow-lg"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
          {/* text */}
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {" "}
            Fundraising for a Better Future
          </h2>
          <p className="md:text-lg text-sm text-center px-4">
            We believe that together, we can overcome challenges and make
            lasting changes!
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className=" max-w-[1440px] mx-auto text-center md-12 px-6">
        <div className=" container mx-auto text-center px-6 mb-12">
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
        {fundraisers.map((fundraiser) => (
          <div
            key={fundraiser.id}
            className="card bg-base-100 w-26 rounded-none mx-auto max-w-[1400px] shadow-xl"
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
