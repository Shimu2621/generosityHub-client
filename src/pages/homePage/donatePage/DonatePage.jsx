import React, { useState } from "react";

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit");
  };
  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <div className="relative mb-10">
        <img
          src="https://www.kcmind.org.uk/wp-content/uploads/2020/04/Make-a-change-e1587851370243.jpg"
          className="w-full h-[40vh] sm:h-[50vh] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Make a Difference Today!
          </h1>
          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-800 text-white font-bold rounded-md shadow-lg hover:shadow-green-500/50 transition-shadow">
            Donate Now
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-6 max-w-[1000px] mx-auto shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Choose Your Donation Amount
        </h2>

        <form onSubmit={handleDonationSubmit}>
          {/*Donation Amounts */}
          <div className="mb-4">
            <label
              htmlFor="donationAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Donation Amount
            </label>
            <input
              type="number"
              id="donationAmount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter amount or choose below"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
          </div>

          {/* Message TextArea */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message for the donation campaign"
              rows="4"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-800 text-white font-bold rounded-md shadow-lg hover:shadow-green-500/50 transition-shadow"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonatePage;
