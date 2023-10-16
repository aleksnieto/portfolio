import React, { useState } from "react";


function Technology({name}){
    return (
        <div className="border-2 border-blue-500 rounded font-semibold inline-block hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
            <span className="p-3 text-blue-500 text-sm hover:text-white hover:cursor-pointer">{name}</span>
        </div>
    )
}

export default Technology;