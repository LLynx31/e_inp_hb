'use client'


import Link from "next/link";
import { useEffect, useState } from "react";

export default function CoursPage({params}){
    const imgCours = "/group8643.png"
    const logoCours = "/logoCours.png"
    const iconFichier = "/IconFichier.png"

    const nbrLesson = "5"
    const nbrHeur = "10h 5min"
    const nbrFichier = "5"

    const [data,setData] = useState(false)

    useEffect(()=>{
        fetch(`https://x8ki-letl-twmt.n7.xano.io/api:siQ_Ysfn/cours/${params.id}`)
        .then((response) => response.json())
        .then((responseParse) => setData(responseParse))
        .catch((error)=> console.log(error))
      },[])


    let liens = [];

        
    if (data) {
        for (let i = 0; i < data._doc_cours_of_cours.length; i++){
            liens.push(`/${data._doc_cours_of_cours[i].nom_doc}`)
        }
    }

    return(
        <div>
            {data ? 
            <main className="px-5 py-5">
                <h1 className="text-[#102844] text-3xl font-bold mb-8">Découvrez le cours</h1>

                <div >
                    <Link href={"/Cours"}><span className="text-slate-500 text-base font-semibold">Cours </span> </Link>&#62; <span className="text-[#102844] text-lg font-bold">{data.nom_cours}</span>
                </div>

                <div className="flex pb-8 mt-5">

                    <div className="w-2/3  p-5 rounded-lg bg-white gap-5 ">
                        <img loading="lazy" className="w-full" width={754} height={450} srcSet={data.image_cours.url} alt="cours"></img>
                        <div className="mt-5">
                            <div className="text-2xl font-bold text-[#102844]">{data.nom_cours}</div>
                            <div className="text-[#102844]">cours présenté par, <span className="font-semibold text-[#102844]">{"M. " + data._professeur.nom_prof},</span></div>
                        </div>

                        <div className="p-2 rouded-lg bg-orange-500 text-white font-bold w-fit text-lg rounded-lg mt-5">information</div>

                        <div className="text-[#102844] mt-5">
                            
                            {data.description_cours}
                        </div>

                        <button className="p-2 rouded-lg bg-blue-500 text-white font-bold w-fit text-lg rounded-lg mt-5" onClick={()=>{
                            
                       
                            for (var i = 0; i < liens.length; i++) {
                               window.open(liens[i], "_blank");
                                
                            }
                         
                        }}>Télécharger le cours</button>
                    </div>

                    <div className="w-1/3 ml-5">
                        <h2 className="text-[#102844] text-lg mb-3">Bon à savoir</h2>
                        <div className="bg-white rounded-lg  px-3 py-2">
                            <div>

                                <div className="text-[#102844] text-2xl mb-3">Contenu du cours :     </div>
                                <div>
                                    <div className="flex text-gray-500 mb-3">
                                        <img loading="lazy" srcSet={logoCours} className="mr-2"></img>
                                        <div>{data.nbr_lesson + " leçon(s)" + " (" + data.nbr_heure + "h)"}</div>
                                    </div>
                                    <div className="flex text-gray-500 mb-6">
                                        <img loading="lazy" srcSet={iconFichier} className="mr-2"></img>
                                        <div>{data._doc_cours_of_cours.length} fichier(s)</div>
                                    </div>
                                </div>
                            </div>
                            

                      
                        
                        </div>
                    </div>
                    
                </div>
            </main> : <div className="full h-[520px] grid grid-cols-5 gap-5 ">
                        <div className="text-3xl ml-[25px] text-red-600">chargement...</div>
                    </div>}
        </div>
    )
}