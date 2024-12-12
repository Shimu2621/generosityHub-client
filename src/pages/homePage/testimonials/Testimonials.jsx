import React from "react";
import Marquee from "react-fast-marquee";
import testimonials from "../../../staticData/testimonial";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 px-32 py-10 max-w-[1440px] mx-auto mb-30">
      <h1 className="text-4xl font-bold text-center mb-2">Testimonials</h1>
      <h2 className="text-2xl text-gray-500 font-bold text-center mb-8">
        What People Are Saying About Us!
      </h2>

      <Marquee gradient={false} speed={50} pauseOnHover={true} direction="left">
        {testimonials.map(({ id, name, photo, quote }) => (
          <div
            key={id}
            className="bg-white shadow-lg p-3 mx-10 object-cover flex flex-col items-center justify-center w-[600px] text-center"
          >
            <img
              src={photo}
              alt={name}
              className="w-24 h-24 mt-10 rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <img
              className="w-24 h-24 bottom-4 mr-2"
              src="https://st2.depositphotos.com/3554337/11805/i/450/depositphotos_118051308-stock-photo-green-quote-mark-icon.jpg"
              alt="quote mark"
            />
            <p className="text-lg px-2 mb-10 text-gray-500 italic mt-2 flex items-center justify-center">
              "{quote}"
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
