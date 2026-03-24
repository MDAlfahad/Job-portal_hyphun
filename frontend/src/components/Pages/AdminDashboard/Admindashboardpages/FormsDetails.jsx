import { useState } from "react";

const FormsDetails = () => {

   const[active, setActive] = useState('green');

        const changeto= ()=>{
             setActive(active === "green"? "red": "green")
        }
  return (
    <>
       <div className="mt-20 overflow-y-auto px-4"> 
            <div className="">
            <h1 className="text-xl md:text-3xl font-semibold py-6">Total Forms</h1>
            </div>
            <div className="w-full border rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-300 ">
                        <tr>
                            <th className="py-4 text-black font-semibold">Email</th>
                            <th className="py-4 text-black font-semibold">Company name</th>
                            <th className="py-4 text-black font-semibold">Student Name</th>
                            <th className="py-4 text-black font-semibold">Apllication <br /> Status</th>
                            <th className="py-4 text-black font-semibold">Review <br /> applicaiton</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center w-full">
                           <td className="py-4">Techowear</td>
                           <td className="py-4">Fronetend developer</td>
                           <td className="py-4">20/12/2024</td>
                           <td className="py-4"><p className="border rounded-md py-2 flex items-center justify-center font-semibold"  onClick={changeto} style={{color: active, borderColor:active}}>pending</p></td>
                           <td className="py-4"><p className="border rounded-md py-2 flex items-center justify-center font-semibold bg-secondary text-white"  >review</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
};

export default FormsDetails;
