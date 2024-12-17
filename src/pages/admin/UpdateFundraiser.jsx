import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Lottie from "lottie-react";
import toast from "react-hot-toast";

// Lottie animation (assuming the file is available)
import donationPage from "../../../public/donationPage.json";

// Validation schema using Yup
const FundraiserSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  thumbnail: Yup.string().url("Invalid URL").required("Thumbnail is required"),
  targetedAmount: Yup.number()
    .required("Targeted Amount is required")
    .positive("Amount must be a positive number"),
  raisedAmount: Yup.number()
    .required("Raised Amount is required")
    .positive("Amount must be a positive number"),
  daysLeft: Yup.string().required("Days Left is required"),
  category: Yup.string()
    .required("Category is required")
    .oneOf(["education", "health", "charity", "others"], "Invalid category"),
});

const UpdateFundraiser = () => {
  const [fundraiser, setFundraiser] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchFundraiser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/fundraisers/${id}`
        );
        setFundraiser(response.data.data);
      } catch (error) {
        console.error("Error fetching fundraisers:", error);
      }
    };
    fetchFundraiser();
  }, [id]);

  if (!fundraiser) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.put(
        `http://localhost:4000/api/fundraisers/${id}`,
        values
      );
      console.log("Fundraiser Updated successfully:", response);
      if (response.data.status === "Success") {
        toast.success("Fundraiser Updated successfully");
        navigate("/admin/all-fundraiser");
      }
    } catch (error) {
      console.log("Error updating Fundraiser:", error);
    }
  };

  const initialValues = {
    title: fundraiser.title || "",
    description: fundraiser.description || "",
    thumbnail: fundraiser.thumbnail || "",
    targetedAmount: fundraiser.targetedAmount || "",
    raisedAmount: fundraiser.raisedAmount || "",
    daysLeft: fundraiser.daysLeft || "",
    category: fundraiser.category || "",
  };

  return (
    <div className="p-4 sm:p-10 bg-black">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-xl mx-auto bg-white p-6 lg:p-14 rounded-lg shadow-lg border border-teal-500">
        {/* Left side: Lottie Animation */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Lottie
            animationData={donationPage}
            loop
            className="max-w-xs sm:max-w-md lg:max-w-lg mx-auto"
          />
        </div>

        {/* Right side: Fundraiser Form */}
        <div className="w-full lg:w-1/2 bg-teal-400 shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Update Fundraiser
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={FundraiserSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
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

                {/* Thumbnail URL */}
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

                {/* Targeted Amount */}
                <div className="form-control">
                  <label
                    htmlFor="targetedAmount"
                    className="label text-gray-700"
                  >
                    Targeted Amount
                  </label>
                  <Field
                    id="targetedAmount"
                    name="targetedAmount"
                    type="number"
                    placeholder="Enter targeted amount"
                    className={`input input-bordered w-full ${
                      errors.targetedAmount && touched.targetedAmount
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="targetedAmount"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Raised Amount */}
                <div className="form-control">
                  <label htmlFor="raisedAmount" className="label text-gray-700">
                    Raised Amount
                  </label>
                  <Field
                    id="raisedAmount"
                    name="raisedAmount"
                    type="number"
                    placeholder="Enter raised amount"
                    className={`input input-bordered w-full ${
                      errors.raisedAmount && touched.raisedAmount
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="raisedAmount"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Days Left */}
                <div className="form-control">
                  <label htmlFor="daysLeft" className="label text-gray-700">
                    Days Left
                  </label>
                  <Field
                    id="daysLeft"
                    name="daysLeft"
                    placeholder="Enter number of days left"
                    className={`input input-bordered w-full ${
                      errors.daysLeft && touched.daysLeft
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="daysLeft"
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

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-active btn-accent w-full text-white bg-teal-600 hover:bg-teal-800"
                >
                  Update Fundraiser
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateFundraiser;
