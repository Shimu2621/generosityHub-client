import React from "react";

const Advertise = () => {
  return (
    <section className="bg-slate-900 max-w-[1440px] mt-20 pt-10 mx-auto py-12 px-6">
      <div className="container mx-auto">
        {/* Section Heading */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Welcome to GenerosityHub
          </h2>
          <h3 className="text-2xl md:text-l font-bold pt-2 text-gray-400">
            Why Choose GenerosityHub?
          </h3>
          <div className="mt-6 text-lg font-medium text-gray-600 leading-relaxed">
            <span>We provide secure and seamless donation experiences.</span>
            <br />
            <span>
              From real-time we ensure your generosity makes a real impact.{" "}
            </span>
          </div>
        </div> */}

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg transition">
            <div className="w-28 h-28 flex items-center justify-center rounded-lg mb-4">
              {/* <i className="fas fa-lock text-2xl"></i> */}
              <img
                src={
                  "https://www.fundly.com/content/images/icon_vertical_%20NP.svg"
                }
                alt=""
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
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg transition">
            <div className="w-28 h-28 flex items-center justify-center rounded-full mb-4">
              <img
                src={
                  "https://www.fundly.com/content/images/icon_vertical_%20kids.svg"
                }
                alt=""
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Real-Time Updates
            </h3>
            <div className="text-base text-gray-600 leading-relaxed">
              <span>Track your impact with live updates on every project.</span>
              <br />
              <span>
                You will see exactly how your generosity and simplicity is
                making a differences.
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg transition">
            <div className="w-28 h-28 flex items-center justify-center rounded-full mb-4">
              <img
                src={
                  "https://www.fundly.com/content/images/icon_vertical_%20religious.svg"
                }
                alt=""
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
