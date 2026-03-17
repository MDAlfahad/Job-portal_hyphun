import { SquarePen, X } from "lucide-react";
import Logo from "../../../images/background.png";
import Button from "../../../Components/buttons/ButtonComponents";
import { useState } from "react";
const StudentProfilePage = () => {
  const [EditShow, EditSetShow] = useState(false);
  const [editbio, seteditbio] = useState(false);

  return (
    <>
      <div className="mt-16 mx-10  h-[80vh]  overflow-y-auto relative">
        {/* edit profile card  */}
        {EditShow && (
          <div className="flex w-96 flex-col gap-4 absolute border p-4 rounded-xl bg-white top-32 right-1/3 shadow-xl    ">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Edit Profile</h1>
              <span className="cursor-pointer" onClick={() => EditSetShow(false)}>
                <X strokeWidth={1.5} />
              </span>
            </div>
            <form action="submit" className="flex flex-col gap-2">
              <input
                className="px-2 py-2 border rounded-md"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                className="px-2 py-2 border rounded-md"
                type="text"
                placeholder="Your Email"
                required
              />
              <input
                className="px-2 py-2 border rounded-md"
                type="text"
                placeholder="Your Phone nUmber"
                required
              />
              <Button text="Save profile" />
            </form>
          </div>
        )}

        {/* edit bio  */}

        {editbio && (
          <div className="flex w-96 flex-col gap-4 absolute border p-4 rounded-xl bg-white top-72 right-1/3 shadow-xl    ">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Edit Bio</h1>
              <span className="cursor-pointer" onClick={() => seteditbio(false)}>
                <X strokeWidth={1.5} />
              </span>
            </div>
            <form action="submit" className="flex flex-col gap-2">
              <textarea
                className="px-2 py-2 border rounded-md"
                type="text"
                placeholder="Your Bio"
                req
                uired
              />
              <Button text="Save profile" />
            </form>
          </div>
        )}
        {/* profile  */}
        <h1 className="text-2xl md:text-4xl font-semibold py-4">
          Edit Profile
        </h1>
        <div className="bg-white rounded-2xl p-6">
          <div className="w-full flex p-6">
            <div className="rounded-full w-[150px] h-[150px] overflow-hidden border object-cover">
              <img width={200} height={200} src={Logo} alt="" />
            </div>
            <div>
              <input type="file" id="file" hidden />
              <label
                className="mx-10 mt-6 border px-2 py-1 rounded-md"
                htmlFor="file"
              >
                Upload new photo
              </label>
            </div>
          </div>
          <hr className="my-6" />
          <div className="border rounded-xl p-6 ">
            {/* profile  */}
            <div className=" flex items-center justify-between">
              <h1 className="text-xl font-semibold">Personal Info</h1>
              <span
                className="flex items-center gap-2 border rounded-md p-1 cursor-pointer"
                onClick={() => EditSetShow(!EditShow)}
              >
                <SquarePen strokeWidth={1.5} size={18} /> <p>Edit</p>
              </span>
            </div>
            <div className="flex gap-8 items-center mt-6">
              <div>
                <label className="text-textcolor2" htmlFor="name">
                  Name
                </label>
                <p>Alfahad khan</p>
              </div>
              <div>
                <label className="text-textcolor2" htmlFor="email">
                  Email
                </label>
                <p>alfahadkhan715@gamil.com</p>
              </div>
              <div>
                <label className="text-textcolor2" htmlFor="phone">
                  Phone
                </label>
                <p>(+91) 6260379325</p>
              </div>
            </div>
          </div>
          <div className="border rounded-xl p-6 my-6">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Bio</h1>
              <span className="flex items-center gap-2 border rounded-md  p-1 cursor-pointer"onClick={()=> seteditbio(!editbio)}>
                <SquarePen strokeWidth={1.5} size={18} />
                <p>Edit bio</p>
              </span>
            </div>
            <p className="my-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              quaerat fugiat, ipsum, dolores placeat eligendi deserunt
              asperiores cumque ex nostrum non earum. Voluptatibus error cum
              blanditiis veniam maxime debitis officiis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfilePage;
