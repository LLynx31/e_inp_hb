export default function Cours({className, imgCours,nomCours,coursFiliere,coursEcole,coursSpecialite, nbrLesson, nbrHeur, coursID, prof}){

    const logoCours = "/logoCours.png"

    return(
        <div onClick={()=>{window.location.href = "/Cours/" + coursID}} className={"bg-white rounded-xl h-fit p-3 " + className}>
            <div className="relative mb-2">   
                <img srcSet={imgCours} loading="lazy" width={310} className="rounded-lg"></img>
                <div className="absolute text-sm font-bold text-[#102844] px-2 py-1 bg-neutral-50 rounded-lg top-[5px] ml-3">{coursEcole + "/" + coursFiliere + "/" + coursSpecialite}</div>
            </div>

            <div className="text-lg font-bold text-[#102844] mb-6">{nomCours}</div>
            <div className="flex text-gray-500 mb-2">
                <img loading="lazy" srcSet={logoCours} className="mr-2"></img>
                <div>{nbrLesson + " leçon(s)" + " (" + nbrHeur + "h)"}</div>
            </div>
            <div className="text-sm text-[#102844] mb-3">Par M. <span className="text-bold">{prof}</span></div>

        </div>
    )
}