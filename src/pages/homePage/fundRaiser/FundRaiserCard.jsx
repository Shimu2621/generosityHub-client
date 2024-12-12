import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FundRaiserCard = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }
  return (
    <div className="px-6 py-20 bg-gray-100 max-w-[1440px] mx-auto">
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Ongoing Fundraising Campaigns
        </h1>
        <p className="text-center text-gray-600 text-lg mb-8 px-2">
          {" "}
          Join us in making a difference! With your help, we can create safe
          learning <br /> environments, equip classrooms with necessary
          resources, and empower future generations.{" "}
        </p>

        {/* Fundraising Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {fundraisers.map((fundraiser) => (
            <div className="card bg-base-100 w-26 rounded-none mx-auto max-w-[1400px] shadow-xl">
              <figure>
                <img
                  className="w-full h-56 object-cover"
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
