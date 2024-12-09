import React from "react";
import beliefs1 from "../assets/beliefs1.png";
import beliefs2 from "../assets/beliefs2.png";
import beliefs3 from "../assets/beliefs3.png";
import Image from "next/image";

const Beliefs = () => {
  return (
    <div className="bg-[#F9F9F9] pt-[200px] px-[20px]">
      <h1 className="text-[24px] flex uppercase">
        The fundamental beliefs that guide us
      </h1>
      <div className="grid grid-cols-3 mt-[40px] gap-[20px]">
        <div className="text-[#235160] bg-[#FFFFFF] pb-[20px]">
          <Image src={beliefs1} width={613} alt="" />
          <div className="mt-[35px] ml-[20px]">
            <h2 className="font-bold text-[32px]">
              Quality Excellence at Best Value
            </h2>
            <p>
              Our unwavering commitment to quality, coupled with our strategic
              pricing, ensures every aspect of our business is guided by the
              principle of delivering luxury and durability at the best value.
            </p>
          </div>
        </div>
        <div className="text-[#235160] bg-[#FFFFFF] pb-[20px]">
          <Image src={beliefs2} width={613} alt="" />
          <div className="mt-[35px] ml-[20px]">
            <h2 className="font-bold text-[32px]">Customer Centricity</h2>
            <p>
              Understanding the unique needs of our clientele is at the heart of
              what we do. We believe in building strong relationships based on
              trust, reliability, and unparalleled customer service.
            </p>
          </div>
        </div>
        <div className="text-[#235160] bg-[#FFFFFF] pb-[20px]">
          <Image src={beliefs3} width={613} alt="" />
          <div className="mt-[35px] ml-[20px]">
            <h2 className="font-bold text-[32px]">Integrity at Our Core</h2>
            <p>
              We operate with the highest level of integrity and transparency.
              Our reputation as a trustworthy partner is paramount, and we
              uphold these values in every interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
