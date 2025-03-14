import Image from "next/image";
import React from "react";
import FormattedPrice from "@/app/utils/FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
const CartProduct = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4 p-4">
      <Image
        className="object-cover"
        width={150}
        height={150}
        src={item.image}
        alt={item.title}
      />
      <div className="flex items-center px-2 gap-4 w-full">
        <div className="flex flex-col gap-1 w-2/3">
          <p className="text-amazon_blue text-lg font-bold">{item.title}</p>
          <p className="text-gray-600 text-sm font-bold">{item.description}</p>
          <p className="text-sm text-gray-600">
            Unit Price
            <span className="font-semibold">
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <div className="flex items-center gap-6 mt-2">
            <div className="flex items-center justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span
                
                className="w-6 h-6 text-black flex items-center justify-center rounded-full bg-transparent hover:bg-gray-300 cursor-pointer"
              >
                <LuPlus />
              </span>
              <span className="text-black font-bold">{item.quantity}</span>
              <span
                
                className="w-6 h-6 text-black flex items-center justify-center rounded-full bg-transparent hover:bg-gray-300 cursor-pointer"
              >
                <LuMinus />
              </span>
            </div>
            <div
              
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className="mt-[2px]" /> <p>remove</p>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-amazon_blue w-1/3 text-right">
          <FormattedPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
