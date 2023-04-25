import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            I am a web developer with a vast array of knowledge in front-end,
            responsive frameworks, databases, and best code practices. I am
            dedicated to perfecting my craft by learning from more seasoned
            developers, remaining humble, and continue making strides to learn
            all that I can about development.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            A software developer who specializes in building web applications
            using React, a popular JavaScript library for building user
            interfaces. React is maintained by Facebook and has gained immense
            popularity over the years due to its ability to create highly
            responsive and dynamic UIs.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            I am responsible for designing, building, and maintaining web
            applications using React. They must have a strong understanding of
            JavaScript, HTML, and CSS, as well as experience with popular React
            frameworks such as Redux and React Native. They should also be
            familiar with front-end development tools and workflows, such as
            version control systems like Git and package managers like npm.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
