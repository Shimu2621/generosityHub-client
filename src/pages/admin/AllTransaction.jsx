import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/all-transactions"
        );
        setTransactions(response.data.data); // Assuming the data is in response.data.data
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch transactions. Please try again.");
        setLoading(false);
      }
    };

    fetchTransactions();
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

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full px-4 pt-4 ">
      <h1 className="text-4xl items-center text-center text-teal-400 font-bold mb-6">
        All Transactions
      </h1>
      <div className="overflow-x-auto">
        <table className="table mb-40 border border-teal-400 shadow-2xl ">
          <thead className="bg-teal-400 text-gray-800 text-lg">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">Transaction ID</th>
              <th className="border border-black px-4 py-2">Donor Name</th>
              <th className="border border-black px-4 py-2">Donor Email</th>
              <th className="border border-black px-4 py-2">Title</th>
              <th className="border border-black px-4 py-2">Message</th>
              <th className="border border-black px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border border-teal-400">
                <td className="border border-teal-500 text-teal-400">
                  {transaction._id}
                </td>
                <td className="border border-teal-500 text-teal-400">
                  {transaction.donorId?.userName || "N/A"}
                </td>
                <td className="border border-teal-500 text-teal-400">
                  {transaction.donorId?.email ||
                    transaction.fundRaiserId?.email ||
                    "N/A"}
                </td>
                <td className="border border-teal-500 text-teal-400">
                  {transaction.donationId?.title ||
                    transaction.fundRaiserId?.title ||
                    "N/A"}
                </td>
                <td className="border border-teal-500 text-teal-400">
                  {transaction.donationId?.message ||
                    transaction.fundRaiserId?.message ||
                    "N/A"}
                </td>
                <td className="border border-teal-500 text-teal-400">
                  {transaction.amount || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransactions;
