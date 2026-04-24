import { ConciergeBell, SquarePen, X } from "lucide-react";
import Logo from "../../../images/image.webp";
import Button from "../../../Components/buttons/ButtonComponents";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import useAuthStore from "../../../../Store/userAuth";
const StudentProfilePage = () => {
  const API_CALL = `http://localhost:4000`;

  const [EditShow, EditSetShow] = useState(false);
  const [editbio, seteditbio] = useState(false);
  const { user } = useAuthStore();
  const [showData, setShowData] = useState([]);
  const [image, setImage] = useState(null);

  const [isData, setIsData] = useState({
    name: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    setIsData({
      ...isData,
      [e.target.name]: e.target.value,
    });
  };
  const handlEvent = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_CALL}/api/user-details`, isData);
    } catch (err) {
      console.log(err);
    }
  };
  // show and uplaod image
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };
  const handleUpload = async () => {
    if (!image) return alert("Select Image ");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("userId", user?.user_id);

    try {
      const res = await axios.post(`${API_CALL}/api/upload_photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Photo Uploaded");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" mt-10 md:mt-20 md:mx-10 relative">
        {/* edit profile card  */}
        {EditShow && (
          <div className="flex w-96 flex-col gap-4 absolute border p-4 rounded-xl bg-white top-32 right-1/3 shadow-xl    ">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Edit Profile</h1>
              <span
                className="cursor-pointer"
                onClick={() => EditSetShow(false)}
              >
                <X strokeWidth={1.5} />
              </span>
            </div>
            <form
              action="submit"
              onSubmit={handlEvent}
              className="flex flex-col gap-2"
            >
              <input
                className="px-2 py-2 border rounded-md"
                type="text"
                name="name"
                value={isData.name}
                placeholder="Your Name"
                onChange={handleChange}
              />
              {/* sidabled the emai upadation  */}
              {/* <input
                className="px-2 py-2 border rounded-md"
                type="text"
                name="email"
                value={isData.email}
                placeholder="Your Email"
              
                onChange={handleChange}
              /> */}
              <input
                className="px-2 py-2 border rounded-md"
                type="tel"
                name="contact"
                value={isData.contact}
                placeholder="Your Phone number"
                onChange={handleChange}
              />
              <input
                className="px-2 py-2 border rounded-md"
                type="text"
                name="address"
                value={isData.address}
                placeholder="Address"
                onChange={handleChange}
              />
              <Button text="Save profile" />
            </form>
          </div>
        )}

        {/* edit bio  */}

        {editbio && (
          <div className="flex w-96 flex-col gap-4 absolute border p-4 rounded-xl bg-white top-72 right-1/3 shadow-xl  ">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Edit Bio</h1>
              <span
                className="cursor-pointer"
                onClick={() => seteditbio(false)}
              >
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
        <h1 className="text-2xl md:text-4xl font-semibold py-10">
          Profile <span className="text-secondary"> {user.user_name}</span>
        </h1>
        <div>
          <div className="w-full md:flex px-6 py-2 md:p-12 bg-white rounded-md md:rounded-xl justify-around ">
            <div className="flex flex-col items-center gap-2 ">
              <div className=" w-[150px] h-[150px] overflow-hidden bg-gray-200 rounded-lg object-cover">
                <img
                  className="w-full h-full object-cover"
                  src={`${API_CALL}/uploads/${user?.user_image}`}
                  alt="profile"
                />
              </div>
              <div>
                <input
                  type="file"
                  id="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <label
                  className="text-md font-light border border-secondary text-secondary  px-2 py-1 rounded-md mr-2"
                  htmlFor="file"
                >
                  Choose
                </label>
                <button
                  onClick={handleUpload}
                  className="mt-2 bg-secondary text-white px-2 py-1 rounded-md"
                >
                  Upload
                </button>
              </div>
            </div>
            <div>
              {/* profile  */}
              <div className=" flex items-center justify-between mt-4 md:mt-12 mb-2 md:mb-6">
                <h1 className="text-xl font-semibold">Personal Info</h1>

                <span
                  className="flex items-center gap-2 border rounded-md p-1 cursor-pointer "
                  onClick={() => EditSetShow(!EditShow)}
                >
                  <SquarePen strokeWidth={1.5} size={18} /> <p>Edit</p>
                </span>
              </div>
              <div className="md:flex gap-8 items-center ">
                <div>
                  <label className="text-textcolor2" htmlFor="name">
                    Name
                  </label>
                  <p>{user?.user_name}</p>
                </div>
                <div>
                  <label className="text-textcolor2" htmlFor="email">
                    Email
                  </label>
                  <p>{user?.user_email}</p>
                </div>
                <div>
                  <label className="text-textcolor2" htmlFor="phone">
                    Phone
                  </label>
                  <p>(+91) {user?.user_contact}</p>
                </div>
                <div>
                  <label className="text-textcolor2" htmlFor="address">
                    Address
                  </label>
                  <p>{user?.user_address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-xl py-4 px-4 md:p-12 my-6 bg-white">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Bio</h1>
              <span
                className="flex items-center gap-2 border rounded-md  p-1 cursor-pointer"
                onClick={() => seteditbio(!editbio)}
              >
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
