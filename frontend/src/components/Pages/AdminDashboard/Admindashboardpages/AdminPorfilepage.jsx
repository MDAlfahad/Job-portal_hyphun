import { UserRoundPen } from "lucide-react";
import AdminProfileCard from "./adminprofilepagecard/AdminPorfilecard";

const AdminProfilePage = () => {
  return (
    <>
      <div className="bg-gray-100 w-full h-[100vh] overflow-y-auto px-6 py-6">
        <div className="mt-20  px-6 py-4 rounded-xl">
          <div className="flex justify-between items-center ">
            <AdminProfileCard 
            heading="Total user"
            number="100+"
            text="Toal Active user"/>
            <AdminProfileCard
            heading="Total Companies"
            number="100+"
            text="Toal Active Companies"/>
            <AdminProfileCard
            heading="Total forms"
            number="100+"
            text="Toal forms"/>
            <AdminProfileCard
            heading="Total Job posted"
            number="100+"
            text="Toal posted job"/>
          </div>
          <div className="my-4 border px-6 py-6 bg-white rounded-xl shadow-lg">
            <div className="flex justify-between py-1 items-center">
              <h1 className="text-xl md:text-3xl">Profile</h1>
              <span className="flex  items-center gap-2 border px-1 py-1 rounded-lg">
                <UserRoundPen strokeWidth={1.5} />
                <p>Edit</p>
              </span>
            </div>
            <div className="flex  gap-20 px-2">
              <div>
                <p className="text-md text-textcolor2">Name</p>
                <p className="text-lg font-semibold p-1">Alfahad khan</p>
              </div>
              <div>
                <p className="text-md text-textcolor2">Email</p>
                <p className="text-lg font-semibold p-1">alfahadkhan715@gamil.com</p>
              </div>
              <div>
                <p className="text-md text-textcolor2">Phone number</p>
                <p className="text-lg font-semibold p-1">+91 6260379325</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfilePage;
