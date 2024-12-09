import Image from "next/image";
import React from "react";
import description1 from "../assets/description1.png";
import description2 from "../assets/description2.png";

const DescriptionRooms = () => {
  return (
    <div className="bg-[#F9F9F9] pt-[130px]">
      <h1 className="text-[24px] flex justify-center">
        Define Excellence in Every Room with Our Luxurious Linens
      </h1>
      <div className="mt-[40px] text-[#235160]">
        <div className="flex items-center gap-[110px]">
          <Image src={description1} width={950} alt="" />
          <div>
            <h2 className="font-bold text-[32px]">Upscale Linen</h2>
            <p className="max-w-[540px]">
              Rooted in a rich history of excellence and armed with a deep
              understanding of the hospitality industry's needs, we offer more
              than just products but complete textile solutions that enhance
              guest experiences
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[110px] justify-end">
          <div>
            <h2 className="font-bold text-[32px] text-end">Upscale Linen</h2>
            <p className="max-w-[540px] text-end">
              Rooted in a rich history of excellence and armed with a deep
              understanding of the hospitality industry's needs, we offer more
              than just products but complete textile solutions that enhance
              guest experiences
            </p>
          </div>
          <Image src={description2} width={950} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionRooms;
