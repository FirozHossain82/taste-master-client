import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import ContactFrom from "./ContactFrom.jsx";

const Contact = () => {
  return (
    <div className="container mx-auto px-3 sm:px-6">
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/hLhZCD2/contact-banner.jpg)`,
        }}
        className="h-[60vh] flex justify-center items-center bg-[#a78787] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
      >
        <h2 className="font-bold font-sans text-4xl text-orange-600">Contact</h2>
      </div>
      <div className="py-28">
        <div className="w-full max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] justify-center items-center gap-6">
            <div>
              <div className="mb-6">
                <p className="md:text-xl mb-4">GET IN TOUCH</p>
                <h2 className="text-3xl lg:text-[40px] uppercase mb-4 font-semibold">
                  Send us a Message
                </h2>
              </div>
              <ContactFrom></ContactFrom>
            </div>
            <div className=" flex items-center flex-col gap-8">
              {/* card 1 */}
              <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 rounded-tl-[30px] rounded-br-[30px] items-center border shadow-md w-full lg:w-fit p-5">
                <div className="bg-blue-800 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold font-serif">Location</h4>
                  <p className="text-base">Mirpur1,Dhaka1216</p>
                  <p className="text-base">Bangladesh</p>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 rounded-tl-[30px] rounded-br-[30px] items-center border shadow-md w-full lg:w-fit p-5">
                <div className="bg-blue-800 p-3 rounded-full">
                  <FaPhoneAlt className="text-3xl text-white" />
                </div>
                <div className="">
                  <h4 className="text-2xl font-bold font-serif ">Phone</h4>
                  <p className="text-base">Phone:01637099999</p>
                  <p className="text-base">Bangladesh</p>
                </div>
              </div>
              {/* card 3 */}
              <div className="flex flex-col lg:flex-row text-center lg:text-left gap-5 rounded-tl-[30px] rounded-br-[30px] items-center border shadow-md w-full lg:w-fit p-5">
                <div className="bg-blue-800 p-3 rounded-full">
                  <FaTelegramPlane className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Email</h4>
                  <p className="text-base">firozhossain@gamil.com</p>
                  <p className="text-base">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
