import React from "react";

const Checkout = () => {
  return (
    <div className="parent-checkout w-full h-screen font-manrope flex justify-center items-start">
      <div className="childleft w-[587px]  h-full border border-black flex flex-col justify-start items-start ">
        <h2 className="text-[48px] font-manrope font-medium ">Checkout </h2>
        <h4 className="font-medium text-[24px] mt-4">1. Contact information</h4>
        <p className="text-[16px] mt-2 pl-4">
          Already have an account? Log in{" "}
        <hr className="absolute top-[336px] left-[230px] w-[160px] border-[1px] opacity-100 rotate-90 border-[#B4B7C1]" />
        </p>
        <label htmlFor="" className="pl-4">
          We'll use this email to send you details and updates about your order.
          <input type="text" className="w-[550px] h-[55px] border-1 border-black" />
        </label>
      </div>
      <div className="childright w-[386px] h-full border border-black"></div>
    </div>
  );
};

export default Checkout;
