'use client'

import Image from "next/image";
import CoursSuivie from "./ui/coursSuivie";
import Cours from "./ui/cours";


import { useEffect, useState } from "react";


export default function Home() {

  const logoCours = "/IconCours_.png"

  const imgCours = "/ImageCours.png"

  const [data,setData] = useState(false)

  useEffect(()=>{
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:siQ_Ysfn/lier")
    .then((response) => response.json())
    .then((responseParse) => setData(responseParse))
    .catch((error)=> console.log(error))
  },[])

  
 
  let listCours = null

  if(data){
     listCours = data.map(cours => {return<Cours coursID={`${cours.cours_id}`} key={`${data.cours_id}`} imgCours={cours._cours.image_cours.url} coursEcole={cours._specialites._filieres._ecole.nom_ecole} coursFiliere={cours._specialites._filieres.nom_fil} coursSpecialite={cours._specialites.nom_spec} nomCours={cours._cours.nom_cours}  prof={cours._cours._professeur.nom_prof} nbrLesson={cours._cours.nbr_lesson} nbrHeur={cours._cours.nbr_heure}> </Cours>})
  }


  

  return (
    <main className="px-5 py-5">
      <h1 className="text-[#102844] text-lg mb-3">Dernier ajouts</h1>

      <div className="flex pb-8">

          <div className="w-2/3  grid grid-cols-3 gap-5 ">
            {listCours ? listCours : <div className="text-3xl text-red-600">chargement...</div>}
          </div>

          <div className="w-1/3 ml-5">
            <h2 className="text-[#102844] text-lg mb-3">Cours populaire</h2>
            <div className="bg-white rounded-lg  px-3 py-2">
              <div className="flex  flex-col items-between">
                  <CoursSuivie logo={logoCours} nomCours={"Marchin learning"}></CoursSuivie>
                  <CoursSuivie logo={logoCours} nomCours={"SE LINUX 3"}></CoursSuivie>
                  <CoursSuivie logo={logoCours} nomCours={"Economie"}></CoursSuivie>
                  <CoursSuivie logo={logoCours} nomCours={"Electronique des fonctions"}></CoursSuivie>
              </div>
              
            </div>
          </div>
        
      </div>
    </main>
  );
}
