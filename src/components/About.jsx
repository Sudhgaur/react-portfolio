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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          deleniti a animi voluptatem veritatis quibusdam sed totam repellat
          aliquam neque possimus consectetur perferendis dignissimos eligendi
          quasi harum repudiandae ullam obcaecati similique nam iste, explicabo
          dolore ad. Eveniet iure at expedita eos aliquam assumenda maiores
          eaque? Vitae expedita minus error hic.
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
