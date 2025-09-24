import React from "react";
import Logo from "../assets/tick.svg";

const SentPassword = () => {
  return (
    <div className="w-[580px] h-[266px] top-6 left-5 gap-2.5 rotate-0 opacity-100 border-2 border-gray-300  m-10 pt-5 pr-7.5 pb-5 pl-7.5">
      <div className="w-[520px] h-[226px] gap-5 rotate-0 opacity-100 m-auto ">
        <h2 className="text-[48px] leading-[66px]  w-[520px] h-[66px] font-bold font-manrope ">
          Lost Password
        </h2>
        <div className="w-[520px] h-[56px] border border-blue-400 mt-4 ">
          <span className="w-[286px] h-[30px] inline-flex items-center gap-2 font-manrope text-[18px] p-auto pl-5 pt-5 m-auto font-normal leading-[30px] ">
            <img
              src={Logo}
              alt="Tick icon"
              className="w-[20px] h-[20px] pt-1  "
            />
            Password reset has been sent.
          </span>
          <p className="w-[520px] h-[48px] font-manrope text-[16px] font-normal leading-[30px] pt-8">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SentPassword;
