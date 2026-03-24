import { UserRound, X } from "lucide-react";
import { useState } from "react";
import Button from "../../../Components/buttons/ButtonComponents";

const FormsDetails = () => {
  return (
    <>
      <div className="mt-16 px-6 py-4 relative w-full h-[90vh]">
        <div className="flex justify-between py-4 ">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Applied forms
          </h1>
        </div>

        {/* Table start here */}
        <div>
          <table className="w-full">
            <thead className="flex w-full bg-secondary text-white rounded-md px-6 py-2">
              <tr className="flex justify-between w-full text-center">
                <th>Name</th>
                <th>Position</th>
                <th>location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="flex w-full px-6 py-2 my-4 rounded-md bg-gray-200">
              <tr className="flex justify-between w-full">
                <td className="font-semibold">Simen pvt.Ltd</td>
                <td>frontend Developer</td>
                <td>Remote</td>

                <td className="font-semibold px-4 py-1">
                  Not Selected
                </td>

                <td className="px-2 py-1 rounded-md bg-secondary text-white font-semibold cursor-pointer">
                  Remove
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormsDetails;
