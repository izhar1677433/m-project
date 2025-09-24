import React from "react";

const Login = () => {
  return (
    <div className=" flex justify-center items-center m-auto relative border-2 border-gray-300 shadow-lg h-screen font-manrope">
      <form className="  w-[580px] h-[450px] flex flex-col gap-[10px] absolute top-[300px] left-[110px] p-[20px] pr-[30px] pb-[20px] pl-[30px] border-2 border-gray-300 shadow-lg">
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
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="email">
            Email address <span className="text-red-700 text-lg">*</span>
          </label>
          <input
            className="  w-[520px] 
    h-[56px] 
    border-2 
    border-black 
   
    opacity-100"
            type="email"
            id="email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg" htmlFor="password">
            Password <span className="text-red-700 text-lg">*</span>
          </label>
          <input
            className="  w-[520px] 
    h-[56px] 
    border-2 
    border-black 
   
    opacity-100"
            type="password"
            id="password"
          />
        </div>
        <div className=" flex flex-col w-[520px] h-[56px] ">
          <div className=" flex justify-start items-start ">
            <button
              className=" w-[300px] 
    h-[60px] 
    bg-[#2F8EFF]
    text-white 
    font-manrope 
    font-semibold
    flex 
    items-center 
    justify-center 
    opacity-100"
              type="submit"
            >
              Login
            </button>
          <div className="justify-between m-auto items-center flex">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-900"
              >
              Remember me
            </label>
              </div >
          </div>
              <p className="text-sm text-blue-600 hover:bg-purple-400 mt-4">Lost your password?</p>
        </div>
      </form>
       <div className=" flex justify-center items-center m-auto relative  shadow-lg h-screen font-manrope">
      <form className="  w-[580px] h-[450px] flex flex-col gap-[10px] absolute top-[300px] left-[110px] p-[20px] pr-[30px] pb-[20px] pl-[30px] border-2 border-gray-300 shadow-lg">
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
          Register
        </h2>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="email">
            Email address <span className="text-red-700 text-lg">*</span>
          </label>
          <input
            className="  w-[520px] 
    h-[56px] 
    border-2 
    border-black
    
    opacity-100"
            type="email"
            id="email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg" htmlFor="password">
            Password <span className="text-red-700 text-lg">*</span>
          </label>
          <input
            className="  w-[520px] 
    h-[56px] 
    border-2 
    border-black
     
    opacity-100"
            type="password"
            id="password"
          />
        </div>

          <div className=" flex justify-start w-[520px] h-[60px] items-start ">
            <button
              className=" w-[520px] 
    h-[60px] 
    bg-[#2F8EFF]
    text-white 
    font-manrope 
    font-semibold
    flex 
    items-center 
    justify-center 
    opacity-100"
              type="submit"
            >
              Register
            </button>
          
          </div>
      </form>
    </div>
    </div>
    
  );
};

export default Login;
