"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

const ProductPage = ({ params }) => {
  // Unwrap the params promise using React.use()
  const { id } = React.use(params);

  const router = useRouter(); // Call useRouter here, not inside the handler

  // Example product data
  const productDetails = {
    name: "Bath towel Carstin collection",
    description:
      "White Classic towels are made from high quality combed cotton. Edges are reinforced with double needle embroidered stitching...",
    price: 399.99,
    discountedPrice: 349.99,
    images: [require(`../../../assets/catalog${id?.split("-")[3]}.png`)],
    specs: {
      material: "100% cotton",
      sizes: ["25x54 inch", "27x50 inch", "27x54 inch"],
    },
    quantityOptions: [20, 50, 100],
  };

  return (
    <div className="bg-[#F9F9F9] text-[#235160] px-[20px] py-[40px]">
      <div className="flex justify-between">
        <h1 className="text-[24px]">{productDetails.name}</h1>
        <button
          onClick={() => router.push("/")} // Use router here
          className="text-blue-500"
        >
          Назад
        </button>
      </div>
      <div className="flex mt-[40px] gap-[40px]">
        <div className="w-[50%]">
          <Image
            src={productDetails.images[0]}
            width={613}
            height={613}
            alt={productDetails.name}
          />
        </div>
        <div className="w-[50%]">
          <h2 className="text-[18px]">
            Price: ${productDetails.discountedPrice}
          </h2>
          <h3 className="text-[16px] text-opacity-50">
            Original Price: ${productDetails.price}
          </h3>
          <p>{productDetails.description}</p>
          <h4 className="mt-[20px]">Specifications:</h4>
          <ul>
            <li>Material: {productDetails.specs.material}</li>
            <li>Sizes: {productDetails.specs.sizes.join(", ")}</li>
          </ul>
          <div className="mt-[20px]">
            <h4>Quantity:</h4>
            <div className="flex gap-[10px]">
              {productDetails.quantityOptions.map((qty) => (
                <button key={qty} className="border px-[10px] py-[5px]">
                  {qty}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-[20px]">
            <button className="bg-blue-500 text-white py-[10px] px-[20px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
