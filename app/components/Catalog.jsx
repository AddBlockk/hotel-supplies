"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Импортируем useRouter

const Catalog = () => {
  const router = useRouter(); // Инициализация маршрутизатора

  const catalogItems = Array.from({ length: 8 }, (_, index) => ({
    image: require(`../assets/catalog${index + 1}.png`),
    category: index % 2 === 0 ? "TOWEL" : "BEDDING",
    name: `Номер ${index + 1}`,
    id: `t250p-4236-781-${index + 1}`, // Пример ID для каждого товара
    price: 19.99,
    description:
      "White Classic towels are made from high quality combed cotton...",
  }));

  // Функция для обработки клика
  const handleClick = (itemId) => {
    router.push(`/product/${itemId}`);
  };

  return (
    <div className="bg-[#F9F9F9] pt-[200px] text-[#235160] px-[20px]">
      <div className="flex justify-between">
        <h1 className="text-[24px] flex uppercase">Catalog</h1>
        <ul className="flex gap-[50px] uppercase">
          <li>
            <a href="">all</a>
          </li>
          <li>
            <a href="">bedding</a>
          </li>
          <li>
            <a href="">towels</a>
          </li>
          <li>
            <a href="">bathrobes and slippers</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-4 mt-[40px] gap-[20px] pb-[20px]">
        {catalogItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] cursor-pointer" // Добавлен стиль для кликабельности
            onClick={() => handleClick(item.id)} // Обработчик клика
          >
            <Image src={item.image} width={613} height={613} alt={item.name} />
            <div className="mt-[35px] ml-[20px]">
              <h2 className="font-bold text-[16px] opacity-50">
                {item.category}
              </h2>
              <h1 className="text-[28px] uppercase pb-[24px]">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
