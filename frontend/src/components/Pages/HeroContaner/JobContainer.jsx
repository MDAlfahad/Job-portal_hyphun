import JobCard from "../../Components/Cards/jobcard"


const JobContainer =()=>{
    return(
        <>
        <div className="w-full max-w-[1800px] m-auto md:px-12 px-6 py-12">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold md:font-bold py-20"><span className="text-secondary">
                Your Oppourtunity</span> Your Selection Get Placed</h1>
            <div className="grid grid-cols-3 ">
                <JobCard/>
            </div>
        </div>
        </>
    )
}

export default JobContainer;