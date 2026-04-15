import { Dot, NotebookText } from "lucide-react";
import { useState } from "react";
import userDetaiilStore from "../../../../../Store/userDetailsStore";
import { useEffect } from "react";

const UserCredentialdata = () => {
  const [changevalue, setchangevalue] = useState(true);
  const { users, fetchUsers, loading } = userDetaiilStore();
  useEffect(() => {
    fetchUsers();
  }, []);

  const value = () => {
    setchangevalue(!changevalue);
  };

  const [active, setActive] = useState("green");

  const changeto = () => {
    setActive(active === "green" ? "red" : "green");
  };

  return (
    <>
      <div className="mt-20 px-2 sm:px-4">
        <div>
          <h1 className="text-lg sm:text-xl md:text-3xl font-semibold py-4 md:py-6 text-center sm:text-left">
            Applications
          </h1>
        </div>

        <div className="w-full border rounded-xl overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-300">
              <tr>
                <th className="py-3 md:py-4 text-black font-semibold text-sm md:text-base">
                  Name
                </th>
                <th className="py-3 md:py-4 text-black font-semibold text-sm md:text-base">
                  Email
                </th>
                <th className="py-3 md:py-4 text-black font-semibold text-sm md:text-base">
                  Created at
                </th>
                <th className="py-3 md:py-4 text-black font-semibold text-sm md:text-base">
                  Status
                </th>
                <th className="py-3 md:py-4 text-black font-semibold text-sm md:text-base">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user)=>(
                <tr className="text-center" key={user.user_id} >
                <td className="py-3 md:py-4 text-sm md:text-base">
                 {user.user_name}
                </td>

                <td className="py-3 md:py-4 text-sm md:text-base break-words">
                  {user.user_email}
                </td>

                <td className="py-3 md:py-4 text-sm md:text-base">
                 {new Date(user.created_at).toLocaleDateString()}
                </td>

                <td
                  className="py-3 md:py-4"
                  onClick={changeto}
                  style={{ color: active, borderColor: active }}
                >
                  <p
                    className="border rounded-md py-1 md:py-2 px-2 flex items-center justify-center font-semibold text-sm md:text-base cursor-pointer"
                    onClick={value}
                  >
                    {changevalue ? "Active" : "Deactive"}
                  </p>
                </td>

                <td className="py-3 md:py-4">
                  <p className="border rounded-md py-1 md:py-2 px-2 flex items-center justify-center font-semibold bg-secondary text-white text-sm md:text-base cursor-pointer">
                    Delete
                  </p>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserCredentialdata;
