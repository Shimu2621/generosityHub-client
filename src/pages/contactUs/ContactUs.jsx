import Lottie from "lottie-react";
import React, { useEffect } from "react";
import contactanimation from "../../../public/contactUs-animation.json";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <div className="relative max-w-full mx-auto" data-aos="fade-in">
        <img
          className="w-full h-[45vh] md:h-[50vh] object-cover shadow-lg"
          src="https://simplycontact.com/wp-content/uploads/2022/09/24_7-customer-support-1024x576.jpeg"
          alt="Contact Us"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          {/* text */}
          <h2
            className="text-4xl md:text-7xl font-bold mb-4"
            data-aos="fade-up"
          >
            Contact Us
          </h2>
          <p
            className="md:text-2xl text-sm text-center font-bold px-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We’d love to hear from you! Whether you have questions, feedback,
            connect with us today!
          </p>
        </div>
      </div>

      {/* Contact page section */}
      <div className="h-auto min-h-screen max-w-full mx-auto  px-4 sm:px-6 lg:px-10">
        <h2
          className="text-center text-3xl sm:text-5xl font-bold pt-10 sm:pt-20 text-gray-700"
          data-aos="fade-up"
        >
          Get in Touch
        </h2>
        <p
          className="text-gray-500 text-sm sm:text-base text-center pb-2 sm:pb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Have a question or feedback? Fill out the form below, and we'll get
          back to you.
        </p>

        {/* Contact page section */}
        <div className="hero">
          <div className="hero-content flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Animation Section */}
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="w-full md:w-[50%] h-[300px] sm:h-[400px] md:h-[600px] mx-auto"
            >
              <Lottie
                className="w-full h-full"
                animationData={contactanimation}
                loop={true}
              />
            </div>

            {/* Form Section */}
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="card bg-teal-900 w-full md:w-[50%] max-w-sm h-auto rounded-none  "
            >
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-400">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-success rounded-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-400">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered input-success rounded-none"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-gray-400">Message</span>
                  </label>
                  <textarea
                    placeholder="Message"
                    className="textarea textarea-bordered input-success rounded-none w-full"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6 pb-10">
                  <button className="w-full px-6 py-3 rounded-none bg-gradient-to-r from-green-500 to-green-900 text-white font-bold  shadow-lg hover:shadow-green-500/50 transition-shadow">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
