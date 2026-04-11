import { useEffect, useState } from "react";
import useCompanyApplications from "../../../../Store/companyApplicationStore";
import { CircleDot, ClockFading, ExternalLink, Trash2 } from "lucide-react";
import Button from "../../../Components/buttons/ButtonComponents";

const DashboardApplicantPage = () => {
  const [changevalue, setchangevalue] = useState(false);
  const { applications, fetchCompanyApplications } = useCompanyApplications();
  const [status, setStatus] = useState("");
  const value = () => {
    setchangevalue(!changevalue);
  };
  useEffect(() => {
    fetchCompanyApplications();
  }, []);

  console.log(applications);

  return (
    <>
      <div className="mt-16 px-6 py-4 relative w-full h-[90vh] capitalize">
        {/* Table start here */}

        <div className=" overflow-y-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-semibold py-6">
              Applicaitons
            </h1>
          </div>
          <div className="w-full border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-300 w-full ">
                <tr>
                  <th className="py-4 text-black font-semibold">
                    Candidate Name
                  </th>
                  <th className="py-4 text-black font-semibold">
                   email
                  </th>
                  <th className="py-4 text-black font-semibold">Designation</th>
                  <th className="py-4 text-black font-semibold">Date</th>

                  <th className="py-4 text-black font-semibold">Resume </th>  
                  <th className="py-4 text-black font-semibold">Status </th>
                  <th className="py-4 text-black font-semibold">Action</th>
                </tr>
              </thead>
              {/* table body  */}
              <tbody>
                {applications.map((item, index) => (
                  <tr
                    key={item.id || index}
                    className="text-center w-full bg-white border-b"
                  >
                    <td className="py-4">{item.user_name}</td>
                    <td className="py-4 ">{item.user_email}</td>
                    <td className="py-4">{item.job_desigination}</td>
                    <td className="py-4">
                      {item.applied_at
                        ? new Date(item.applied_at).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td>
                      <a
                        href={`http://localhost:4000/uploads/${item.resume_path}`}
                        target="_blank"
                        className="flex items-center gap-2 justify-center underline hover:bg-secondary hover:text-white border border-secondary py-1 rounded-lg text-secondary"
                      >
                        Open{" "}
                        <ExternalLink size={16}  />
                      </a>
                    </td>
                    
                    <td className="py-4">
                      <p
                        className={`border rounded-lg py-1 flex items-center gap-2 justify-center ${item.status == "pending" ? "border-red-500 text-red-500" : "border-green-500 text-green-500"}`}
                      >
                       {item.status==="pending" ? <ClockFading size={14}/> : ""} {item.status}
                      </p>
                    </td>

                    <td className="py-4 items-center flex justify-center gap-1">
                      {status === "" && (
                        <span className="flex items-center gap-1">
                          <p
                            onClick={() => setStatus("accepted")}
                            className="border rounded-lg border-green-500 px-2 py-1 text-green-500 cursor-pointer"
                          >
                            Accept
                          </p>
                          <p
                            onClick={() => setStatus("Rejected")}
                            className="border rounded-lg border-red-500 px-2 py-1 text-red-500 cursor-pointer"
                          >
                            Reject
                          </p>
                        </span>
                      )}
                      {status === "accepted" && (
                        <p className="border rounded-lg border-green-500 px-2 py-1 font-semibold text-green-500 cursor-pointer">
                          Accepted
                        </p>
                      )}
                      {status === "Rejected" && (
                        <p className="border rounded-lg font-semibold border-red-500 px-2 py-1 text-red-500 cursor-pointer">
                          Rejected
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardApplicantPage;
