export default function CoursSuivie({logo,nomCours}){

    return(
        <>
            <div className="flex mt-3 items-center">
                <div className="flex justify-center rounded-lg bg-blue-100 p-3 items-center mr-2">
                    <img srcSet={logo} loading="lazy"></img>
                </div>
                <div className="">{nomCours}</div>
                
            </div>

            <hr className="mt-2"></hr>
        </>
        
    )
}