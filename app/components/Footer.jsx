import Image from "next/image";
import React from "react";
import logo from "../assets/logo-footer.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";

const Footer = () => {
  return (
    <div className="bg-[#235160] pt-[100px] px-[20px] text-white pb-[50px]">
      {/* Верхняя часть футера */}
      <div className="flex justify-between items-center">
        {/* Пустой блок для выравнивания */}
        <div className="flex-1"></div>

        {/* Логотип в центре */}
        <div className="flex-1 flex justify-center">
          <Image src={logo} width={250} alt="Logo" />
        </div>

        {/* Список справа */}
        <div className="flex-1 flex justify-end">
          <ul className="uppercase flex flex-col gap-2">
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">payment methods</a>
            </li>
            <li>
              <a href="#">delivery information</a>
            </li>
            <li>
              <a href="#">terms of exchange and return</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="flex justify-between items-center mt-[90px]">
        {/* Левый текст */}
        <div className="flex-1">
          <p>Copyright 2024. Upscele Linen 24</p>
        </div>

        {/* Фотографии по центру */}
        <div className="flex-1 flex justify-center gap-[10px]">
          <Image src={card1} alt="Card 1" />
          <Image src={card2} alt="Card 2" />
          <Image src={card3} alt="Card 3" />
          <Image src={card4} alt="Card 4" />
          <Image src={card5} alt="Card 5" />
          <Image src={card6} alt="Card 6" />
          <Image src={card7} alt="Card 7" />
          <Image src={card8} alt="Card 8" />
        </div>

        {/* Правый текст */}
        <div className="flex-1 flex justify-end">
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
