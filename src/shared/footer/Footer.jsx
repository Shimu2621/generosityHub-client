import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import navlogo from "../../../public/images/navbarlogo/navlogo1.png";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo Section */}
          <div className="pb-8">
            <a
              href="/"
              className="font-bold mb-4 text-3xl text-center underline decoration-gray-500 decoration-2 text-neutral-500"
              style={{ boxShadow: "0 1px 0 0 gray" }}
            >
              Generosity
              <span className="text-green-600 mb-6 text-3xl">Hub</span>
            </a>
          </div>
          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/donation" className="text-gray-400 hover:text-white">
                  Donation
                </a>
              </li>
              <li>
                <a
                  href="/raising-fund"
                  className="text-gray-400 hover:text-white"
                >
                  Raising Fund
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-white"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-white"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-white"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news and campaigns.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full text-gray-800 mb-4 hover:shadow-lg transition-shadow"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-800 text-white font-bold  shadow-lg hover:shadow-green-500/50 transition-shadow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-green-700 pt-4 text-center text-gray-400">
          <p>© 2024 GiveHub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
