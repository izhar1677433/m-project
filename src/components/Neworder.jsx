import React from "react";

const NewOrder = () => {
  return (
    //   <div className="w-[650px] h-[940px] m-auto mt-2 bg-blue-100">

    //   <div className="w-[300px] h-[125px] m-auto bg-red-100">
    <div className="w-[600px] h-[833px] top[205px] left-[25px] m-auto mt-[50px] bg-green-100 border-[1px] border-black ">
      <div className="w-[600px] h-[100px] bg-black  ">
        <h3 className="text-white text-[30px] font-bold pl-[50px] pt-[25px]">
          New Order
        </h3>
      </div>
      <p className=" w-[520] h-[18px] top-[325px] left-[65px] font-normal pl-[50px] leading-5 text-xs pt-[25px]">
        You have received an order from Jacques van der Horst. The order is as
        follows:
      </p>
      <h1 className="w-[520px] h-[30px] m-auto mt-[60px] pl-3 font-bold text-lg leading-7">
        Order #2375
        <span className="font-normal text-lg leading-5">(19th September 2018)</span>
      </h1>
       <div className="p-4 pl-1 w-[520px] h-[236px] m-auto">
      <table className="w-full  border-gray-300 border-[2px] text-left text-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Product</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Product Name</td>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">R499.00</td>
          </tr>

          <tr>
            <td className="  px-4 py-2 font-medium">
              Sub Total:
            </td>
            <td className=" border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">R499.00</td>
          </tr>

          <tr>
            <td className=" border border-gray-300 px-4 py-2 font-medium">
              Payment method:
            </td>
            <td className=" px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">Credit Card</td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Total:
            </td>
            <td className=" px-4 py-2"></td>
            <td className=" border border-gray-300 px-4 py-2 font-bold">
              R499.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default NewOrder;
