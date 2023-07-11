import React from "react";
import reverb from "../assets/reverb.png";
import reverbone from "../assets/Travel.png";
import reverbtwo from "../assets/BeBrain.png";
import reverbthree from "../assets/Maac.png";
import reverbfour from "../assets/SS Rooms.png";
import reverbfive from "../assets/futuretools.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reverb,
      details:"HTML,CSS,React JS, JavaScript, Bootstrap"
    },
    {
      id: 2,
      src: reverbone,
      details:"HTML,CSS,React JS, JavaScript",
      link:"https://tour-b7f0f.web.app/"
    },
    {
      id: 3,
      src: reverbtwo,
      details:"HTML,CSS,React JS, JavaScript, Bootstrap"
    },
    {
      id: 4,
      src: reverbthree,
      details:"HTML,CSS,React JS, JavaScript, Bootstrap"
    },
    {
      id: 5,
      src: reverbfour,
      details:"HTML,CSS,React JS"
    },
    {
      id: 6,
      src: reverbfive,
      details:"HTML,CSS,React JS"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 render-img">
          {portfolios.map(({ id, src, details='React',link=undefined }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-50 w-100"
              />
              <div className="flex flex-col items-center justify-center p-2 flex-nowrap break-words">
                 <p><b>Technologies Used : </b>{details} </p>

                
                {link ? <button className="mt-2 duration-200 hover:scale-105" onClick={()=>window.open(link,'_blank')}>
                  Live Demo
                </button>:null}
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
