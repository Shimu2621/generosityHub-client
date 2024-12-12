import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Banner Section */}
      <div className="relative mb-10">
        <img
          src="https://www.graygroupintl.com/hubfs/Gray%20Group%20International/GGI%20-%20Assign%20and%20Sort%20%28WebP%29/Giving%20to%20the%20Poor%20Why%20Ending%20Poverty%20Requires%20More%20Than%20Money.webp"
          className="w-full h-[60vh] md:h-[60vh] object-cover rounded-none shadow-lg"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          {/* text */}
          <h2 className="text-4xl md:text-7xl font-bold mb-4">About Us</h2>
          <p className="md:text-2xl text-sm text-center font-bold px-4">
            We help thousands of children, arrange food & build houses for them
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col pt-36 md:flex-row items-center justify-between mb-16 max-w-[1440px] mx-auto gap-20">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 h-[50vh]">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/036/017/382/small/ai-generated-a-group-of-young-children-sitting-together-photo.jpg"
            alt="Children"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 px-2">
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
        <div className="w-full md:w-1/2 px-2">
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
        <div className="w-full md:w-1/2 h-[50vh]">
          <img
            src="https://goodtimes.ca/wp-content/uploads/2020/01/Giving.jpg"
            alt="Children"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col pt-36 md:flex-row items-center justify-between mb-16 max-w-[1440px] mx-auto gap-20">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 h-[50vh]">
          <img
            src="https://images.gofundme.com/u4fn4ckeIdtjtel1a7FTmGzl1XQ=/1200x800/https://d2g8igdw686xgo.cloudfront.net/40439272_1562386172736418_r.jpeg"
            alt="Children"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 px-2">
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

      {/* Our Volunteer */}
      <div className="max-w-[1440px] mx-auto text-center">
        <div>
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
          <div className="flex flex-col items-center justify-center text-center">
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

          <div className="flex flex-col items-center justify-center text-center">
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

          <div className="flex flex-col items-center justify-center text-center">
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
