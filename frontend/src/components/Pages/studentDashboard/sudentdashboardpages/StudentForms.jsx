import { NotebookText } from "lucide-react";
import { SlNotebook } from "react-icons/sl";


const StudentForms=()=>{
    return(
        <>
        <div className="mt-20 overflow-y-auto"> 
            <div className="">
            <h1 className="text-xl md:text-3xl font-semibold py-6">Applicaitons</h1>
            </div>
            <div className="w-full border rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-white border">
                        <tr>
                            <th className="py-4 text-black font-semibold">Company</th>
                            <th className="py-4 text-black font-semibold">Profile</th>
                            <th className="py-4 text-black font-semibold">Applied on</th>
                            <th className="py-4 text-black font-semibold">Apllication <br /> Status</th>
                            <th className="py-4 text-black font-semibold">Review <br /> applicaiton</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center w-full bg-white border">
                           <td className="py-4">Techowear</td>
                           <td className="py-4">Fronetend developer</td>
                           <td className="py-4">20/12/2024</td>
                           <td className="py-4"><p className="border rounded-full py-1">Pending</p></td>
                           <td className="py-4 items-center flex justify-center"><SlNotebook size={22} className="text-blue-400 "/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default StudentForms;