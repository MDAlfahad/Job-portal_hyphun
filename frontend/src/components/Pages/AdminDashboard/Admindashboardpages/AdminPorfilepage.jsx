import { UserRoundPen } from "lucide-react";

const AdminProfilePage = () => {
  return (
    <>
      <div className="bg-gray-100 w-full h-[100vh] overflow-y-auto px-6 py-6">
        <div className="mt-20  px-6 py-4 rounded-xl">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-1 justify-center items-center border text-white rounded-2xl px-12 py-12 bg-secondary shadow-lg">
              <h1 className="text-xl md:text-3xl">Total user</h1>
              <h2 className="text-xl md:text-4xl font-bold">100+</h2>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center border text-white rounded-2xl px-12 py-12 bg-secondary shadow-lg">
              <h1 className="text-xl md:text-3xl"> Companies</h1>
              <h2 className="text-xl md:text-4xl font-bold">100+</h2>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center border text-white rounded-2xl px-12 py-12 bg-secondary shadow-lg">
              <h1 className="text-xl md:text-3xl">Total Froms</h1>
              <h2 className="text-xl md:text-4xl font-bold">100+</h2>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center border text-white rounded-2xl px-12 py-12 bg-secondary shadow-lg">
              <h1 className="text-xl md:text-3xl"> Job posted</h1>
              <h2 className="text-xl md:text-4xl font-bold">100+</h2>
            </div>
          </div>
          <div className="my-4 border px-6 py-6 bg-white rounded-xl shadow-lg">
            <div className="flex justify-between py-1 items-center">
              <h1 className="text-xl md:text-3xl">Profile</h1>
              <span className="flex  items-center gap-2 border px-1 py-1 rounded-lg">
                <UserRoundPen strokeWidth={1.5} />
                <p>Edit</p>
              </span>
            </div>
            <div className="flex  gap-8">
              <div>
                <p className="text-xl text-textcolor2">Name</p>
                <p className="text-lg">Alfahad khan</p>
              </div>
              <div>
                <p className="text-xl text-textcolor2">Email</p>
                <p className="text-lg">alfahadkhan715@gamil.com</p>
              </div>
              <div>
                <p className="text-xl text-textcolor2">Phone number</p>
                <p className="text-lg">+91 6260379325</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfilePage;
