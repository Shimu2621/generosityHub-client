import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import useAuthProvider from "../../../utils/authProvider/AuthProvider";

const SingleDonation = () => {
  const { user } = useAuthProvider();
  const { id } = useParams();
  const [donation, setDonation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchSingleDonation = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/donations/${id}`
        );
        console.log(response);
        setDonation(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch single donations:", error);
        toast.error("Failed to retrieve single donation!");
        setLoading(false);
      }
    };
    fetchSingleDonation();
  }, [id, refreshKey]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }
  const handleDonateNow = (amount) => {
    setShowModal(true);
    setAmount(amount);
    // console.log(amount);
  };
  console.log(amount);

  const handleDonateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;

    //(optional) Safeguard for user authentication
    if (!user || !user.id) {
      toast.error("User is not logged in or donor ID is missing!");
      return;
    }
    const newTransaction = {
      donorId: user.id,
      donationId: id,
      amount,
      message,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/donation-transaction",
        newTransaction
      );
      console.log(response);
      if (response.data.status === "Success") {
        toast.success(`Thank you for donating $${amount}!`);
        setShowModal(false);
        setRefreshKey((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to process the donation. Please try again!");
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="relative mb-10 rounded-sm">
        {/* Background Image */}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/045/931/070/small/small-children-gazes-solemnly-at-the-camera-eyes-reflecting-innocence-and-vulnerability-free-photo.jpg"
          className="w-full h-[70vh] sm:h-[100vh] lg:h-[80vh] object-cover  "
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white px-4 md:px-8">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 w-full max-w-6xl">
            {/* Left Section */}
            <div>
              <img
                src={donation.thumbnail}
                alt={donation.title}
                className="h-[60vh] sm:h-[50vh] w-full rounded-sm object-cover py-8 shadow-lg "
              />
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                {donation.title}
              </h1>
              <p className="text-sm sm:text-lg lg:text-base text-gray-300 mb-6">
                {donation.description}
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mb-2">
                <strong>Category:</strong> {donation.category}
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mb-2">
                <strong>Amount:</strong> ${donation.amount}
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mb-2">
                <strong>
                  Status: <span className="font-normal">Active</span>
                </strong>{" "}
                <span
                  className={`${
                    donation.status === "active"
                      ? "text-green-500"
                      : "text-red-500"
                  } font-semibold`}
                >
                  {donation.status}
                </span>
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mb-2">
                <strong>Days Left:</strong>{" "}
                {donation.daysLeft > 0 ? donation.daysLeft : "Campaign Ended"}
              </p>

              {/* Donate Button */}
              <div className="mt-6">
                <button
                  onClick={() => handleDonateNow(donation.amount)}
                  className="w-full sm:w-auto px-6 py-3 rounded-sm bg-gradient-to-r from-green-500 to-green-800 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-shadow"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center mb-20">
        <h2 className="text-4xl  font-bold text-gray-800 mb-4">
          How Your Donations Make an Impact!
        </h2>
        <p className="text-lg text-gray-600">
          Your contributions help us bring smiles to countless faces by funding
          projects that matter!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2  text-gray-800 md:grid-cols-3 gap-6 mt-6">
          <img
            src="https://pbs.twimg.com/media/DeS1aMCWsAAgYTR.jpg"
            alt="Impact 1"
            // className="w-full h-60 object-cover  shadow-lg"
            className="w-full h-60 object-cover rounded-sm  shadow-lg"
          />
          <img
            src="https://www.ottawalife.com/wp-content/uploads/2022/11/gift-of-giving_senior_being-neighbourly_helping_volunteering.jpg"
            alt="Impact 2"
            // className="w-full  h-80 object-cover shadow-lg"
            className="w-full  h-96 object-cover rounded-sm shadow-lg"
          />

          <img
            src="https://img.freepik.com/free-photo/portrait-indian-kids-bazaar_23-2150913328.jpg"
            alt="Impact 3"
            className="w-full  h-60 object-cover rounded-sm shadow-lg"
          />
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle "
          open
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Donation Amount: ${amount}</h3>
            <form onSubmit={handleDonateSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your message here</span>
                </label>
                <textarea
                  className="textarea textarea-success rounded-sm"
                  placeholder="Text Here"
                  name="message"
                ></textarea>
              </div>
              <button
                className="w-full rounded-sm px-6 py-3 bg-gradient-to-r from-green-500 to-green-800 text-white font-bold shadow-lg hover:shadow-green-500/50 transition-shadow"
                type="submit"
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

export default SingleDonation;
