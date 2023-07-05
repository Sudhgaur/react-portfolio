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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          facere eos debitis distinctio commodi laudantium hic voluptates alias
          voluptatibus beatae vel dolore fugit, fugiat modi nesciunt dicta
          assumenda laborum ipsa? Ipsam sequi quo dolorum nemo nam incidunt,
          consequuntur eos nihil excepturi expedita! Molestias nam ex vel odit
          optio maiores incidunt voluptatibus? Enim perferendis consequatur vel
          natus aperiam sunt, eveniet nemo. Vel, veniam dolores doloremque
          asperiores repudiandae laudantium accusamus eveniet omnis!
        </p>
      </div>
    </div>
  );
};

export default About;
