import React, { useState, useEffect } from 'react';



const Email = ({viewBox = "0 0 24 19"}) => {
    const [svgSize, setSvgSize] = useState("32px");

    const updateSize = () => {
        if (window.innerWidth < 720) {
            setSvgSize("16px");
        } else {
            setSvgSize("32px");
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

    
        <svg className="dark:stroke-white dark:fill-white cursor-pointer" width={svgSize} height={svgSize} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className="dark:fill-white dark:stroke-white" d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )
}


export default Email;