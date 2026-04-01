import { useState } from "react";
import Citydata from "../../../../API/cities.json";
import axios from "axios";
import Button from "../../../Components/buttons/ButtonComponents";

const CompanyForm3 = () => {
  //routing job post data;

  const API_CALL = `http://localhost:4000`;

  const [isForm, setIsForm] = useState({
    desigination: "",
    companyname: "",
    selecttype: "",
    jobtype: "",
    location: "",
    startdate: "",
    annualCTC: "",
    experience: "",
    applyby: "",
    aboutthisjob: "",
    skills: "",
    aboutcompany: "",
  });

  const handleChange = (e) => {
    setIsForm({
      ...isForm,
      [e.target.id]: e.target.value,
    });
  };

  const handlEvent = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_CALL}/api/postjob`, isForm);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to submit data");
    }
  };

  return (
    <>
      <form
        className="w-[700px] flex flex-col gap-2 items-center py-4 text-textcolor2"
        onSubmit={handlEvent}
      >
        <h1 className="text-xl md:text-4xl font-semibold my-10 text-black">
          Post Job & Interships
        </h1>

        <div className="flex flex-col gap-2 border rounded-md p-4  w-full">
          <label className="font-semibold " htmlFor="designation">
            Designation
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            id="desigination"
            type="text"
            value={isForm.desigination}
            placeholder="Designation"
            onChange={handleChange}
          />
          <label className="font-semibold " htmlFor="companyname">
            ComapnyName
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="text"
            id="companyname"
            value={isForm.companyname}
            placeholder="Comapny Name"
            onChange={handleChange}
          />
          <label htmlFor="jobtype" className="font-semibold ">
            Job type
          </label>
          <select
            id="selecttype"
            className="border outline-none rounded-sm px-2 py-2"
            value={isForm.selecttype}
            onChange={handleChange}
            required
          >
            <option value="select"></option>
            <option value="workFromHome">Work form home</option>
            <option value="remote">remote</option>
            <option value="location">location</option>
          </select>
          <label htmlFor="selecttype" className="font-semibold ">
            Select type
          </label>
          <select
            id="jobtype"
            className="border outline-none rounded-sm px-2 py-2"
            value={isForm.jobtype}
            onChange={handleChange}
            required
          >
            <option value="select"></option>
            <option value="workFromHome">Job</option>
            <option value="remote">Intership</option>
            <option value="location">Placement</option>
          </select>
          <label className="font-semibold " htmlFor="location">
            Select Location
          </label>
          <select
            className="border outline-none rounded-sm px-2 py-2"
            id="location"
            value={isForm.location}
            onChange={handleChange}
          >
            <option></option>
            {Citydata &&
              Citydata.cities.map((item, index) => (
                <option key={index} value={item.city} className="px-2 py-2">
                  {item.city}
                </option>
              ))}
          </select>

          <label className="font-semibold " htmlFor="startdate">
            Start date
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="date"
            id="startdate"
            value={isForm.startdate}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="annualCTC">
            Anual CTC
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="text"
            placeholder="CTC amount"
            id="annualCTC"
            value={isForm.annualCTC}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="experience">
            Experience
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="text"
            placeholder="experience"
            id="experience"
            value={isForm.experience}
            onChange={handleChange}
          />
          <label className="font-semibold " htmlFor="applyby">
            Apply By
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="date"
            id="applyby"
            value={isForm.applyby}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="aboutthisjob">
            About this job
          </label>
          <textarea
            className="border outline-none rounded-sm px-2 py-2 min-h-40 max-h-96"
            id="aboutthisjob"
            value={isForm.aboutthisjob}
            onChange={handleChange}
          ></textarea>
          <label className="font-semibold " htmlFor="skills">
            Skills required
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="text"
            id="skills"
            placeholder="Skills required"
            value={isForm.skills}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="aboutcompany">
            About this company
          </label>
          <textarea
            className="border outline-none rounded-sm px-2 py-2 min-h-40 max-h-96"
            value={isForm.aboutcompany}
            id="aboutcompany"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <Button text="Submit" type="submit"/>
        </div>
      </form>
    </>
  );
};

export default CompanyForm3;
