import React, { useState } from "react";
import Technology from "./Technology";
import MockupPortfolio from './img/MockupPortfolio.webp'

function Project({title, description, image, technologyOne, technologyTwo, technologyThree, technologyFour, technologyFive}) {
    return (
        <div className="gap-4 w-3/4 flex flex-col">
                <div className="flex gap-2 flex-col">
            <p className="font-bold font-sans text-l text-zinc-700">{title}<a> (arrow)</a></p>
            <p className="text-gray-700">{description}</p>
        </div>
        <img  className="rounded w-3/3  h-3/4"src={image}></img>
        <div className="gap-2 flex max-md:grid max-md:grid-cols-3 max-md:w-2/2">
            <Technology name={technologyOne} />
            <Technology name={technologyTwo} />
            <Technology name={technologyThree} />
            <Technology name={technologyFour} />
            <Technology name={technologyFive} />
        </div>
            </div>
    )
}

export default Project;