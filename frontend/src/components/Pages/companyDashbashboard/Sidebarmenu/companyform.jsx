
const CompanyFrom = ()=>{

    return(
        <>
        <div className=" w-[700px] rounded-md  text-textcolor2 flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl font-semibold text-black py-10">Personal Details</h1>
            <div className=" gap-2 w-full border flex flex-col text-left p-4">
                <label className="font-semibold" htmlFor="company">Full name</label>
                <input className="border rounded-sm px-2 py-2 outline-none text-textcolor2 " type="text" placeholder="Full name" required />

                <label className="font-semibold" htmlFor="email">E-mail</label>
                <input className="border rounded-sm px-2 py-2 outline-none  text-textcolor2 " type="email" placeholder="Company email"  required/>

                <label className="font-semibold" htmlFor="Address">Designation</label>
                <input className="border rounded-sm px-2 py-2 outline-none  text-textcolor2 " type="text" placeholder="Address" required/>

                <label className="font-semibold" htmlFor="phone">Mobile Number</label>
                <input className="border rounded-sm px-2 py-2 outline-none  text-textcolor2 " type="tel" placeholder="Contact number" />
            </div>
        </div>
        
        </>
    )
}

export default CompanyFrom;