import React from 'react';

function Homee() {
  return (
    <>
    <nav className="flex text-gray-500 text-sm relative bg-white p-4 rounded-lg w-[100%] h-[70px] mt-4">
      <a href="/" className="hover:text-gray-50 font-bold ml-7 text-lg ">Home</a>
      <span className="mx-3 mt-1">/</span>
      <a href="/pages" className="hover:text-gray-50 font-bold text-lg">pages</a>
      <span className="mx-3 mt-1">/</span>
      <span className="font-bold text-black text-lg">Register</span>
      
    </nav>
    <div className='flex text-gray-500 text-sm relative bg-gray-200 p-4 rounded-lg w-[100%]'></div>
    </>
  );
}

export default Homee;
