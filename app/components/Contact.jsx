import React from "react";
import Image from "next/image";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="bg-[#F9F9F9] pt-[200px]">
      <div className="mt-[40px] gap-[20px]">
        <div className="text-[#235160] bg-[#FFFFFF] flex">
          <Image src={contact} width={960} alt="" />
          <div className="mt-[130px] mx-[85px]">
            <h1 className="text-[64px] uppercase">Contact Upscale Linen</h1>
            <form className="w-full flex flex-col gap-[40px] mt-[40px]">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full placeholder-[#464646] text-[20px] border-b-[1px]"
              />
              <div className="flex gap-[20px]">
                <input
                  type="text"
                  placeholder="Purchasing Contact Name"
                  className="w-[50%] placeholder-[#464646] text-[20px] border-b-[1px]"
                />
                <input
                  type="text"
                  placeholder="Purchasing Contact Email"
                  className="w-[50%] placeholder-[#464646] text-[20px] border-b-[1px]"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                className="placeholder-[#464646] text-[20px] border-b-[1px]"
              />
              <input
                type="text"
                placeholder="Address"
                className="placeholder-[#464646] text-[20px] border-b-[1px]"
              />
              <input
                type="text"
                placeholder="No of Rooms"
                className="placeholder-[#464646] text-[20px] border-b-[1px]"
              />
              <button className="bg-[#235160] text-white text-[32px] py-[10px]">
                Send Massege
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
