import React from 'react';
import GitHub from './assets/GitHub';
import Linkedin from './assets/Linkedin';
import Email from './assets/Email';
import { useTranslation } from 'react-i18next';

function About(){

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="w-1/2 bg-white font-sans flex flex-col gap-4 ml-32 max-md:ml-0 max-md:gap-2 max-sm:text-sm max-sm:w-full text-3xl max-2xl:text-2xl dark:bg-slate-950 dark:text-white">
                <div className="flex place-content-between">
                    <div className="redes-sociales gap-6 max-md:gap-4 flex items-end">
                        <a href="https://www.linkedin.com/in/alejandro-nieto-barea-54278a23a/" target="_blank" rel="noreferrer"><Linkedin/></a>
                        <a href="https://github.com/aleksnieto" target="_blank" rel="noreferrer"><GitHub/></a>
                    </div>
                    
                </div>
                
                
                <p className="text-text-left font-normal">{t("Titlewospan")}<span className="text-blue-500 font-bold">{t("Titlespan")}</span>{t("Title")}</p>
                <div className="flex gap-2 items-center justify-items-center font-semibold content-center max-md:text-xs max-lg:text-md">
                    <span className="flex text-eft tracking-tighter break-keep">{t("Contact")}</span><Email/><a href="mailto:alejandronietobarea@gmail.com" className="font-normal underline decoration-3 underline-offset-1 decoration-blue-500 hover:opacity-70">alejandronietobarea@gmail.com</a>
                </div>
                </div>
                
        </>
    )
}

export default About;