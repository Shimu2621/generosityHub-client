import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className=" bg-white pt-20 py-10 max-w-[1450px] h-[110vh] mx-auto">
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-green-700 text-xl font-semibold italic">
          Our Gallery
        </h1>
        <h3 className="text-4xl text-black font-bold pb-2">
          Our Gallery is a collection of impactful moments
        </h3>
        <p className="pb-4 text-gray-500 font-semibold">
          "Our Gallery" showcases a collection of impactful moments captured
          through the lens of generosity and compassion. Each <br /> image tells
          a unique story about through acts of kindness.
        </p>
      </div>
      <div className="gallery-container mx-auto grid max-w-[1470px] h-[100vh] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-y-auto">
        <div>
          <img
            src="https://regenbrampton.com/wp-content/uploads/2022/12/How-to-Help-a-Homeless-Family-Member-Hero-1024x672.jpeg"
            alt=""
            className="w-full h-[30vh] object-cover rounded-sm"
            data-aos="fade-right"
          />
          <img
            src="https://img.freepik.com/free-photo/women-girl-power-feminism-equal-opportunity-concept_53876-121188.jpg"
            alt=""
            className="w-full h-[52vh] py-4 object-cover rounded-sm"
            data-aos="fade-left"
          />
        </div>
        <div>
          <img
            src="https://www.shutterstock.com/image-photo/happy-grandmother-her-granddaughter-working-600nw-583503205.jpg"
            alt=""
            className="w-full h-[50vh] pb-4 object-cover rounded-sm"
            data-aos="zoom-in"
          />
          <img
            src="https://www.shutterstock.com/image-photo/young-volunteers-children-box-donations-600nw-723675208.jpg"
            alt=""
            className="w-full h-[30vh] object-cover rounded-sm"
            data-aos="zoom-out"
          />
        </div>
        <div>
          <img
            src="https://pupford.b-cdn.net/assets%2Fblog%2Fthelife-savingeffortsofdogrescueorganizations%2F1711995835255-two%20dogs%20and%20a%20woman%20smiling%20outside.jpg?alt=media&token=3d6438c8-87cc-4690-8b84-14c25f5bed79"
            alt=""
            className="w-full h-[41vh] pb-4 object-cover rounded-sm"
            data-aos="fade-down-right"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/62afe4476590b42f61595a76/b189b9d3-e679-4afb-8e6c-a499dc8d0550/decorative-image-friends-eating-cupcakes.jpg"
            alt=""
            className="w-full h-[39vh] object-cover rounded-sm"
            data-aos="fade-down-left"
          />
        </div>
        <div>
          <img
            src="https://taralazar.com/wp-content/uploads/2016/09/girl-with-rif-book.png?w=584&h=324"
            alt=""
            className="w-full h-[45vh] pb-4 object-cover rounded-sm"
            data-aos="fade-down-right"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTha8JhCZ_llwNq-yzZWvLifLWRI_PSmLB5jhoLdxSwA1hvkfpMLkIwPNeD3qPw324H3j0&usqp=CAU"
            alt=""
            className="w-full h-[35vh] object-cover rounded-sm"
            data-aos="fade-down-left"
          />
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
