import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredUsers, setFilteredUsers] = useState([]);
  // const [roleFilter, setRoleFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/users");
        console.log(response);
        setUsers(response.data.data);
        setLoading(true);
      } catch (error) {
        console.log("Error fetching users:", error);
        setLoading(true);
      }
    };
    fetchUsers();
  }, [refreshKey]);

  // Handle role change
  const handleRoleChange = async (id, newRole) => {
    console.log(newRole);
    console.log(id);
    try {
      const response = await axios.put(
        `http://localhost:4000/api/users/${id}`,
        { role: newRole } //the payload sent to the server to update the role
      );
      console.log("response:", response);
      // If the user.id matches (user)id, update the role for that user.
      if (response.data.status === "Success") {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === id ? { ...user, role: newRole } : user
          )
        );
        setRefreshKey((prev) => prev + 1);
        toast.success("Role Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update role");
    }
  };

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
    <div className="overflow-x-auto px-4 pt-14 w-full ">
      <h1 className="text-teal-400 w-full mb-10 text-5xl font-bold text-center">
        All Users Overview
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
            <th className="border border-black px-4 py-2">Photo</th>
            <th className="border  border-black px-4 py-2">Name</th>
            <th className="border  border-black px-4 py-2">Email</th>
            <th className="border  border-black px-4 py-2">Role</th>
            <th className="border  border-black px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} className="border border-teal-400">
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
                      <div className=" h-12 w-12 rounded-full object-contain">
                        <img
                          src={user?.userPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                {/* Title */}
                <td className="border border-teal-500 text-teal-400">
                  {user?.userName}
                </td>
                {/* Description */}
                <td className="border border-teal-500 text-teal-400 ">
                  {user?.email}
                </td>
                {/* Role */}
                <td className="border border-teal-500 text-teal-400">
                  {user?.role}
                </td>
                {/* Action */}
                <td className=" text-teal-400 mt-3  text-center">
                  <select
                    value={user.role === "admin" ? "user" : "admin"}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="select select-bordered bg-teal-400 w-full max-w-sm text-black"
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>

                  {/* <div className="flex space-x-4">
                    {user.role === "user" ? (
                      <button
                        onClick={() => handleRoleChange(user.id, "admin")}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      >
                        Promote to Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRoleChange(user.id, "user")}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                      >
                        Demote to User
                      </button>
                    )}
                  </div> */}
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

export default AllUsers;
