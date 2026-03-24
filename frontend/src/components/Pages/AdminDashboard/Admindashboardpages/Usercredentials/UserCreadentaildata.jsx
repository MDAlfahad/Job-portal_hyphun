import { useState } from "react";

const UserCredentialdata = () => {

        const[active, setActive] = useState('green');

        const changeto= ()=>{
             setActive(active === "green"? "red": "green")
        }

  return (
    <>
      <div className="mt-20 px-6 w-full h-[80vh] overflow-y-auto">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold my-4">
            Users Details
          </h1>
        </div>
        <div className="flex w-full mt-10">
          <table className="w-full ">
            <thead className="flex w-full bg-secondary text-white  rounded-md px-6 py-2" >
              <tr className="flex justify-between w-full text-center">
                <th>Name</th>
                <th>Email</th>
                <th>role</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="flex w-fullrounded-md px-6 py-2 my-4 rounded-md bg-gray-200"> 
                <tr className="flex justify-between w-full ">
                    <td>Alfahad</td>
                    <td>alfahadkhan715@gmail.com</td>
                    <td>User</td>
                    <td onClick={changeto} style={{background: active}} className="font-semibold bg-primary  px-4 py-1 rounded-md text-white">Active</td>
                    <td className="px-2 py-1 rounded-md bg-secondary">Delete</td>
                </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
};

export default UserCredentialdata;
