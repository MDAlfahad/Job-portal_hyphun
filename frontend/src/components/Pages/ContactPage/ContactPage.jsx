import FooterContainer from "../HeroContaner/FooterContainer";
import FaqsPage from "./FaqsPage";


const ContactPage = () => {
  return (
    <>
      <div className=" pt-9 md:pt-20 px-6 w-full md:px-12 md:flex justify-center items-center md:h-[100vh] max-w-[1800px] m-auto contactBackground relative">
        <div className="md:flex md:ml-52 py-10 md:0 w-full justify-between items-center">
          <div className="flex flex-col gap-1 bg-white py-5">
            <span className="font-medium text-[12px] flex items-center">
              Email:
              <p className="font-light">alfahadkhan715@gamil.com</p>
            </span>
            <span className="font-medium text-[12px] flex items-center">
              Contact: <p className="font-light">+91 6260379325</p>
            </span>
            <span className="font-medium text-[12px] ">
              Address:
              <p className="font-light ">
                Near, Rungta College of engineering and <br /> technology kokha
                kurud Bhilai - CG 490024
              </p>
            </span>
          </div>
          <div className=" flex flex-col md:w-[450px] bg-white py-10">
            <div className="leading-6 ">
                <h1 className="text-[30px]">Need help ?</h1>
            <p className="text-[14px] font-light">Contact us for further assistance </p>
            </div>
            <form action="submit" className="flex flex-col gap-2 py-4 w-full text-[14px]">
              <label htmlFor="name">Name</label>
              <input className="border border-textcolor rounded-sm px-2 py-2 outline-none w-full" type="text" id="name" />
              <label htmlFor="email">Email</label>
              <input className="border border-textcolor rounded-sm px-2 py-2 outline-none" type="email" id="email" />
              <label htmlFor="contact">Contact Number</label>
              <input className="border border-textcolor rounded-sm px-2 py-2 outline-none" type="tel" id="contact" />
              <label htmlFor="message">Your Message</label>
              <textarea className="md:min-w-[450px] min-h-28 max-h-48 border border-textcolor outline-none rounded-sm p-2" name="message" id="message"></textarea>
              <button className="p-2  bg-secondary hover:bg-textcolor text-white rounded-sm transition duration-300" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <FaqsPage/>
      <FooterContainer/>
    </>
  );
};

export default ContactPage;
