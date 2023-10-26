import React, { useState, useEffect } from 'react';

const DarkMode = () => {

  const [svgSize, setSvgSize] = useState("32px");
  const [svgView, setSvgView] = useState("32px");

  const ChangeTheme = () => {
    if (localStorage.getItem("Theme") === "Light") {
        document.documentElement.classList.add('dark');
        localStorage.setItem("Theme", "Dark") 
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("Theme", "Light")
    }
  }

  const updateSize = () => {
    if (window.innerWidth < 720) {
        setSvgSize("28px");
        setSvgView("0 0 32 29")
    } else {
        setSvgSize("36px");
        setSvgView("0 0 32 27")
    }
};

    useEffect(() => {
      updateSize();
    // Agrega un evento de cambio de tamaño de ventana para actualizar el tamaño del SVG
    window.addEventListener("resize", updateSize);
    // Limpia el evento cuando el componente se desmonta
    return () => {
        window.removeEventListener("resize", updateSize);
    };
}, []);


    return (
        <svg onClick={ChangeTheme} className="opacity-30 items-end hover:opacity-100 hover:cursor-pointer" fill="#000000" width={svgSize} height={svgSize} viewBox={svgView} version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>moon</title> <path className="dark:fill-white dark:stroke-white dark:opacity-100" d="M10.895 7.574c0 7.55 5.179 13.67 11.567 13.67 1.588 0 3.101-0.38 4.479-1.063-1.695 4.46-5.996 7.636-11.051 7.636-6.533 0-11.83-5.297-11.83-11.83 0-4.82 2.888-8.959 7.023-10.803-0.116 0.778-0.188 1.573-0.188 2.39z"></path> </g></svg>
      )
    
  
}
export default DarkMode