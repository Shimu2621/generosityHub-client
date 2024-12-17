import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Banner Section */}
      <div className="relative mb-10" data-aos="fade-in">
        <img
          src="https://www.graygroupintl.com/hubfs/Gray%20Group%20International/GGI%20-%20Assign%20and%20Sort%20%28WebP%29/Giving%20to%20the%20Poor%20Why%20Ending%20Poverty%20Requires%20More%20Than%20Money.webp"
          className="w-full h-[60vh] md:h-[60vh] object-cover rounded-none shadow-lg"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white"
          data-aos="zoom-in"
        >
          {/* text */}
          <h2 className="text-4xl md:text-7xl font-bold mb-4">About Us</h2>
          <p className="md:text-2xl text-sm text-center font-bold px-4">
            We help thousands of children, arrange food & build houses for them
          </p>
        </div>
      </div>

      {/* About us Section */}
      <div className="flex flex-col pt-36 md:flex-row items-center justify-between mb-16 max-w-[1440px] mx-auto gap-20">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 h-[50vh]" data-aos="fade-right">
          <div>
            <img
              className="relative w-[90%] h-[60vh] object-cover "
              src="https://t4.ftcdn.net/jpg/06/64/06/69/240_F_664066965_PhSUsDO2WMn5duCp389P3yLRQIXc6MQQ.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/036/017/382/small/ai-generated-a-group-of-young-children-sitting-together-photo.jpg"
              alt="Children"
              className="absolute top-1/2 left-1/3 bg-white p-4 w-[65%] h-[86%] object-cover "
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 px-2 pt-20" data-aos="fade-left">
          <h4 className="text-xl italic text-green-700 font-semibold mb-4">
            About Us
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Please Raise Your Helping Hand
          </h1>
          <p className="text-lg text-gray-600">
            We are a platform dedicated to revolutionizing the way people
            donate. By providing a seamless, trustworthy, and transparent
            experience, we enable individuals to support causes they care about,
            making a difference in the world one donation at a time. Our goal is
            to create a global community of donors, united by the desire to
            improve lives and transform communities. Our goal is to create a
            global community of donors, united by the desire to improve lives
            and transform communities.
          </p>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="flex flex-col pt-32 md:flex-row items-center justify-between mb-16 max-w-[1440px] mx-auto gap-20">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 pt-24 px-2" data-aos="fade-right">
          <h4 className="text-xl italic text-green-700 font-semibold mb-4">
            Our Vision
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our vision is to create a world where every donation drives real
            change
          </h1>
          <p className="text-lg text-gray-600">
            We envision a world where giving is easy, impactful, and
            transparent. Our goal is to create a global community of donors,
            united by the desire to improve lives and transform communities. By
            providing a seamless, trustworthy, and transparent experience, we
            enable individuals to support causes they care about, making a
            difference in the world one donation at a time.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 h-[50vh]" data-aos="fade-left">
          <div>
            <img
              className="relative w-[90%] h-[60vh] m-4"
              src="https://t4.ftcdn.net/jpg/01/35/10/01/240_F_135100113_fJWtTuRplN3HZHwfjF1SoNbnLYIobF66.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/07/59/50/01/240_F_759500108_nPlkOkW7wdvyi8sCRLiGn3eD8UDAnur0.jpg"
              alt="Children"
              className="absolute  top-1/2 right-1/3 mr-4 bg-white p-4 w-[68%] h-[86%] object-cover "
            />
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col pt-36 md:flex-row items-center justify-between mb-24 max-w-[1440px] mx-auto gap-20">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 h-[50vh]" data-aos="fade-right">
          <div>
            <img
              className="relative w-[90%] h-[56vh] object-cover "
              src="https://t4.ftcdn.net/jpg/07/54/39/85/240_F_754398595_gVxgqRu0BTUj81yKkUhuOFsFvCm8Ccvo.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.gofundme.com/u4fn4ckeIdtjtel1a7FTmGzl1XQ=/1200x800/https://d2g8igdw686xgo.cloudfront.net/40439272_1562386172736418_r.jpeg"
              alt="Children"
              className="absolute top-1/2 left-1/3 bg-white p-4 w-[65%] h-[84%] object-cover "
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 px-2 pt-24" data-aos="fade-left">
          <h4 className="text-xl italic text-green-700 font-semibold mb-4">
            Our Mission
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our mission is to make giving back easier and more impactful
          </h1>
          <p className="text-lg text-gray-600">
            Our mission is to empower individuals to make a meaningful impact
            through secure, transparent, and accessible donations. We strive to
            connect generous hearts with worthy causes, ensuring every
            contribution drives positive change. We envision a world where
            giving is easy, impactful, and transparent. Our goal is to create a
            global community of donors, united by the desire to improve lives
            and transform communities.
          </p>
        </div>
      </div>

      {/* Our Gallery */}
      <div
        className=" bg-white pt-20 py-10 max-w-[1440px] h-[110vh] mx-auto"
        data-aos="zoom-in"
      >
        <div className="text-center">
          <h1 className="text-green-700 text-xl font-semibold italic">
            Our Gallery
          </h1>
          <h3 className="text-4xl text-black font-bold pb-2">
            Our Gallery is a collection of impactful moments
          </h3>
          <p className="pb-4 text-gray-500 font-semibold">
            "Our Gallery" showcases a collection of impactful moments captured
            through the lens of generosity and compassion. Each <br /> image
            tells a unique story about through acts of kindness.
          </p>
        </div>
        <div className="gallery-container mx-auto grid max-w-[1470px] h-[100vh] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4  overflow-y-auto">
          <div>
            <img
              src="https://regenbrampton.com/wp-content/uploads/2022/12/How-to-Help-a-Homeless-Family-Member-Hero-1024x672.jpeg"
              alt=""
              className="w-full h-[30vh] object-cover "
            />
            <img
              src="https://img.freepik.com/free-photo/women-girl-power-feminism-equal-opportunity-concept_53876-121188.jpg"
              alt=""
              className="w-full h-[52vh] py-4 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://www.shutterstock.com/image-photo/happy-grandmother-her-granddaughter-working-600nw-583503205.jpg"
              alt=""
              className="w-full h-[50vh] pb-4 object-cover "
            />
            <img
              src="https://www.shutterstock.com/image-photo/young-volunteers-children-box-donations-600nw-723675208.jpg"
              alt=""
              className="w-full h-[30vh]  object-cover"
            />
          </div>
          <div>
            <img
              src="https://pupford.b-cdn.net/assets%2Fblog%2Fthelife-savingeffortsofdogrescueorganizations%2F1711995835255-two%20dogs%20and%20a%20woman%20smiling%20outside.jpg?alt=media&token=3d6438c8-87cc-4690-8b84-14c25f5bed79"
              alt=""
              className="w-full h-[41vh] pb-4 object-cover "
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/62afe4476590b42f61595a76/b189b9d3-e679-4afb-8e6c-a499dc8d0550/decorative-image-friends-eating-cupcakes.jpg"
              alt=""
              className="w-full h-[39vh]  object-cover "
            />
          </div>
          <div>
            <img
              src="https://taralazar.com/wp-content/uploads/2016/09/girl-with-rif-book.png?w=584&h=324"
              alt=""
              className="w-full h-[45vh] pb-4 object-cover "
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTha8JhCZ_llwNq-yzZWvLifLWRI_PSmLB5jhoLdxSwA1hvkfpMLkIwPNeD3qPw324H3j0&usqp=CAU"
              alt=""
              className="w-full h-[35vh] object-cover "
            />
          </div>
        </div>
      </div>

      {/* Our Volunteer */}
      <div className="max-w-[1440px] mx-auto text-center">
        <div data-aos="fade-left">
          <p className="italic text-xl pt-10 mb-2 text-green-700 font-semibold">
            Our Strength
          </p>
          <h1 className="text-4xl font-bold">Meet Our Volunteers Team</h1>
          <p className="text-gray-500 pt-2 mb-10">
            Orphan children are at high risk of severe malnutrition & no
            education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto px-10 gap-6 mb-20">
          <div
            className="flex flex-col items-center justify-center text-center"
            data-aos="fade-right"
          >
            <img
              className="w-80 h-[45vh] object-cover"
              src="https://themepresss.com/tf/html/sadakat-live/assets/images/team/team-1.jpg"
              alt=""
            />
            <h3 className="pt-4 text-lg italic text-green-700 font-semibold">
              CEO & Founder
            </h3>
            <p className="font-bold text-xl">Davine Robertson</p>
          </div>

          <div
            className="flex flex-col items-center justify-center text-center"
            data-aos="zoom-in"
          >
            <img
              className="w-80 h-[45vh] object-cover"
              src="https://themepresss.com/tf/html/sadakat-live/assets/images/team/team-3.jpg"
              alt=""
            />
            <h3 className="pt-4 text-lg italic text-green-700 font-semibold">
              Volunteer
            </h3>
            <p className="font-bold text-xl">Jean Eashington</p>
          </div>

          <div
            className="flex flex-col items-center justify-center text-center"
            data-aos="fade-left"
          >
            <img
              className="w-80 h-[45vh] object-cover"
              src="https://themepresss.com/tf/html/sadakat-live/assets/images/team/team-2.jpg"
              alt=""
            />
            <h3 className="pt-4 text-lg italic text-green-700 font-semibold">
              Volunteer
            </h3>
            <p className="font-bold text-xl">Liam Irvines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
