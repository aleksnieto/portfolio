import React, { useState } from 'react';
import About from './About';
import Section from './Section';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Translate from './assets/Translate';
import DarkMode from './assets/DarkMode';
import "./i18next";

AOS.init();


localStorage.setItem("Language", "English")
localStorage.setItem("Theme", "Light");

function App() {

  
  return (
    <>
      <div className="font-poppins grid grid-cols-1 gap-4 h-[100vh] px-12 my-auto p-0 dark:bg-slate-950">
        <div data-aos="fade-down" data-aos-duration="800" className="max-md:flex gap-4 max-md:justify-center max-md:items-end flex absolute max-md:inset-x-0 max-md:top-0 max-md:gap-5 mt-20 top-0 right-0 mr-96 max-md:mr-0 items-end">
          <Translate/>
          <DarkMode/>
        </div>

        <header className="w-4/4 h-[100vh] flex justify-start items-center dark:bg-slate-950">
          <div data-aos="fade-right" data-aos-duration="800">
            <About content=""/>
          </div>
        </header>
        <main className="mx-auto w-3/4 max-md:w-full max-md:mx-0 dark:bg-slate-950">
        <Section/>
        </main>

        <footer className="w-100 dark:bg-slate-950 flex justify-between font-extrabold uppercase text-blue-500 text-xl max-md:text-lg p-4 max-md:flex-col max-md:mx-auto max-md:items-center max-md:w-full max-md:p-0 max-md:mt-14 max-md:gap-4 max-md:pb-4">
          <p className="">MADE BY ALEJANDRO NIETO</p>
          <div className="footers-url flex max-md:flex-col max-md:text-base max-md:mx-auto max-md:items-center max-md:gap-2 text-blue-300 gap-8 ">
            <a href="https://www.linkedin.com/in/alejandro-nieto-barea-54278a23a/" target="_blank" rel="noreferrer" className="hover:text-blue-500 dark:fill-white hover:cursor-aointer">Linkedin</a>
            <a href="https://github.com/aleksnieto" target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:cursor-aointer">Github</a>
          </div>
            
        </footer>
      </div>  
    </>
  )
}

export default App