import { ChevronLeft, ChevronRight } from "lucide-react";
import CrauselCard from "../../Components/Cards/CrauselCard"

const CrauselContainer = ()=>{

    return(
        <>
        <div className="w-full max-w-[1800px] m-auto px-4 md:px-12 py-12 flex items-center">
            <button><ChevronLeft strokeWidth={1.5} /></button>
            <div className="w-full shadow-xl flex  gap-4 ">
                <CrauselCard/>
                <CrauselCard/>
                <CrauselCard/>
                <CrauselCard/>
            </div>
            <button><ChevronRight strokeWidth={1.5} /></button>
        </div>
        </>
    )
}

export default CrauselContainer;