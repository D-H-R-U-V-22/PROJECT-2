import React from "react"; 

// 1. Update the data array to use the font class strings
const skills = [
  { name: "HTML", iconClass: "devicon-html5-plain colored" },
  { name: "CSS", iconClass: "devicon-css3-plain colored" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
  { name: "React", iconClass: "devicon-react-original colored" },
  { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  { name: "Python", iconClass: "devicon-python-plain colored" },
  { name: "C", iconClass: "devicon-c-plain colored" },
  { name: "Java", iconClass: "devicon-java-plain colored" },
];

const Skills = () => {
  return (
    <section className="bg-white py-10">
      {/* Header */}
      <div className=" text-white px-6 py-2 rounded-t-md w-fit  mb-6">
        <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-blue-200 inline-block mb-6">Skills</h2>
      </div>

      {/* Skill Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* 2. Swapped <img> for <i> tag with text-5xl for sizing */}
            <i className={`${skill.iconClass} text-5xl mb-2`}></i>
            <p className="text-gray-700 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
