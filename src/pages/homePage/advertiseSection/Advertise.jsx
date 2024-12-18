import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Advertise = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <section className="bg-slate-900 max-w-[1440px] mt-20 pt-10 mx-auto py-12 px-6 rounded-sm">
      <div className="container mx-auto rounded-sm">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="flex flex-col items-center text-center p-6 rounded-sm bg-white shadow-md hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <div className="w-28 h-28 flex items-center justify-center rounded-lg mb-4">
              <img
                src="https://www.fundly.com/content/images/icon_vertical_%20NP.svg"
                alt="Secure Transactions"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Secure Transactions
            </h3>
            <div className="text-base text-gray-600 leading-relaxed">
              <span>Your donations are processed with industry security.</span>
              <br />
              <span>Stay confident knowing your details are safe with us.</span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg transition rounded-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-28 h-28 flex items-center justify-center rounded-full mb-4">
              <img
                src="https://www.fundly.com/content/images/icon_vertical_%20kids.svg"
                alt="Real-Time Updates"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Real-Time Updates
            </h3>
            <div className="text-base text-gray-600 leading-relaxed">
              <span>Track your impact with live updates on every project.</span>
              <br />
              <span>
                See exactly how your generosity is making a difference.
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col items-center text-center p-6 rounded-sm bg-white shadow-md hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-28 h-28 flex items-center justify-center rounded-full mb-4">
              <img
                src="https://www.fundly.com/content/images/icon_vertical_%20religious.svg"
                alt="Complete Transparency"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Complete Transparency
            </h3>
            <div className="text-base text-gray-600 leading-relaxed">
              <span>Every penny you donate is accounted for.</span>
              <br />
              <span>
                We value transparency, keeping you informed at all steps.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
