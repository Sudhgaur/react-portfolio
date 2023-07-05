import React from "react";
// import cartoon from '../assets/cartoon.png';
import DLNEW from "../assets/DLNEW.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex
        flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            Hi I Am,
            <br /> Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            To kickstart my career as a front-end developer, I aim to leverage
            my technical skills in HTML, CSS, JavaScript and React JS to develop
            visually appealing and user-friendly websites. By collaborating with
            experienced professionals, I intend to contribute to innovative
            projects and gain practical experience in delivering high-quality
            front-end solutions.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500  to-cyan-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={DLNEW}
            alt="my profile"
            className="rounded-10xl px-2 mx-auto w-2/3 ml-3 invisible md:visible"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
