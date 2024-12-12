import React from "react";
import Lottie from "lottie-react";
import welcomeAnimation from "../../../public/welcome.json";

const AdminHome = () => {
  return (
    <div className="relative">
      <Lottie
        className=" h-[60vh] w-[60vw] mb-10"
        animationData={welcomeAnimation}
        loop={true}
      />
      <h1 className="absolute whitespace-nowrap underline text-teal-400 font-bold text-4xl text-center w-full">
        To Our Admin Dashboard
      </h1>
    </div>
  );
};

export default AdminHome;
