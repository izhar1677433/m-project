import React from "react";

const Cart = () => {
  return (
    <div className=" w-full h-[1857px] font-manrope flex justify-center items-start">
      <div className="text-[48px] w-[1200px] h-[66px] pt-7 font-manrope font-medium items-start justify-start ">
        <h2>Cart</h2>
        <div className=" ">
          <p className="absolute bg-[#50575E] w-[550px] h-[63px] text-[16px] p-4 font-normal opacity-100 border-1 border-black text-white">
            Product
          </p>

          <p className="absolute bg-[#50575E] w-[202px] h-[63px] text-[16px] p-4 ml-[550px] font-normal opacity-100 border-1 border-black text-white flex">
            Price
          </p>

          <p className="absolute bg-[#50575E] w-[223px] h-[63px] text-[16px] p-4 ml-[750px] font-normal opacity-100 border-1 border-black text-white">
            Quantity
          </p>
          <p className="absolute bg-[#50575E] w-[225px] h-[63px] text-[16px] p-4 ml-[970px] font-normal opacity-100 border-1 border-black text-white">
            Total
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
