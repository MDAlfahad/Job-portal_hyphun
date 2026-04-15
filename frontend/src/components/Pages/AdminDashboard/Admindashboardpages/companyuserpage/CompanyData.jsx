import { UserRound, X } from "lucide-react";
import { useState } from "react";
import Button from "../../../../Components/buttons/ButtonComponents";
import userDetaiilStore from "../../../../../Store/userDetailsStore";
import { useEffect } from "react";

const CompanyData = () => {
  const [active, setActive] = useState("green");
  const [open, setOpen] = useState(false);
  const { companies, fetchCompanies, Loading } = userDetaiilStore();
  const [changevalue, setchangevalue] = useState(true);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const value = () => {
    setchangevalue(!changevalue);
  };

  const changeto = () => {
    setActive(active === "green" ? "red" : "green");
  };

  return (
    <>
      <div className="mt-16 px-6 py-4 relative w-full h-[90vh]">
        {open && (
          <div className="p-8 border shadow-lg rounded-xl absolute bg-white top-10 left-[25%]">
            <div className="flex gap-6 items-center justify-between">
              <h1 className="text-xl md:text-2xl lg:text-4xl text-secondary font-bold">
                Create Company Account
              </h1>

              <X
                strokeWidth={2.25}
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <form className="flex flex-col gap-2 w-full mt-4">
              <label>Company Name</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="text"
              />

              <label>Company Email</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="email"
              />

              <label>Set Password</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="password"
              />

              <label>Contact Number</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="tel"
              />

              <label>Address</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="text"
              />

              <Button text="Create" />
            </form>
          </div>
        )}

        {/* Table start here */}

        <div className=" overflow-y-auto px-4">
          <div className="flex   justify-between items-center">
            <h1 className="text-xl md:text-3xl font-semibold py-6">
              Applicaitons
            </h1>
            <div>
              <h1
                onClick={() => setOpen(true)}
                className="flex gap-1 font-semibold px-3 py-2 bg-secondary rounded-md text-white cursor-pointer"
              >
                <UserRound strokeWidth={2.5} />
                Add+
              </h1>
            </div>
          </div>
          <div className="w-full border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-300 ">
                <tr>
                  <th className="py-4 text-black font-semibold">Name</th>
                  <th className="py-4 text-black font-semibold">Email</th>
                  <th className="py-4 text-black font-semibold">Created at</th>
                  <th className="py-4 text-black font-semibold">Status </th>
                  <th className="py-4 text-black font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr className="text-center w-full" key={company.user_id}>
                    <td className="py-4">{company.user_name}</td>
                    <td className="py-4">{company.user_email}</td>
                    <td className="py-4">
                      {new Date(company.created_at).toLocaleDateString()}
                    </td>
                    <td
                      className="py-4"
                      onClick={changeto}
                      style={{ color: active, borderColor: active }}
                    >
                      <p
                        className="border rounded-md py-2 flex items-center justify-center font-semibold"
                        onClick={value}
                      >
                        {changevalue ? "active" : "Deactive"}
                      </p>
                    </td>
                    <td className="py-4">
                      <p className="border rounded-md py-2 flex items-center justify-center font-semibold bg-secondary">
                        Delete
                      </p>
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

export default CompanyData;
