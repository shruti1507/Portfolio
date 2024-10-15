import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-black py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Shruti</h3>
            <p className="text-gray-700">
              Front-End Developer
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg  border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Shruti. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-600 hover:text-black">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
