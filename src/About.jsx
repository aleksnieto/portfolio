import React from 'react';
import GitHub from './assets/GitHub';
import Linkedin from './assets/Linkedin';
import Email from './assets/Email';
import { useTranslation } from 'react-i18next';
import cvES from './assets/cvES.pdf';
import cvEN from './assets/cvEN.pdf';

function About(){

     const { t, i18n } = useTranslation();

    const handleDownload = () => {
        const pdfFile = i18n.language === 'es' ? cvES : cvEN;

        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = i18n.language === 'es' ? 'CV_Alejandro_ES.pdf' : 'CV_Alejandro_EN.pdf';
        link.click();
    };

    return (
        <>
            <div className="w-1/2 font-poppins bg-white flex flex-col gap-4 ml-32 max-md:ml-0 max-md:gap-2 max-sm:text-sm max-sm:w-full text-3xl max-2xl:text-2xl dark:bg-slate-950 dark:text-white">
                <div className="flex place-content-between">
                    <div className="redes-sociales gap-6 max-md:gap-4 flex items-end">
                        <a href="https://www.linkedin.com/in/alejandro-nieto-barea-54278a23a/" target="_blank" rel="noreferrer"><Linkedin/></a>
                        <a href="https://github.com/aleksnieto" target="_blank" rel="noreferrer"><GitHub/></a>
                    </div>
                </div>
                
                
                <p className="text-left text-md ">{t("Titlewospan")}<span className="text-blue-500 font-bold">{t("Titlespan")}</span>{t("Title")}</p>
                    <div className="flex gap-2 md:gap-5 items-center justify-items-center content-center text-xs md:text-xl">
                        <button 
                            onClick={() =>
                                window.location.href =
                                "mailto:alejandronietobarea@gmail.com?subject=Work%20Together&body=Hola%20Alejandro%2C"
                            }
                            class="bg-transparent tracking-tight uppercase hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 transition-all hover:border-transparent rounded">
                            {t("WorkTogether")}
                        </button>
                        <span className="text-md underline cursor-pointer" onClick={handleDownload}>
                            {t("DownloadCv")}
                            </span>

                    </div>
            </div>
                
        </>
    )
}

export default About;