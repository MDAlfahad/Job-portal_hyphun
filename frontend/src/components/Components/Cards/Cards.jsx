import { BookAudio } from "lucide-react"
// import Button from "../buttons/ButtonComponents"


const Cards =(props)=>{
    return(
        <>
            <div className="flex  flex-col gap-6 w-auto md:w-96 border relative bg-white shadow-lg px-6 py-6 rounded-lg my-10">
                <div>
                    {props.logo}
                </div>
                <div>
                    <h1 className="text-xl md:text-xl md:font-bold font-semibold ">{props.h1}</h1>
                </div>
                <div>
                    <p className="text-sm md:text-[14px] text-textcolor">
                        {props.p}
                    </p>
                </div>
                <button onClick={props.open} className="px-4 py-2 mt-auto bg-secondary rounded-sm text-white font-bold hover:bg-textcolor transition duration-300">{props.text}</button>
            </div>
        </>
    )
}

export default Cards