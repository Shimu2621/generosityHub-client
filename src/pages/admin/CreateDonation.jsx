import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Lottie from "lottie-react";
import createAnimation from "../../../public/create-animation.json";
import axios from "axios";
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

const CreateDonation = () => {
  const handleSubmit = (values) => {
    axios
      .post("http://localhost:4000/api/create-donation", values)
      .then((response) => {
        toast.success("Donation created successfully");
        console.log("Response:", response.data);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen w-full bg-black">
      {/* Left side: Lottie Animation */}
      <div className="w-full lg:w-1/2 bg-black flex items-center justify-center mb-6 lg:mb-0">
        <Lottie
          animationData={createAnimation}
          loop
          className="max-w-xs sm:max-w-sm lg:max-w-md h-[70vh] sm:h-[80vh] lg:h-[100vh]"
        />
      </div>

      {/* Right side: Donation Form */}
      <div className="w-full lg:w-1/2 bg-teal-400 shadow-lg p-6 sm:p-32">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Donation
        </h2>
        <Formik
          initialValues={{
            title: "",
            description: "",
            thumbnail: "",
            amount: "",
            category: "",
          }}
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
                    errors.category && touched.category ? "border-red-500" : ""
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

              <div className="form-control pt-8">
                <button
                  type="submit"
                  className="btn btn-active btn-accent  text-white bg-teal-600 hover:bg-teal-800"
                >
                  Create Donation
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateDonation;
