import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import sliders from "../../../staticData/slider";
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }} // Link to custom elements
      modules={[Navigation]}
      className="mySwiper"
    >
      {sliders.map((slider) => (
        <SwiperSlide key={slider.id}>
          <div>
            <div className="relative">
              <img
                src={slider.image}
                alt={slider.title}
                className="w-full h-[90vh] object-cover" // Full-width and fixed height
              />
              {/* Shade opacity */}
              <div className="absolute top-0 left-0 bg-gray-400 h-full w-full opacity-40"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-5xl font-bold">{slider.title}</h2>
              <p className="text-xl mt-4">{slider.description}</p>
              <a
                href={slider.buttonLink}
                class=" inline-block mt-6 px-8 py-3  text-xl bg-gradient-to-r from-green-500 to-green-900 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow"
              >
                {slider.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* Custom Navigation Arrows */}
      <div className="custom-prev absolute left-4 top-1/2 mt-2 py-4 px-4 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow  cursor-pointer z-10">
        &#10094;
      </div>
      <div className="custom-next absolute right-4 top-1/2 mt-2 py-4 px-4 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow  cursor-pointer z-10">
        &#10095;
      </div>

      {/* Search bar */}
      <div></div>
    </Swiper>
  );
};

export default Banner;
