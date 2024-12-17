import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import testimonials from "../../../staticData/testimonial";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-gray-100 px-6 sm:px-10 md:px-20 lg:px-32 py-10 max-w-[1440px] mx-auto mb-30">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
        Testimonials
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-500 font-bold text-center mb-8">
        What People Are Saying About Us!
      </h2>

      <Marquee gradient={false} speed={50} pauseOnHover={true} direction="left">
        {testimonials.map(({ id, name, photo, quote }) => (
          <div
            key={id}
            className="bg-white shadow-lg p-6 mx-6 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20 object-cover flex flex-col items-center justify-center w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] text-center"
            data-aos="fade-up"
          >
            <img
              src={photo}
              alt={name}
              className="w-24 h-24 mt-10 rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2">{name}</h3>
            <img
              className="w-12 h-12 sm:w-16 sm:h-16 bottom-4 mr-2"
              src="https://st2.depositphotos.com/3554337/11805/i/450/depositphotos_118051308-stock-photo-green-quote-mark-icon.jpg"
              alt="quote mark"
            />
            <p className="text-base sm:text-lg px-2 mb-10 text-gray-500 italic mt-2 flex items-center justify-center">
              "{quote}"
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
