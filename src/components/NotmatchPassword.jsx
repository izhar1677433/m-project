import React from "react";

const NotmatchPassword = () => {
  return (
    <div className=" flex justify-center items-center m-auto relative  shadow-lg h-screen font-manrope">
      <form className="  w-[580px] h-[534px] flex flex-col gap-[10px] absolute top-[300px] left-[110px] p-[20px] pr-[30px] pb-[20px] pl-[30px] border-2 border-gray-300 shadow-lg">
        <h2
          className="
    w-[520px] 
    h-[66px] 
    opacity-100 
    font-manrope 
    font-bold 
    text-[48px] 
    leading-[66px] 
    tracking-[0px]
  "
        >
          Lost Password
        </h2>
        <div className="w-[520px] h-[64px] border-2 gap-[10px] bg-[#F2DEDE] border-[#EBCCD1] mt-4">
          <p className="font-normal  text-base text-[#A94442] m-4">
            Passwords do not match
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="email">
            Email address <span className="text-red-700 text-lg">*</span>
          </label>
          <input
            className="  w-[520px] h-[56px] border-2 border-black opacity-100"
            type="email"
            id="email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg" htmlFor="password">
            Password <span className="text-red-700 text-lg">*</span>
          </label>
          <input
            className="  w-[520px] h-[56px] border-2  border-black  opacity-100"
            type="password"
            id="password"
          />
        </div>

        <div className=" flex justify-start w-[520px] h-[60px] items-start ">
          <button
            className=" w-[520px] h-[60px] bg-[#2F8EFF] text-white font-manrope font-semibold flex items-center justify-center opacity-100"
            type="submit"
          >
            Save password
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotmatchPassword;
