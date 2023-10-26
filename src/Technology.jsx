import React, { useState } from "react";


function Technology({name}){
    return (
        <div className="border-2 dark:border-white-1 dark:bg-blue-500 border-blue-500 rounded font-semibold inline-block hover:bg-blue-500 hover:text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
            <p className="max-md:p-1 hover:cursor-default max-md:pr-1 max-md:pl-1 p-2 dark:text-white text-blue-500 text-sm max-md:text-xs max-md:font-semibold hover:text-white">{name}</p>
        </div>
    )
}

export default Technology;