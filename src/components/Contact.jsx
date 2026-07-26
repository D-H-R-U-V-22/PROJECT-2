
// File: Contact.jsx
import React from "react";

const Education = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm w-full">
      {/* Header */}
      <div className="text-3xl font-bold text-blue-700 border-b-4 border-blue-200 inline-block mb-6">
        Contact
      </div>

      {/* Education Details */}
      <div className="mt-4 space-y-3 text-gray-800">
        <p>
          <span className="font-bold text-blue-700">
            Email-ID : 
          </span>
            dhruv@123gmail.com
          
        </p>

        <p>
          <span className="font-bold text-blue-700">Contact Number : </span> 7905421755
         
        </p>

        
      </div>
    </div>
  );
};

export default Education;
