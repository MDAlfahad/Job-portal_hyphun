import { useEffect, useState } from "react";
import useCompanyApplications from "../../../../Store/companyApplicationStore";
import { ExternalLink, Trash2 } from "lucide-react";

const DashboardApplicantPage = () => {
  const [changevalue, setchangevalue] = useState(true);
  const { applications, fetchCompanyApplications } = useCompanyApplications();
  const value = () => {
    setchangevalue(!changevalue);
  };
  useEffect(() => {
    fetchCompanyApplications();
  }, []);

  console.log(applications);

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
                  <th className="py-4 text-black font-semibold">Resume </th>
                  <th className="py-4 text-black font-semibold">Review </th>
                  <th className="py-4 text-black font-semibold">Status </th>
                  <th className="py-4 text-black font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((item, index) => (
                  <tr
                    key={item.id || index}
                    className="text-center w-full bg-white border"
                  >
                    <td className="py-4">{item.user_name}</td>
                    <td className="py-4">{item.job_desigination}</td>
                    <td className="py-4">
                      {item.applied_at
                        ? new Date(item.applied_at).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td>
                      <a
                        href={`http://localhost:4000/${applications.resume_path}`}
                        target="_blank"
                      >
                        View Resume
                      </a>
                    </td>
                    <td className="flex items-center justify-center gap-2">
                      Application{" "}
                      <ExternalLink size={16} className="text-secondary" />
                    </td>
                    <td className="py-4">
                      <p className="border rounded-full py-1">{item.status}</p>
                    </td>

                    <td className="py-4 items-center flex justify-center">
                      <Trash2 size={22} />
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
