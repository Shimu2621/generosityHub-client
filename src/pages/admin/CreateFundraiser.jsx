import Lottie from "lottie-react";
import React, { useState } from "react";
// import createfund from "../../../public/create-fundraiser.json";
import createAnimation from "../../../public/create-animation.json";
import toast from "react-hot-toast";
import axios from "axios";
const CreateFundraiser = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [targetedAmount, setTargetedAmount] = useState("");
  const [raisedAmount, setRaisedAmount] = useState("");
  const [daysLeft, setDaysLeft] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      title,
      description,
      thumbnail,
      targetedAmount,
      raisedAmount,
      daysLeft,
      category,
      status,
    };
    console.log(values);
    await axios
      .post("http://localhost:4000/api/create-fundraiser", values)
      .then((response) => {
        toast.success("fundraiser created successfully");
        console.log("Response:", response.data);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.error("Error:", error);
      });
  };
  return (
    <div className="hero flex flex-col lg:flex-row items-center justify-center w-full bg-black min-h-screen">
      {/* <div className="hero-content flex-col  lg:flex-row-reverse"> */}
      {/* Left side: Lottie Animation */}
      <div className="w-full lg:w-1/2 bg-black flex items-center justify-center mb-6 lg:mb-0">
        <Lottie
          animationData={createAnimation}
          loop
          className="max-w-xs sm:max-w-sm lg:max-w-md h-[70vh] sm:h-[80vh] lg:h-[100vh]"
        />
      </div>
      <div className="card bg-teal-400 w-full lg:w-1/2 rounded-none py-8">
        <h1 className="text-center pt-10 text-black text-4xl font-bold">
          Create Fundraiser
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          {/* Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="input input-bordered"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter description "
              className="input input-bordered"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* Thumbnail Url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Thumbnail Url</span>
            </label>
            <input
              type="text"
              name="thumbnail"
              placeholder="Enter Url "
              className="input input-bordered"
              required
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>
          {/* Targeted amount */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Targeted Amount</span>
            </label>
            <input
              type="number"
              name="targeted amount"
              placeholder="Enter targeted amount"
              className="input input-bordered"
              required
              onChange={(e) => setTargetedAmount(e.target.value)}
            />
          </div>
          {/* Raised amount */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Raised Amount</span>
            </label>
            <input
              type="number"
              name="raised amount"
              placeholder="Enter raised amount "
              className="input input-bordered"
              required
              onChange={(e) => setRaisedAmount(e.target.value)}
            />
          </div>
          {/* Days left */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Days Left</span>
            </label>
            <input
              type="number"
              name="days left"
              placeholder="Enter days "
              className="input input-bordered"
              required
              onChange={(e) => setDaysLeft(e.target.value)}
            />
          </div>
          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              className="select select-bordered"
              required
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled selected>
                Select a category
              </option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Environment">Environment</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="others">Others</option>
            </select>
          </div>
          {/* Status */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <select
              name="status"
              className="select select-bordered"
              required
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled selected>
                Select status
              </option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-active btn-accent  text-white bg-teal-600 hover:bg-teal-800">
              Create Fundraiser
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};
export default CreateFundraiser;
