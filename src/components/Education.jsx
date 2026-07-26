// File: Education.jsx
import React from "react";

const Education = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm w-full">
      {/* Header */}
      <div className="text-3xl font-bold text-blue-700 border-b-4 border-blue-200 inline-block mb-6">
        Education
      </div>

      {/* Education Details */}
      <div className="mt-4 space-y-3 text-gray-800">
        <p>
          <span className="font-bold text-blue-700">
            B.Tech in Engineering
          </span>
          , Shri Ramswaroop Memorial College of Engineering and Management,
          <span className="italic text-gray-600"> Currently Pursuing</span>
        </p>

        <p>
          <span className="font-bold text-blue-700">Senior Secondary Education</span>, ST. Aliganj
          Montessori School, Lucknow,
          <span className="italic text-gray-600"> xx%</span>
        </p>

        <p>
          <span className="font-bold text-blue-700"> Secondary Education</span>, ST. Fidelis
          College, Lucknow,
          <span className="italic text-gray-600"> xx%</span>
        </p>
      </div>
    </div>
  );
};

export default Education;
