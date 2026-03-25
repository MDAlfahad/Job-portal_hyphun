import { useState } from "react";

const DashboardApplicantPage = () => {
  const [changevalue, setchangevalue] = useState(true);

  const value = () => {
    setchangevalue(!changevalue);
  };

  return (
    <>
      <div className="mt-16 px-6 py-4 relative w-full h-[90vh]">
        {/* Table start here */}

        <div className=" overflow-y-auto px-4">
          <div className="flex   justify-between items-center">
            <h1 className="text-xl md:text-3xl font-semibold py-6">
              Applicaitons
            </h1>
          </div>
          <div className="w-full border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-300 ">
                <tr>
                  <th className="py-4 text-black font-semibold">
                    Candidate Name
                  </th>
                  <th className="py-4 text-black font-semibold">Designation</th>
                  <th className="py-4 text-black font-semibold">Apply Date </th>
                  <th className="py-4 text-black font-semibold">Review </th>
                  <th className="py-4 text-black font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center w-full">
                  <td className="py-4">Techowear</td>
                  <td className="py-4">Fronetend developer</td>
                  <td className="py-4">20/12/2024</td>
                  <td>
                    <p
                      className="border rounded-md py-2 flex items-center justify-center font-semibold"
                      onClick={value}
                    >
                      Review
                    </p>
                  </td>
                  <td className="py-4">
                    <p className="border rounded-md py-2 flex items-center justify-center font-semibold bg-secondary">
                      Delete
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardApplicantPage;
