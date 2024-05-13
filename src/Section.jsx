import React, { useState, useEffect } from 'react';
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
import Technology from "./Technology";
import MockupSnake from './img/MockupSnake.webp'
import MockupPortfolio from './img/MockupPortfolio.webp'
import Email from './assets/Email';
import { useTranslation } from 'react-i18next';




function Section(){

    
    const { t, i18n } = useTranslation();


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

    const [svgSize, setSvgSize] = useState("60px");
    

      
      
      
 
    const updateSize = () => {
        if (window.innerWidth < 720) {
            setSvgSize("46px")
        } else {
            setSvgSize("60px")
        }
    };

    useEffect(() => {
        
        updateSize();
      // Agrega un evento de cambio de tamaño de ventana para actualizar el tamaño del SVG
        window.addEventListener("resize", updateSize);
        if (localStorage.getItem("Language") === "English") {
            i18n.changeLanguage("en");
        } else {
            18n.changeLanguage("es");
        }

    return () => {
        
        window.removeEventListener("resize", updateSize);

    };

    }, []);

    
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
        <section className="max-md:gap-20 max-md:flex max-md:flex-col max-md:w-12/12 max-md:h-12/12 dark:bg-slate-950 dark:text-white">
            <div data-aos="fade-up" data-aos-duration="800">
            <article className="mx-auto p-16 flex gap-12 max-md:flex-col max-md:gap-6 max-md:w-12/12 max-md:m-0 max-md:p-0 dark:bg-slate-950">
                <div className=" w-1/4 flex justify-end max-md:justify-normal"><p className="uppercase text-xl font-extrabold text-blue-500 tracking-widest">{t("BackgroundTitle")}</p></div>
                <div className="gap-4  w-3/4 flex flex-col max-md:m-0 max-md:w-full text-lg text-left max-md:text-sm">
                <p className="text-lg text-left max-md:text-sm">{t("Backgroundwospan")}<span className="font-bold dark:text-blue-500"></span></p>
                <p className="text-lg text-left max-md:text-sm">{t("Backgroundp")}</p>
                <p className="text-lg text-left max-md:text-sm"><span className="font-bold dark:text-blue-500">{t("Backgroundspantwo")}</span> {t("Backgroundpp")}</p>
            </div>
            </article>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
            <article className="mx-auto p-16 flex gap-12 max-md:flex-col max-md:gap-6 max-md:p-0 max-md:w-3/3  max-md:m-0">
                <div className="w-1/4 flex justify-end max-md:justify-normal"><p className="uppercase text-xl font-extrabold text-blue-500 tracking-widest">skills</p></div>
                <div className="w-3/4 grid grid-cols-4 max-sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-12 mx-auto max-md:mx-0 justify-center place-items-center max-md:w-full">
                    <Reactsvg className="hover:cursor-pointer dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width="60" height="60"/>
                    <Nodejs className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.Nodejs ? "#3B82F6" : "#ababab   "} stroke={iconStates.Nodejs ? "#3B82F6" : "#ababab  "} onMouseEnter={() => handleMouseEnter("Nodejs")} onMouseLeave={() => handleMouseLeave("Nodejs")}/>
                    <Tailwind className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.tailwind ? "#3B82F6" : "#ababab   "} stroke={iconStates.tailwind ? "#3B82F6" : "#ababab  "} onMouseEnter={() => handleMouseEnter("tailwind")} onMouseLeave={() => handleMouseLeave("tailwind")}/>
                    <Spring className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.spring ? "#3B82F6" : "#ababab   "} stroke={iconStates.spring ? "#3B82F6" : "#ababab    "} onMouseEnter={() => handleMouseEnter("spring")} onMouseLeave={() => handleMouseLeave("spring")} />
                    <Html className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.Html ? "#3B82F6" : "#ababab   "} stroke={iconStates.Html ? "#3B82F6" : "#ababab  "} onMouseEnter={() => handleMouseEnter("Html")} onMouseLeave={() => handleMouseLeave("Html")}/>
                    <Css className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.Css ? "#3B82F6" : "#ababab "} stroke={iconStates.Css ? "#3B82F6" : "#ababab "} onMouseEnter={() => handleMouseEnter("Css")} onMouseLeave={() => handleMouseLeave("Css")}/>
                    <Git className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.Git ? "#3B82F6" : "#ababab "} stroke={iconStates.Git ? "#3B82F6" : "#ababab "} onMouseEnter={() => handleMouseEnter("Git")} onMouseLeave={() => handleMouseLeave("Git")}/>
                    <Java className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.Java ? "#3B82F6" : "#ababab   "} stroke={iconStates.Java ? "#3B82F6" : "#ababab  "} onMouseEnter={() => handleMouseEnter("Java")} onMouseLeave={() => handleMouseLeave("Java")}/>
                    <Mysql className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.Mysql ? "#3B82F6" : "#ababab "} stroke={iconStates.Mysql ? "#3B82F6" : "#ababab   "} onMouseEnter={() => handleMouseEnter("Mysql")} onMouseLeave={() => handleMouseLeave("Mysql")}/>
                    <Npm className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.Npm ? "#3B82F6" : "#ababab "} stroke={iconStates.Npm ? "#3B82F6" : "#ababab "} onMouseEnter={() => handleMouseEnter("Npm")} onMouseLeave={() => handleMouseLeave("Npm")}/>
                    <GitHubSection className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.Githubsection ? "#3B82F6" : "#ababab"} stroke={iconStates.Githubsection ? "#3B82F6" : "#ababab"} onMouseEnter={() => handleMouseEnter("Githubsection")} onMouseLeave={() => handleMouseLeave("Githubsection")}/>
                    <Javascript className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:fill-white dark:stroke-white dark:hover:fill-blue-500 dark:hover:stroke-blue-500" width={svgSize} height={svgSize} fill={iconStates.Javascript ? "#3B82F6" : "#ababab   "} stroke={iconStates.Javascript ? "#3B82F6" : "#ababab    "} onMouseEnter={() => handleMouseEnter("Javascript")} onMouseLeave={() => handleMouseLeave("Javascript")}/>
                </div>
            </article>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
            <article className="mx-auto p-16 flex gap-12 max-md:flex-col max-md:p-0 max-md:h-2/2 max-md:gap-6 max-md:w-full dark:text-white">
                <div className="w-1/4 flex justify-end max-md:justify-normal"><p className="uppercase text-xl font-extrabold text-blue-500 tracking-widest">{t("ProjectsTitle")}</p></div>
                <div className="gap-16 w-3/4 flex flex-col max-md:w-full">
                <div className="project flex flex-col gap-4">
                    <div className="flex gap-2 flex-col max-md:w-full">
                    <p className="font-bold font-sans text-l text-zinc-700 text-lg max-md:text-sm text-left flex gap-2 dark:text-white">Snake Barber<a href="https://www.snakebarber.com" target="_blank" rel="noreferrer"><Email className="hover:cursor-pointer" viewBox = "0 0 24 24"/></a></p>
                        <p className="text-gray-700 text-lg max-md:text-sm text-left dark:text-white">{t("SnakeBarber")}</p>
                    </div>
                    <div className="flex flex-col max-md:w-full gap-3 ">
                        <img className="rounded w-3/3 h-4/4" src={MockupSnake}></img>
                        <div className="gap-2 flex max-md:grid max-md:grid-cols-3  max-md:w-2/2 uppercase font-extrabold text-center items-center">
                            <Technology name="HTML" />
                            <Technology name="Javascript" />
                            <Technology name="Css" />
                            <Technology name="Spring" />
                            <Technology name="Java" />
                            <Technology name="Mysql" />
                        </div>
                    </div>
                </div>

                <div className="project flex flex-col gap-4">
                    <div className="flex gap-2 flex-col max-md:w-full">
                    <p className="font-bold font-sans text-l text-zinc-700 text-lg max-md:text-sm text-left flex gap-2 dark:text-white">Portfolio<a href="" target="_blank" rel="noreferrer"><Email viewBox = "0 0 24 24"/></a></p>
                        <p className="text-gray-700 text-lg max-md:text-sm text-left dark:text-white">{t("Portfolio")}</p>
                    </div>
                    <div className="flex flex-col max-md:w-full gap-3">
                        <img className="rounded w-3/3 h-4/4" src={MockupPortfolio}></img>
                        <div className="gap-2 flex max-md:grid max-md:grid-cols-3  max-md:w-2/2 uppercase font-extrabold text-center items-center">
                            <Technology name="HTML" />
                            <Technology name="Javascript" />
                            <Technology name="Css" />
                            <Technology name="React" />
                            <Technology name="Tailwind" />
                        </div>
                    </div>
                </div>
            
            
            
            </div>
            </article>
            </div>
            
            
            
        </section>

        
    )
}

export default Section;