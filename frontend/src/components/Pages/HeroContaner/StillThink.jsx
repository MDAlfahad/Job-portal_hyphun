import { useNavigate } from "react-router-dom";
import Button from "../../Components/buttons/ButtonComponents";
import RightImage from "../../images/sideimg_1.png"


const StillThink =()=>{

    const navigate = useNavigate();
    return(
        <>
        <div className="still_background w-full px-4 md:px-12 pt-6 md:pt-14 md:flex justify-between items-center text-black select-none max-w-[1800px] m-auto">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-6xl font-bold py-4">Still Thinking ? Why Don’t You Apply</h1>
                <p className="text-sm">"Stop just thinking—start applying! Our job portal connects you with opportunities tailored to your skills and ambitions. Whether you're exploring new career paths or aiming for your dream role, we make the search simple, fast, and effective."</p>
                <div className="mt-6">
                    <Button text="Apply Now" onClick={()=> navigate("/job-page")}/>
                </div>
                <p className="mt-20">Don’t just dream about success—apply for it</p>
            </div>
            <div>
                <img src={RightImage} width={1400} alt="" />
            </div>
        </div>
        </>
    )
}
export default StillThink;