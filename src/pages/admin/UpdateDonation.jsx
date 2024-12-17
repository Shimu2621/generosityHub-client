import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import donationPage from "../../../public/donationPage.json";
import Lottie from "lottie-react";
import toast from "react-hot-toast";

// Validation schema using Yup
const DonationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  thumbnail: Yup.string().url("Invalid URL").required("Thumbnail is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be a positive number"),
  category: Yup.string()
    .required("Category is required")
    .oneOf(["education", "health", "charity", "others"], "Invalid category"),
});

const UpdateDonation = () => {
  const [donation, setDonation] = useState();
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/donations/${id}`
        );
        console.log("response here:", response);
        setDonation(response.data.data);
      } catch (error) {
        console.error("Error fetching donation:", error);
      }
    };
    fetchDonation();
  }, [id]);

  if (!donation) {
    return <div>Loading...</div>;
  }
  console.log("Donation:", donation);

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.put(
        `http://localhost:4000/api/donations/${id}`,
        values
      );
      console.log("Donation Updated successfully:", response);
      if (response.data.status === "Success") {
        toast.success("Donation Updated successfully");
        navigate("/admin/all-donation");
      }
    } catch (error) {
      console.log("Error updating donation:", error);
    }
  };

  // Define initialValues based on the fetched donation data
  const initialValues = {
    title: donation?.title || "",
    description: donation?.description || "",
    thumbnail: donation?.thumbnail || "",
    amount: donation?.amount || "",
    category: donation?.category || "",
  };

  return (
    <div className="p-14 bg-black">
      {/* <h1 className="text-white text-3xl font-bold text-center mb-8">
        Update Donation
      </h1> */}

      <div className="h-[100vh]  lg:h-[90vh] w-[65%] mx-auto bg-white border-spacing-10 border border-teal-500 flex flex-col lg:flex-row items-center justify-center">
        {/* Left side: Lottie Animation */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <Lottie
            animationData={donationPage}
            loop
            className="max-w-sm mx-auto h-[93vh] lg:max-w-lg"
          />
        </div>

        {/* Right side: Donation Form */}
        <div className="w-full lg:w-1/2 h-[90vh] bg-teal-400 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Update Donation
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={DonationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                {/* Title */}
                <div className="form-control">
                  <label htmlFor="title" className="label text-gray-700">
                    Title
                  </label>
                  <Field
                    id="title"
                    name="title"
                    placeholder="Enter title"
                    className={`input input-bordered w-full ${
                      errors.title && touched.title ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="title"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Description */}
                <div className="form-control">
                  <label htmlFor="description" className="label text-gray-700">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    placeholder="Enter description"
                    className={`textarea textarea-bordered w-full ${
                      errors.description && touched.description
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="description"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Thumbnail */}
                <div className="form-control">
                  <label htmlFor="thumbnail" className="label text-gray-700">
                    Thumbnail URL
                  </label>
                  <Field
                    id="thumbnail"
                    name="thumbnail"
                    placeholder="Enter thumbnail URL"
                    className={`input input-bordered w-full ${
                      errors.thumbnail && touched.thumbnail
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="thumbnail"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Amount */}
                <div className="form-control">
                  <label htmlFor="amount" className="label text-gray-700">
                    Amount
                  </label>
                  <Field
                    id="amount"
                    name="amount"
                    type="number"
                    placeholder="Enter donation amount"
                    className={`input input-bordered w-full ${
                      errors.amount && touched.amount ? "border-red-500" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="amount"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Category */}
                <div className="form-control">
                  <label htmlFor="category" className="label text-gray-700">
                    Category
                  </label>
                  <Field
                    as="select"
                    id="category"
                    name="category"
                    className={`select select-bordered w-full ${
                      errors.category && touched.category
                        ? "border-red-500"
                        : ""
                    }`}
                  >
                    <option value="">Select Category</option>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="charity">Charity</option>
                    <option value="others">Others</option>
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-active btn-accent w-full text-white bg-teal-600 hover:bg-teal-800"
                >
                  Update Donation
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateDonation;
