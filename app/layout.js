'use client'

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {


  const imgLogo = "/logoInp.png"
  const iconHome = "/iconHome.png"
  const iconHelp = "/iconeHelp.png"
  const iconCours = "/iconCours.png"
  const iconSetting = "/Settings.png"
  const iconCompte = "/iconCompte.png"
  const iconDeconnexion = "/iconDeconnexion.png"
  const iconGroup = "/group594.png"
  const iconSearch = "/searchIcon.png"
  const imgUser = "/user.png"

  const [actif, setActif] = useState('accueil')

  return (
    <html lang="fr">
      <body className={inter.className + " flex  bg-[#E9EDFF]"}>
        <div className=" fixed flex items-center py-3 justify-between flex-col h-screen w-1/6 bg-gradient-to-b from-blue-300 to-purple-500 to-95% ">

            <div className="flex items-center flex-col">
              <img loading="lazy" srcSet={imgLogo}></img>
              <div className={
                actif == 'accueil' ? "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit bg-blue-400 flex" : "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit  flex"}> <img srcSet={iconHome} loading="lazy" className="mr-2"></img> <Link onClick={()=>{setActif('accueil')}} href={"/"} className="text-white">Accueil</Link></div>

              <div className={actif == "cours" ? "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit bg-blue-400 flex" : "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit  flex"}> <img srcSet={iconCours} loading="lazy" className="mr-2"></img> <Link onClick={()=>{setActif('cours')}} href={"/Cours"} className="text-white" >Cours</Link></div>

              <div className={actif == "support" ? "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit bg-blue-400 flex" : "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit  flex"}> <img srcSet={iconHelp} loading="lazy" width={16.01}className="mr-2"></img> <Link href={""} onClick={()=>{setActif('support')}}className="text-white">support</Link></div>

              <div className={actif == "settings" ? "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit bg-blue-400 flex" : "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit  flex"}> <img srcSet={iconSetting} loading="lazy" className="mr-2"></img> <Link href={""} onClick={()=>{setActif('settings')}} className="text-white">Paramètre</Link></div>
            </div>

            <div className="flex items-center flex-col">

              <div className={actif == "compte" ? "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit bg-blue-400 flex" : "mt-10 px-20 flex  justify-center items-center py-4 rounded-md w-fit  flex"}> <img srcSet={iconCompte} loading="lazy" width={16.01}className="mr-2"></img> <Link href={"/Compte"} className="text-white" onClick={()=>{setActif('compte')}}>Compte</Link></div>

              <div className="mt-3 px-20 flex justify-center items-center py-4 rounded-md w-fit  flex"> <img srcSet={iconDeconnexion} loading="lazy" className="mr-2"></img> <Link href={""} className="text-white">Deconnexion</Link></div>
            </div>
            
        </div>

        <div className="w-5/6 bg-[#E9EDFF] ml-[250px]">
          <div className="px-5 py-3 w-full flex justify-between h-[80px] items-center bg-white">
              <img srcSet={iconGroup} className="mr-5" width={20} height={20} loading="lazy"></img>
              <div className="flex justify-center border border-gray-200 rounded h-[40px] w-[900px] items-center px-2 py-1 mr-5 "><img srcSet={iconSearch}></img><input className="h-full w-full"></input></div> 
              <div className="flex justify-center items-center">
                <img srcSet={imgUser} loading="lazy"></img>
                <div className="ml-3">Sagoe Christian</div>
              </div>
          </div>
          {children}
        </div>
        
      </body>
    </html>
  );
}
