import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import sliders from "../../../staticData/slider";
import { Navigation } from "swiper/modules";

// AOS animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 }); // Initialize AOS
  }, []);
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
                className="w-full h-[80vh] md:h-[90vh] object-cover" // Full-width and fixed height
                data-aos="fade-in"
              />
              {/* Shade opacity */}
              <div className="absolute top-0 left-0 bg-gray-400 h-full w-full opacity-40"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2
                className=" text-3xl md:text-5xl font-bold"
                data-aos="zoom-in"
              >
                {slider.title}
              </h2>
              <p className="text-lg md:text-xl mt-4" data-aos="zoom-in">
                {slider.description}
              </p>
              <a
                href={slider.buttonLink}
                class=" inline-block mt-6 px-8 py-3  text-lg md:text-xl bg-gradient-to-r from-green-500 to-green-900 text-white font-bold rounded-lg  shadow-lg hover:shadow-green-500/50 transition-shadow"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {slider.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* Custom Navigation Arrows */}
      <div
        className="custom-prev absolute left-4 top-1/2 mt-2 py-4 px-4 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow  cursor-pointer z-10"
        data-aos="fade-right"
      >
        &#10094;
      </div>
      <div
        className="custom-next absolute right-4 top-1/2 mt-2 py-4 px-4 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-900 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow  cursor-pointer z-10"
        data-aos="fade-left"
      >
        &#10095;
      </div>

      {/* Search bar */}
      <div></div>
    </Swiper>
  );
};

export default Banner;
