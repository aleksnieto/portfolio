import React from 'react';
import GitHub from './assets/GitHub';
import Linkedin from './assets/Linkedin';
import Email from './assets/Email';

function About(){
    return (
        <>
            <div className="w-1/2 bg-white font-sans flex flex-col gap-4 ml-32 max-md:ml-0 max-sm:text-sm max-sm:w-full text-3xl max-2xl:text-2xl">
                <div className="redes-sociales gap-6 flex">
                    <a  href="www.facebook.com"><Linkedin/></a>
                    <a  className="transition-colors" href="www.github.com/aleksnieto"><GitHub/></a>
                </div>
                <p className="text-text-left font-normal">Hi! I'm <span className="text-blue-500 font-bold">Alejandro Nieto</span> a Web Developer from Jerez de la Frontera, Spain. I love taking care of the details of each project I do and everything that it entails.</p>
                <a  href="" className="flex gap-2  items-center justify-items-center hover:text-blue-600 font-semibold">Send me an email!<Email/></a>
            </div>
        </>
    )
}

export default About;