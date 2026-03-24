import { UserRound, X } from "lucide-react";
import { useState } from "react";
import Button from "../../../../Components/buttons/ButtonComponents";

const CompanyData = () => {
  const [active, setActive] = useState("green");
  const [open, setOpen] = useState(false);

  const [changevalue, setchangevalue] = useState(false);

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

        <div className="flex justify-between py-4 ">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Company details
          </h1>

          <h1
            onClick={() => setOpen(true)}
            className="flex gap-1 font-semibold px-3 py-2 bg-secondary rounded-md text-white cursor-pointer"
          >
            <UserRound strokeWidth={2.5} />
            Add+
          </h1>
        </div>

        {/* Table start here */}
        <div>
          <table className="w-full">
            <thead className="flex w-full bg-secondary text-white rounded-md px-6 py-2">
              <tr className="flex justify-between w-full text-center">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="flex w-full px-6 py-2 my-4 rounded-md bg-gray-200">
              <tr className="flex justify-between w-full">
                <td className="font-semibold">Simen pvt.Ltd</td>
                <td>Simen@company.com</td>
                <td>Company</td>

                <td
                  onClick={changeto}
                  style={{ background: active }}
                  className="font-semibold px-4 py-1 rounded-md text-white cursor-pointer"
                >
                  <p onClick={value}>{changevalue ? "active" : "Deactive"}</p>
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

export default CompanyData;
