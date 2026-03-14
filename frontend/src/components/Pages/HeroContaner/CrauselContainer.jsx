import CrauselCard from "../../Components/Cards/CrauselCard"

const CrauselContainer = ()=>{

    return(
        <>
        <div className="w-full max-w-[1800px] px-4 md:px-12 py-12 ">
            <div className="w-full p-3 shadow-xl flex  gap-4 ">
                <CrauselCard/>
                <CrauselCard/>
                <CrauselCard/>
                <CrauselCard/>
            </div>
        </div>
        </>
    )
}

export default CrauselContainer;