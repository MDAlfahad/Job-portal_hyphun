import { AtSign, MapPin, PhoneCall } from "lucide-react";

const ContactContainer = () => {
  return (
    <>
      <div className="w-full max-w-[1800px] m-auto md:px-12 px-4  py-4 md:py-20 svgbackground">
        <div className="md:flex items-center justify-center md:h-[90vh] lg:h-auto ">
          <div className="md:w-1/2 flex flex-col gap-3">
            <h1 className="text-3xl md:text-5xl lg:text-6xl">Contact Us</h1>
            <p className="text-sm md:text-lg leading-normal">
              We are Committed to processing the information in order to contact
              you and talk about your Jobs.
            </p>
            <div className="flex flex-col gap-3 pt-20">
                <a className="flex gap-3 text-sm md:text-xl items-center max-w-fit" href="mailto:alfahadkhan715@gamil.com">
              <AtSign strokeWidth={1.5} size={22} className="text-secondary "/> alfahadkhan715@gmail.com
            </a>
            <p  className="flex gap-3 text-sm md:text-xl items-center" >
              <MapPin strokeWidth={1.5} className="text-secondary "/>
              Bhilai, Chhattisgarh, India 490024
            </p>
            <p  className="flex gap-3 text-sm md:text-xl items-center" >
              <PhoneCall strokeWidth={1.5} className="text-secondary "/> +91 6260379325
            </p>
            </div>
          </div>
          <div className=" h-full md:w-1/2 mt-10 md:mt-0 ">
            <form action="submit" className="h-full w-full flex flex-col gap-5 items-center justify-center">
              <input className="w-full px-4 py-2 border rounded-lg outline-none" type="text" placeholder="Name" />
              <input className="w-full px-4 py-2 border rounded-lg outline-none" type="email" placeholder="Email" />
              <input className="w-full px-4 py-2 border rounded-lg outline-none" type="tel" placeholder="Number" />
              <textarea className="w-full px-4 py-2 border rounded-lg max-h-[500px] min-h-[100px] outline-none" id="textarea" placeholder="Your Message">
              </textarea>
              <button className="w-full px-4 py-2 border rounded-xl font-semibold hover:text-white bg-secondary hover:bg-textcolor transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
