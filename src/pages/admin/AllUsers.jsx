import axios from "axios";
import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

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
              <tr key={user.id} className="border border-teal-400">
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

                <td className=" text-teal-400 mt-3  text-center">
                  {/* <Link to={`/update-donation/${user._id}`}>
                    <button
                      // onClick={() => handleEdit(donation._id)}
                      className="btn btn-xs btn-warning mx-1"
                    >
                      Edit
                    </button>
                  </Link> */}
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default AllUsers;
