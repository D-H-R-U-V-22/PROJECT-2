import React from "react";

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-10 px-6">
      <div className="max-w-4xl text-left items-start">
        {/* Header */}
        <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-blue-200 inline-block mb-6">
          About Me
        </h2>

        {/* Content */}
        <p className="text-lg leading-relaxed">
          I am a dedicated web developer specializing in{" "}
          <span className="font-semibold text-blue-600">Node.js</span>,{" "}
          <span className="font-semibold text-blue-600">React</span>, and{" "}
          <span className="font-semibold text-blue-600">Tailwind CSS</span>.
          My passion lies in building fast, responsive, and visually appealing
          web applications that deliver seamless user experiences. I enjoy
          transforming ideas into functional digital solutions through clean
          code and modern design principles. Always eager to explore new
          technologies and take on creative challenges that push my skills
          further.
        </p>
      </div>
    </section>
  );
};

export default About;
