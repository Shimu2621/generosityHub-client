import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuthProvider from "../../../utils/authProvider/AuthProvider";

const SingleFundraiser = () => {
  const { user } = useAuthProvider();
  const { id } = useParams();
  const [fundraiser, setFundraiser] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  // const [fundAmount, setFundAmount] = useState(0);
  const [fundRaiserId, setFundRaiserId] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchSingleFundraiser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/fundraisers/${id}`
        );
        setFundraiser(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch fundraiser:", error);
        toast.error("Failed to retrieve fundraiser details!");
        setLoading(false);
      }
    };
    fetchSingleFundraiser();
  }, [id, refreshKey]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  const handleFundraiser = (fundraiser) => {
    setShowModal(true);
    setFundRaiserId(fundraiser._id);
    // console.log("fundraiser", fundraiser);
  };

  const handleFundraiserSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    const form = e.target; // Access form element
    const amount = form.amount.value * 1;
    const message = form.message.value;
    console.log(typeof amount, message);
    const newTransaction = {
      donorId: user.id,
      fundRaiserId,
      amount,
      message,
    };
    // console.log(newTransaction);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/create-transaction",
        newTransaction
      );
      console.log(response);
      if (response.data.status === "Success") {
        toast.success(`Thank you for donating $${amount}!`);
        setShowModal(false);
        setRefreshKey((prev) => prev + 1);
      }

      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="relative mb-10">
        {/* Background Image */}
        <img
          src="https://www.drivencoffee.com/cdn/shop/articles/team-fundraising-motivation.jpg?v=1722961248"
          className="w-full h-[70vh] sm:h-[100vh] lg:h-[80vh] object-cover"
          alt="Fundraiser Banner"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 w-full max-w-6xl">
            {/* Left Section */}
            <div>
              <img
                src={fundraiser.thumbnail}
                alt={fundraiser.title}
                className="h-[60vh] sm:h-[50vh] w-full object-cover py-8 shadow-lg"
              />
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                {fundraiser.title}
              </h1>
              <p className="text-sm sm:text-lg lg:text-base text-gray-300 mb-6">
                {fundraiser.description}
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mb-2">
                <strong>Category:</strong> {fundraiser.category}
              </p>
              <p>
                <strong>Targeted Amount:</strong> $
                {fundraiser.targetedAmount?.toLocaleString()}
              </p>
              <p>
                <strong>Raised Amount:</strong> $
                {fundraiser.raisedAmount?.toLocaleString()}
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mb-2">
                <strong>Status:</strong>{" "}
                <span
                  className={`${
                    fundraiser.status === "active"
                      ? "text-green-500"
                      : "text-red-500"
                  } font-semibold`}
                >
                  {fundraiser.status}
                </span>
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mb-2">
                <strong>Days Left:</strong>{" "}
                {fundraiser.daysLeft > 0
                  ? fundraiser.daysLeft
                  : "Campaign Ended"}
              </p>

              {/* Donate Button */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    handleFundraiser(fundraiser);
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-green-800 text-white font-bold rounded-md shadow-lg hover:shadow-green-500/50 transition-shadow"
                >
                  Fund Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mt-20 text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          How Your Contributions Help
        </h2>
        <p className="text-lg text-gray-600">
          Together, we can make a significant difference in many lives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <img
            src="https://pbs.twimg.com/media/DeS1aMCWsAAgYTR.jpg"
            alt="Impact 1"
            className="w-full h-60 object-cover shadow-lg"
          />
          <img
            src="https://www.ottawalife.com/wp-content/uploads/2022/11/gift-of-giving_senior_being-neighbourly_helping_volunteering.jpg"
            alt="Impact 2"
            className="w-full h-80 object-cover shadow-lg"
          />
          <img
            src="https://img.freepik.com/free-photo/portrait-indian-kids-bazaar_23-2150913328.jpg"
            alt="Impact 3"
            className="w-full h-60 object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Fundraiser Modal */}
      {showModal && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Fund to {fundraiser.title}</h3>
            <form onSubmit={handleFundraiserSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donation Amount</span>
                </label>
                <input
                  type="number"
                  name="amount"
                  className="input input-success"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your message here</span>
                </label>
                <textarea
                  className="textarea textarea-success"
                  placeholder="Text Here"
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-800 text-white font-bold rounded-md shadow-lg hover:shadow-green-500/50 transition-shadow mt-4"
              >
                Donate
              </button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default SingleFundraiser;
