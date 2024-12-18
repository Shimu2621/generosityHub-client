import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllDonation = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/donations");
        setDonations(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("fetching error:", error);
        setLoading(false);
      }
    };
    fetchDonations();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/donations/${id}`
      );
      // console.log(response);
      setDonations(donations.filter((donation) => donation._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  // Spinner for Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center w-[90vw] min-h-screen bg-gray-100">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-green-500 border-b-transparent border-l-transparent"></div>
          <div className="absolute inset-2 animate-spin-slower rounded-full border-4 border-t-transparent border-b-green-500 border-r-transparent"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto px-4 pt-4 ">
      <h1 className="text-teal-400 w-[98%] mb-10 text-5xl font-bold text-center">
        All Donation Overview
      </h1>
      <table className="table mb-40 border border-teal-400 shadow-2xl ">
        {/* head */}
        <thead className="bg-teal-400 text-gray-800 text-lg">
          <tr className="border border-black">
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox text-gray-800 border border-black"
                />
              </label>
            </th>
            <th className="border border-black px-4 py-2">Thumbnail</th>
            <th className="border  border-black px-4 py-2">Title</th>
            <th className="border  border-black px-4 py-2">description</th>
            <th className="border  border-black px-4 py-2">Amount</th>
            <th className="border  border-black px-4 py-2">Category</th>
            <th className="border  border-black px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations.length > 0 ? (
            donations.map((donation) => (
              <tr key={donations.id} className="border border-teal-400">
                {/* checkbox */}
                <th className="border border-teal-500">
                  <label>
                    <input type="checkbox" className="checkbox bg-teal-400" />
                  </label>
                </th>
                {/* Thumbnail */}
                <td className="border border-teal-500">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" h-12 w-20 object-contain">
                        <img
                          src={donation?.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                {/* Title */}
                <td className="border border-teal-500 text-teal-400">
                  {donation?.title}
                </td>
                {/* Description */}
                {/* <td className="border border-teal-500 text-teal-400 ">
                  {donation?.description}
                </td> */}
                <td className="border border-teal-500 text-teal-400">
                  ${donation?.amount.toFixed(2)}
                </td>
                <td className="border border-teal-500 text-teal-400">
                  {donation?.category}
                </td>

                <td className=" text-teal-400  flex mt-3  text-center">
                  <Link to={`/update-donation/${donation._id}`}>
                    <button
                      // onClick={() => handleEdit(donation._id)}
                      className="btn btn-xs btn-warning mx-1"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(donation._id)}
                    className="btn btn-xs btn-error mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="border border-gray-300 px-4 py-2 text-center"
              >
                No donations available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllDonation;
