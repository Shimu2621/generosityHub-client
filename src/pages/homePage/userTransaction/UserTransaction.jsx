import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuthProvider from "../../../utils/authProvider/AuthProvider";
import { useParams } from "react-router";

const UserTransaction = () => {
  const { user, loading } = useAuthProvider();
  console.log("User", user);
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!user || loading) return; // Ensure the effect only runs when user data is ready
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/allTransaction/${user.id}`
        );
        setTransactions(response.data.data);
      } catch (error) {
        console.log("Error fetching transaction data", error);
      }
    };

    fetchTransactions();
  }, [id, user, loading]);

  console.log(transactions);

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

  return (
    <div className="overflow-x-auto w-full px-4 pt-4 ">
      <h1 className="text-4xl items-center text-center text-black font-bold mb-8">
        My Transactions
      </h1>
      <div className="overflow-x-auto">
        <table className="table mb-40 border border-green-800 shadow-2xl ">
          <thead className="bg-green-700 text-white text-lg">
            <tr className="border border-black">
              <th className="border border-black px-4 py-2">Title</th>
              <th className="border border-black px-4 py-2">Amount</th>
              <th className="border border-black px-4 py-2">Category</th>
              <th className="border border-black px-4 py-2">Message</th>
              <th className="border border-black px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border border-black">
                <td className="border border-black text-black">
                  {transaction.fundRaiserId?.title ||
                    transaction.donationId?.title ||
                    "Transaction"}
                </td>
                <td className="border border-black text-black">
                  ${transaction?.amount}
                </td>
                <td className="border border-black text-black">
                  {transaction?.category}
                </td>
                <td className="border border-black text-black">
                  {transaction?.message}
                </td>
                <td className="border border-black text-black">
                  {new Date(transaction?.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTransaction;
