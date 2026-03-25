import {Upload} from "lucide-react"

const CompanyForm2 = () => {
  return (
    <>
      <div className=" w-[700px] flex flex-col items-center justify-center text-textcolor2 ">
        <div>
            <h1 className="py-6 font-semibold text-2xl md:text-4xl text-black">Company Details</h1>
        </div>
        <div className="border p-4  rounded-md flex flex-col gap-2 w-full">
            <label className="text-md font-semibold" htmlFor="companyname" >Company name</label>
            <input className="border rounded-md px-2 py-2" type="text"placeholder="company name"/>

            <label className="text-md font-semibold" htmlFor="companydescription" >company Description</label>
            <textarea className="border rounded-md px-2 py-2 outline-none min-h-40 max-h-96"  id="companydescription"></textarea>

            <label className="text-md font-semibold" htmlFor="companyaddress" >Address</label>
            <input className="border rounded-md px-2 py-2" type="text" placeholder="Address" />

            <label className="text-md font-semibold" htmlFor="insdustry" >Industry</label>
            <input className="border rounded-md px-2 py-2" type="text" placeholder="industry" />

            <label className="text-md font-semibold"  htmlFor="comanyLogo"  >Company logo</label>
            <label htmlFor="companylogo" className="flex font-semibold items-center gap-2 border-dashed border-2 border-secondary w-40 justify-center px-2 py-2 bg-blue-100 text-secondary"><Upload strokeWidth={1.5} size={16} />Upload logo</label>
            <input type="file" id="companylogo" hidden/>
        </div>

        <div className=" w-[700px] flex flex-col items-center justify-center mt-20 ">
            <div>
            <h1 className="text-xl md:text-4xl font-semibold py-4 text-black">Company Varifiaction</h1>
            </div>
            <div className="border rounded-md p-4  text-textcolor2">
            <p className="text-md py-4">Using any one of the options below, get your organization verified and start posting internships/jobs</p>

            <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                    <input type="radio" /> 
                    <h1 className="font-semibold">Company website</h1>  
                </div> 
                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="websitelink">website URL</label>
                    <input className="w-full px-2 py-2 outline-none border rounded-md" type="text" placeholder="eg: www.company.com"/>
                </div>
                <div className="flex gap-2">
                    <input type="radio" /> 
                    <h1 className="font-semibold" >Official company documents</h1>  
                </div> 
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">
                        Verify using any government-issued business registration document
                    </h1>
                    <div>
                        <label htmlFor="fileupload" className="flex font-semibold items-center gap-2 border-dashed border-2 border-secondary w-40 justify-center px-2 py-2 bg-blue-100 text-secondary"><Upload strokeWidth={1.5} size={16} />Upload</label>
                        <input type="file" id="fileupload" hidden />
                    </div>
                </div>
                <div className="flex gap-2">
                    <input type="radio" />
                    <h1 className="font-semibold" >I have none of this documnets.</h1>
                </div>

            </div>
        </div>
        </div>
 
      </div>
    </>
  );
};

export default CompanyForm2;
