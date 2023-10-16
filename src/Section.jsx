import React, { useState } from "react";
import Reactsvg from "./assets/Reactsvg";
import Nodejs from "./assets/Nodejs";
import Tailwind from "./assets/Tailwind";
import Spring from "./assets/Spring";
import Html from "./assets/Html";
import Css from "./assets/Css";
import Git from "./assets/Git";
import Java from "./assets/Java";
import Mysql from "./assets/Mysql";
import Npm from "./assets/Npm";
import GitHubSection from "./assets/GitHubSection";
import Javascript from "./assets/Javascript";
import Project from "./Project";
import Technology from "./Technology";
import MockupSnake from './img/MockupSnake.webp'
import MockupPortfolio from './img/MockupPortfolio.webp'

function Section(){

    const [iconStates, setIconStates] = useState({
        react: false,
        nodejs: false,
        tailwind: false,
        spring: false,
        Html: false,
        Css: false,
        Git: false,
        Java: false,
        Mysql: false,
        Npm: false,
        Githubsection: false,
        Javascript: false,
      });
    
      const handleMouseEnter = (iconName) => {
        setIconStates((prevState) => ({
          ...prevState,
          [iconName]: true,
        }));
      };
    
      const handleMouseLeave = (iconName) => {
        setIconStates((prevState) => ({
          ...prevState,
          [iconName]: false,
        }));
      };
    
    return (
        <section className="max-md:gap-12 max-md:flex max-md:flex-col max-md:w-12/12 max-md:h-12/12">
            <article className="mx-auto p-16 flex gap-12 max-md:flex-col max-md:w-12/12 max-md:m-0 max-md:p-0">
                <div className=" w-1/4 flex justify-end max-md:justify-normal"><p className="uppercase text-xl font-extrabold text-blue-500 tracking-widest">Background</p></div>
                <div className="gap-4  w-3/4 flex flex-col max-md:m-0 max-md:w-full">
                <p className="text-lg text-left max-md:text-sm">
                  I have recently graduated in <span className="font-bold">Design and development of web applications</span> . Next year I will study computer engineering at the UCAM (Universidad Católica de Murcia)</p>
                <p className="text-lg text-left max-md:text-sm">As a developer I am dedicated to the design and engineering of the project. My goal is always to create a dynamic, responsive and beautiful project.
                </p>
                <p className="text-lg text-left"><span className="font-bold">In time I dedicate to myself</span> I like to play sports, travel, listen to music and take photographs </p>
            </div>
            </article>
            <article className="mx-auto p-16 flex gap-12 max-md:flex-col max-md:p-0 max-md:w-3/3  max-md:m-0">
                <div className="w-1/4 flex justify-end max-md:justify-normal"><p className="uppercase text-xl font-extrabold text-blue-500 tracking-widest">skills</p></div>
                <div className="w-3/4 grid grid-cols-4 max-sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-12 mx-auto max-md:mx-0 justify-center place-items-center max-md:w-full">
                    <Reactsvg className="hover:cursor-pointer " width="60" height="60" color="#3B82F6" colorDefault="#ababab  "/>
                    <Nodejs  className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.Nodejs ? "#3B82F6" : "#ababab   "} stroke={iconStates.Nodejs ? "#3B82F6" : "#ababab  "} onMouseEnter={() => handleMouseEnter("Nodejs")} onMouseLeave={() => handleMouseLeave("Nodejs")}/>
                    <Tailwind  className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.tailwind ? "#3B82F6" : "#ababab   "} stroke={iconStates.tailwind ? "#3B82F6" : "#ababab  "} onMouseEnter={() => handleMouseEnter("tailwind")} onMouseLeave={() => handleMouseLeave("tailwind")}/>
                    <Spring className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.spring ? "#3B82F6" : "#ababab   "} stroke={iconStates.spring ? "#3B82F6" : "#ababab    "} onMouseEnter={() => handleMouseEnter("spring")} onMouseLeave={() => handleMouseLeave("spring")} />
                    <Html  className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.Html ? "#3B82F6" : "#ababab   "} stroke={iconStates.Html ? "#3B82F6" : "#ababab  "} onMouseEnter={() => handleMouseEnter("Html")} onMouseLeave={() => handleMouseLeave("Html")}/>
                    <Css  className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.Css ? "#3B82F6" : "#ababab "} stroke={iconStates.Css ? "#3B82F6" : "#ababab "} onMouseEnter={() => handleMouseEnter("Css")} onMouseLeave={() => handleMouseLeave("Css")}/>
                    <Git  className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.Git ? "#3B82F6" : "#ababab "} stroke={iconStates.Git ? "#3B82F6" : "#ababab "} onMouseEnter={() => handleMouseEnter("Git")} onMouseLeave={() => handleMouseLeave("Git")}/>
                    <Java className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.Java ? "#3B82F6" : "#ababab   "} stroke={iconStates.Java ? "#3B82F6" : "#ababab  "} onMouseEnter={() => handleMouseEnter("Java")} onMouseLeave={() => handleMouseLeave("Java")}/>
                    <Mysql className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.Mysql ? "#3B82F6" : "#ababab "} stroke={iconStates.Mysql ? "#3B82F6" : "#ababab   "} onMouseEnter={() => handleMouseEnter("Mysql")} onMouseLeave={() => handleMouseLeave("Mysql")}/>
                    <Npm className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.Npm ? "#3B82F6" : "#ababab "} stroke={iconStates.Npm ? "#3B82F6" : "#ababab "} onMouseEnter={() => handleMouseEnter("Npm")} onMouseLeave={() => handleMouseLeave("Npm")}/>
                    <GitHubSection className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.Githubsection ? "#3B82F6" : "#ababab"} stroke={iconStates.Githubsection ? "#3B82F6" : "#ababab"} onMouseEnter={() => handleMouseEnter("Githubsection")} onMouseLeave={() => handleMouseLeave("Githubsection")}/>
                    <Javascript className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width="60" height="60" fill={iconStates.Javascript ? "#3B82F6" : "#ababab   "} stroke={iconStates.Javascript ? "#3B82F6" : "#ababab    "} onMouseEnter={() => handleMouseEnter("Javascript")} onMouseLeave={() => handleMouseLeave("Javascript")}/>
                </div>
            </article>
            <article className="mx-auto p-16 flex gap-12 max-md:flex-col max-md:p-0 max-md:h-2/2  max-md:w-full">
                <div className="w-1/4 flex justify-end max-md:justify-normal"><p className="uppercase text-xl font-extrabold text-blue-500 tracking-widest">Projects</p></div>
                <div className="gap-6 w-3/4 flex flex-col max-md:w-full">
                <div className="flex gap-2 flex-col max-md:w-full">
            <p className="font-bold font-sans text-l text-zinc-700">Snake Barber<a> (arrow)</a></p>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem atque aspernatur, inventore doloribus cumque quaerat eaque perspiciatis optio minima est architecto sapiente odit temporibus laboriosam maxime. Esse, quam voluptatum!</p>
        </div>
        <img  className="rounded w-3/3  h-3/4"src={MockupSnake}></img>
        <div className="gap-2 flex max-md:grid max-md:grid-cols-3 max-md:w-2/2">
            <Technology name="HTML" />
            <Technology name="Javascript" />
            <Technology name="Css" />
            <Technology name="Spring" />
            <Technology name="Java" />
            <Technology name="Mysql" />
        </div>
        <div className="flex gap-2 flex-col">
            <p className="font-bold font-sans text-l text-zinc-700">Snake Barber<a> (arrow)</a></p>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem atque aspernatur, inventore doloribus cumque quaerat eaque perspiciatis optio minima est architecto sapiente odit temporibus laboriosam maxime. Esse, quam voluptatum!</p>
        </div>
        <img  className="rounded w-3/3  h-3/4"src={MockupPortfolio}></img>
        <div className="gap-2 flex max-md:grid max-md:grid-cols-3 max-md:w-2/2">
            <Technology name="React" />
            <Technology name="Tailwind" />
            <Technology name="Html" />
            <Technology name="Javascript" />
            <Technology name="Css" />
        </div>
        <div className="flex gap-2 flex-col">
            <p className="font-bold font-sans text-l text-zinc-700">Snake Barber<a> (arrow)</a></p>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem atque aspernatur, inventore doloribus cumque quaerat eaque perspiciatis optio minima est architecto sapiente odit temporibus laboriosam maxime. Esse, quam voluptatum!</p>
        </div>
        <img  className="rounded w-3/3  h-3/4"src={MockupPortfolio}></img>
        <div className="gap-2 flex max-md:grid max-md:grid-cols-3 max-md:w-2/2">
            <Technology name="React" />
            <Technology name="Tailwind" />
            <Technology name="Html" />
            <Technology name="Javascript" />
            <Technology name="Css" />
        </div>
            </div>
            </article>
            
            
            
        </section>

        
    )
}

export default Section;