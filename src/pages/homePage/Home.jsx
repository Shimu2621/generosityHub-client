import React from "react";
import Banner from "./banner/Banner";
import Advertise from "./advertiseSection/Advertise";
import DonationCard from "./donationCard/DonationCard";
import Video from "./videoSection/Video";
import FundRaiserCard from "./fundRaiser/FundRaiserCard";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Advertise />
      <DonationCard />
      <Video />
      <FundRaiserCard />
      <Testimonials />
    </div>
  );
};

export default Home;
