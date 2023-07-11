import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black  text-white h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mx-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-15">
          To kickstart my career as a front-end developer, I aim to leverage my
          technical skills in HTML, CSS, JavaScript and React JS to develop
          visually appealing and user-friendly websites. By collaborating with
          experienced professionals, I intend to contribute to innovative
          projects and gain practical experience in delivering high-quality
          front-end solutions.
        </p>
        <br />
        <p className="text-xl ">
          I recently completed my studies in computer science, where I acquired
          a strong foundation in front-end technologies such as HTML, CSS, and
          JavaScript. Through coursework and practical projects, I honed my
          skills in crafting well-structured web pages, implementing attractive
          designs, and adding interactivity to enhance user experiences.
        </p>
        <br />
        <p className="text-xl ">
          I am proficient in responsive design principles, which enables me to
          build websites that adapt seamlessly to different screen sizes and
          devices. I understand the importance of delivering a consistent
          experience to users, regardless of whether they are accessing the
          website from a desktop, tablet, or mobile phone.
          <br />
          In addition to technical skills, I possess strong communication and
          teamwork abilities. I believe effective collaboration is essential to
          create successful web projects. I actively listen to others'
          perspectives, share ideas openly, and work collaboratively to achieve
          project goals. I value constructive feedback and continuously seek
          opportunities to learn and grow.
        </p>
      </div>
    </div>
  );
};

export default About;
