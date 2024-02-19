'use client'
import Cours from "@/app/ui/cours";
import { useEffect, useState, useRef } from "react";


export default function PageCours(){

    const [data,setData] = useState(false)

  useEffect(()=>{
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:siQ_Ysfn/lier")
    .then((response) => response.json())
    .then((responseParse) => setData(responseParse))
    .catch((error)=> console.log(error))
  },[])

  const [filiere, setFiliere] = useState("Tout")
  const [ecole, setEcole] = useState("Tout")
  const [specialite, setSpecialite] = useState("Tout")

  const filiereRef = useRef(null)
  const ecoleRef = useRef({value: null})
  const specialiteRef = useRef(null)

    const logoCours = "/IconCours_.png"

    const imgCours = "/ImageCours.png"

    let listCours = null

    if(data){
       listCours = data.map(cours => {
        return<Cours className={filiere == cours._specialites._filieres.nom_fil || filiere == "Tout" || ecole == cours._specialites._filieres._ecole.nom_ecole || ecole == "Tout" || specialite == cours._specialites.nom_spec || specialite == "Tout" ? "" : " hidden"} coursID={`${cours.cours_id}`} key={`${cours.cours_id}`} imgCours={cours._cours.image_cours.url} coursEcole={cours._specialites._filieres._ecole.nom_ecole} coursFiliere={cours._specialites._filieres.nom_fil} coursSpecialite={cours._specialites.nom_spec} nomCours={cours._cours.nom_cours} prof={cours._cours._professeur.nom_prof} nbrLesson={cours._cours.nbr_lesson} nbrHeur={cours._cours.nbr_heure}> </Cours>})
    }
  
    console.log(ecoleRef.current.value)
    
    return(
        <div>
            <main className="px-5 py-5">
                <h1 className="text-[#102844] text-3xl font-bold mb-8">Choisissez un cours</h1>

                <form className="flex mb-8 ">
                    <select ref={ecoleRef} className="px-2 mr-3 bg-white rounded-lg py-2" onChange={() => {setEcole(ecoleRef.current.value)}}>
                        <option value={"Tout"}>Tout</option>
                        <option value={"ESI"}>ESI</option>
                        <option value={"ESCAE"}>ESCAE</option>
                    </select>

                    <select  ref={filiereRef} className="px-2 mr-3 bg-white rounded-lg py-2" onChange={() => {setFiliere(filiereRef.current.value)}}>
                        <option value={"Tout"}>Tout</option>
                        <option value={"STIC "}>STIC</option>
                        <option value={"CAE "}>CAE</option>
                    </select>

                    <select ref={specialiteRef} className="px-2 mr bg-white rounded-lg py-2" onChange={() => {setSpecialite(specialiteRef.current.value)}}>
                        <option value={"Tout"}>Tout</option>
                        <option value={"INFO"}>INFO</option>
                        <option value={"EIT"}>EIT</option>
                        <option value={"CAE"}>CAE</option>
                    </select>
                </form>

                <div className="flex">

                    <div className="full h-[520px] grid grid-cols-5 gap-5 ">
                        {listCours ? listCours : <div className="text-3xl text-red-600">chargement...</div>}
                    </div>

                    
                    
                </div>
            </main>
        </div>
    )
}