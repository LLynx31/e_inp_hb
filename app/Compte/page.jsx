'use client'
import { useState } from "react"


export default function Compte(){

    const [swipeOption, setSwipeOption] = useState('infoPerso')
    return (
        <div className="flex">
            <div className="flex flex-col w-[35%] border-r-gray-200 border-r">
                <div onClick={() => setSwipeOption('infoPerso')} className={swipeOption == 'infoPerso' ? "px-3 bg-blue-300 text-base text-rouge py-3.5 border-r-4 border-blue-900" : "px-3 text-base py-3.5 "}>Informations et coordonnées</div>
                <div onClick={() => setSwipeOption('password')} className={swipeOption == 'password' ? "px-3 bg-blue-300 text-base text-rouge py-3.5 border-r-4 border-blue-900" : "px-3 text-base py-3.5  "}>Changer le mot de passe</div>
               
                
            </div>

            <div className="flex flex-col w-[65%] min-h-[500px] py-5 px-8">

                <div className={swipeOption == 'infoPerso' ? "" : "hidden"}>

                    <h1 className="font-bold text-lg">Informations et coordonnées</h1>

                    <div className="pt-3.5 flex justify-between">
                        <div className="w-1/2">
                            <div className="text-base">nom</div>
                            <input className="w-full border border-gray-300 px-1 py-2" placeholder="Sagoe"></input>
                        </div>

                        <div className="w-1/2 ml-8">
                            <div className="text-base">prénom</div>
                            <input className="w-full border border-gray-300 px-1 py-2" placeholder="Christian Brice-Yvan"></input>
                        </div>
                    </div>

                    <div className="w-full mt-5">
                        <div className="text-base">email</div>
                        <input className="w-full border border-gray-300 px-1 py-2" type="email" placeholder="christian.sagoe21@inphb.ci"></input>
                    </div>

                    <div className="w-full mt-5">
                        <div className="text-base">téléphone</div>
                        <input className="w-full border border-gray-300 px-1 py-2"  placeholder="0759150683"></input>
                    </div>

                    <button className="mt-6 text-white w-full bg-blue-500 text-center py-2.5 rounded-md">SAUVEGARDER</button>
                    
                </div>



                <div className={swipeOption == 'password' ? "" : "hidden"}>

                    <h1 className="font-bold text-lg">Changer le mot de passe</h1>

                    
                    <div className="w-full mt-3.5">
                        <div className="text-base">Mot de passe actuel</div>
                        <input className="w-full border border-gray-300 px-1 py-2" type="email" ></input>
                    </div>

                    <div className="w-full mt-5">
                        <div className="text-base">Nouveau mot de passe </div>
                        <input className="w-full border border-gray-300 px-1 py-2" type="email" ></input>
                    </div>

                    <div className="w-full mt-5">
                        <div className="text-base">Confirmation du nouveau mot de passe</div>
                        <input className="w-full border border-gray-300 px-1 py-2" ></input>
                    </div>

                    <button className="mt-6 text-white w-full bg-blue-500 text-center py-2.5 rounded-md">METTRE A JOUR</button>
                    
                </div>
                

            </div>
        </div>
    )
}