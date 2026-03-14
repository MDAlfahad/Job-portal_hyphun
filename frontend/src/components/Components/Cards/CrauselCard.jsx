import { ArrowRight } from "lucide-react";


const CrauselCard = ()=>{
    return(
        <>
        <div className="md:w-80 px-6 py-6 h-auto flex flex-col gap-2 bg-white border rounded-xl shadow-xl">
            <div><h1 className="text-lg md:text-2xl font-semibold md:font-bold">Company Name</h1></div>
            <div><p className="font-semibold text-textcolor2">stipen</p></div>
            <div><p className="text-sm md:text-lg text-textcolor">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, vitae molestiae vero magnam, voluptas repellendus in fugiat unde maiores recusandae aliquid hic sed atque magni. Vero rerum iste id officia.</p></div>
            <div className="text-sm md:text-lg" >skills</div>
            <div className="flex gap-5"><a className="mt-auto text-secondary" href="#">Learn More </a><ArrowRight className="text-secondary" strokeWidth={1.5} /></div>
        </div> 
        </>
    )
}

export default CrauselCard;