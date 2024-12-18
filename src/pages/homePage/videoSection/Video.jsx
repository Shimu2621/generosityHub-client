import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Video = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, offset: 50 });
  }, []);
  return (
    <div className=" mx-auto max-w-[1440px] h-[95vh] justify-center ">
      {/* Banner Section */}
      <div className=" relative">
        <img
          className="w-full h-[50vh] sm:h-[50vh] lg:h-[70vh] object-cover"
          src={
            "https://t3.ftcdn.net/jpg/07/41/91/64/360_F_741916432_u5JJjFjCRN7uO0nlmazKIuRrw13Hs3RZ.jpg"
          }
          alt="Background"
        />
        {/* Opacity */}
        <div className="absolute top-0 left-0 bg-gray-500 h-[70vh] w-full opacity-40"></div>

        {/* text */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="mt-10 text-lg sm:text-xl  lg:text-5xl  font-bold">
            Why Choose Us?
          </h2>
          <p className=" text-white mt-6 text-lg sm:text-xl lg:text-2xl font-normal">
            Discover how our platform is transforming lives with transparent,
            impactful, and easy-to-use donation tools.
          </p>
        </div>
        {/* Video image */}
        <div className="absolute rounded-sm  top-4/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1120px] w-full  bg-white flex justify-center items-center p-8">
          <iframe
            className="w-full max-w-[1100px] h-[40vh] rounded-sm"
            src="https://www.youtube.com/embed/ElG5-nXD0B8?si=oMa3A6t4Lbtb2PqW"
            title="YouTube video player"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* <iframe
            className="w-full max-w-[1100px] h-[40vh] object-cover"
            src="https://www.youtube.com/embed/bfAzi6D5FpM?si=VPqOQzTdZygLOCHi"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Video;
