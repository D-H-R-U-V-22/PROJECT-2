import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaComments } from "react-icons/fa";
import profilePic from"../assets/profile pic.png";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-10">
      <div className="max-w-5xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start">
        
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Dhruv Saxena"
          className="w-32 h-32 rounded-lg object-cover mb-4 md:mb-0 md:mr-8"
        />

        {/* Info Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-900">Dhruv Saxena</h1>
          <h2 className="text-lg font-semibold text-blue-600 mb-4">
            Web Developer & Designer
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-3 mb-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800 transition">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="bg-gray-400 text-white p-2 rounded hover:bg-gray-600 transition">
              <FaComments size={20} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2">
              <span className="text-blue-700">📧</span> dhruv123@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-700">🌐</span> www.johndoeportfolio.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
