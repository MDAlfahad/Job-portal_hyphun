import Citydata from "../../../../API/cities.json";
const CompanyForm3 = () => {
  return (
    <>
      <div className="w-[700px] flex flex-col gap-2 items-center py-4 text-textcolor2">
        <h1 className="text-xl md:text-4xl font-semibold my-10 text-black">
          Post Job & Interships
        </h1>

        <div className="flex flex-col gap-2 border rounded-md p-4  w-full">
          <label className="font-semibold " htmlFor="designation">
            Designation
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="text"
            placeholder="Designation"
          />
          <label className="font-semibold " htmlFor="comanyname">
            ComapnyName
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="text"
            placeholder="Comapny Name"
          />
          <label htmlFor="jobtype" className="font-semibold " >Job type</label>
          <select  id="jobtype" className="border outline-none rounded-sm px-2 py-2" required>
            <option value="select">select</option> 
            <option value="workFromHome">Work form home</option> 
            <option value="remote">remote</option>
            <option value="location">location</option>
          </select>
          <label htmlFor="workingtype" className="font-semibold " >Select type</label>
          <select  id="workingtype" className="border outline-none rounded-sm px-2 py-2" required>
            <option value="select">select</option> 
            <option value="workFromHome">Job</option> 
            <option value="remote">Intership</option>
            <option value="location">Placement</option>
          </select>
        <label className="font-semibold " htmlFor="location">
            Select Location
          </label>
          <select className="border outline-none rounded-sm px-2 py-2" name="location" id="location">
            <option>e.g City name</option>
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
          />

          <label className="font-semibold " htmlFor="CTC">
            Anual CTC
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="text"
            defaultValue={"₹ "}
            placeholder="CTC amount"
          />

          <label className="font-semibold " htmlFor="experience">
            Experience
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="text"
            placeholder="experience"
          />
          <label className="font-semibold " htmlFor="lastdate">
            Apply By
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="date"
          />

          <label className="font-semibold " htmlFor="aboutthisjob">
            About this job
          </label>
          <textarea
            className="border outline-none rounded-sm px-2 py-2 min-h-40 max-h-96"
            name=""
            id="aboutthisjob"
          ></textarea>
          <label className="font-semibold " htmlFor="skillsrequired">
            Skills required
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 "
            type="text"
            placeholder="Skills required"
          />

          <label className="font-semibold " htmlFor="aboutThisCompany">
            About this company
          </label>
          <textarea
            className="border outline-none rounded-sm px-2 py-2 min-h-40 max-h-96"
            name=""
            id="aboutThisCompany"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default CompanyForm3;
