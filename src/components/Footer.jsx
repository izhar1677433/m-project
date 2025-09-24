import React from "react";
import Logo from "../assets/Frame.svg";
import Logo1 from "../assets/insta.svg";
import Logo2 from "../assets/tei.svg";
import Logo3 from "../assets/tw.svg";
import Logo4 from "../assets/Vector.svg";

const Footer = () => {
  return (
    <footer className="w-full h-[516px] top-[2560px] bg-black text-white flex flex-col items-center ">
      <div className="w-full h-[427px] ">
        <div className="w-[1195px] h-[272px] space-x-5 m-auto mt-[77px] top-[77px] left-[122px]  flex ">
          <div className="w-[616px] h-[272px] bg-black text-white p-6 flex flex-col items-start justify-center">
            <h1 className="w-[481px] h-[272px] space-x-6  text-4xl font-medium font-manrope mb-4">
              Get Started with LSX
            </h1>
            <p className="font-manrope font-light text-[23px] leading-[30px] tracking-[0] w-[616px] h-[70px] mb-6">
              With its clean, minimal design and powerful feature set, LSX theme
              enables agencies to build stylish and sophisticated WordPress
              websites.
            </p>
            <button className="bg-blue-500 text-white mt-[50px] px-4 py-2 rounded hover:bg-blue-700">
              View Demo
            </button>
          </div>
          <div className="w-[616px] h-[272px] flex  items-center">
            <div className=" flex flex-col gap-[10px] mb-[50px]">
              <h1 className="font-medium font-manrope text-3xl ">Theme</h1>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-manrope font-normal  text-[16px]">Styles</a>
                </li>
                <li>
                  <a href="#" className="font-manrope font-normal text-[16px]">Patterns</a>
                </li>
                <li>
                  <a href="#" className="font-manrope font-normal text-[16px]">Layouts</a>
                </li>
                <li>
                  <a href="#" className="font-manrope font-normal text-[16px]">Templates</a>
                </li>
                <li>
                  <a href="#" className="font-manrope font-normal text-[16px]">Docs</a>
                </li>
              <li>
                <a href="#" className="font-manrope font-normal text-[16px]">Download</a>
              </li>
                </ul>
            </div>
            <div className=" flex flex-col gap-[10px] mb-[80px] ml-[50px]">
              <h1 className="font-medium font-manrope text-3xl  ">LightSpeed</h1>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-manrope font-normal text-[16px]">Solutions</a>
                </li>
                <li>
                  <a href="#" className="font-manrope font-normal text-[16px]">Services</a>
                </li>
                <li>
                  <a href="#" className="font-manrope font-normal text-[16px]">About</a>
                </li>
                <li>
                  <a href="#" className="font-manrope font-normal text-[16px]">Portfolio</a>
                </li>
                <li>
                  <a href="#" className="font-manrope font-normal text-[16px]">Contact</a>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-[10px] mb-[80px] ml-[50px]">
                <h1 className="font-medium font-manrope text-3xl  ">Products</h1>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="font-manrope font-normal text-[16px]">Solutions</a>
                    </li>
                    <li>
                    <a href="#" className="font-manrope font-normal text-[16px]">Services</a>
                    </li>
                    <li>
                    <a href="#" className="font-manrope font-normal text-[16px]">About</a>
                    </li>
                    <li>
                    <a href="#" className="font-manrope font-normal text-[16px]">Portfolio</a>
                    </li>
                    <li>
                    <a href="#" className="font-manrope font-normal text-[16px]">Contact</a>
                    </li>
                </ul>
                </div>
          </div>
        </div>
      </div>
      <hr className="divide-y divide-gray-700 border-b w-[1200px] h-[2px] " />
      <div
        className=" w-[1440px] h-[90px] top-[426px] opacity-100 
                flex items-center justify-between gap-[246px] 
                 pr-[120px] pl-[120px] text-white"
      >
        {/* Left Section */}
        <p className="font-manrope pl-5 font-normal text-[20px] leading-[30px] tracking-normal w-[168px] h-[30px]">
          &copy; LSX Theme
        </p>

        {/* Center Section */}
        <div className="flex space-x-4 text-[20px]">
          <a href="#" className="hover:underline">
            Privacy Policy.Terms & Conditions
          </a>
        </div>

        {/* Right Section (Social Icons) */}
        <div className="flex space-x-4 ">
          <img
            src={Logo}
            alt="Logo"
            className="bg-white rounded-full "
            width={30}
            height={30}
          />
          <img
            src={Logo1}
            alt="Instagram Logo"
            className="bg-white rounded-full "
            width={30}
            height={30}
          />
          <img
            src={Logo2}
            alt="Telegram Logo"
            className="bg-white rounded-full "
            width={30}
            height={30}
          />
          <img
            src={Logo3}
            alt="Twitter Logo"
            className="bg-white rounded-full"
            width={30}
            height={30}
          />
          <img
            src={Logo4}
            alt="Vector Logo"
            className="bg-white rounded-full "
            width={30}
            height={30}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
