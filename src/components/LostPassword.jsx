import React from "react";

const LostPassword = () => {
  return (
    <div className="w-[580px] h-[364px] top-6 left-5 gap-2.5 rotate-0 opacity-100 border-2 border-gray-300  m-10 pt-5 pr-7.5 pb-5 pl-7.5">
      <div className="w-[520px] h-[324px] gap-5 rotate-0 opacity-100 m-auto ">
        <h2 className="text-2xl font-bold font-manrope mb-4">Lost Password</h2>
        <p className="font-normal text-[17px] font-manrope text-base leading-[24px] tracking-normal">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
        <form className="mt-4">
          <div className="mb-4 w-[520px] h-[90px] font-manrope">
            <label
              className="block text-sm w-[520px] h-[24px] font-medium text-gray-700"
              htmlFor="username-email"
            >
              Username or email address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username-email"
              className="mt-1 border border-black w-[520px] h-[56px]  "
              required
            />
          </div>
          <button
            type="submit"
            className=" px-4 py-2 w-[520px] h-[60px] bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default LostPassword;
