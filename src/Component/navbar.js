import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src="https://s3-alpha-sig.figma.com/img/4331/41bc/8c7a66505619b246757b0e023183dbb2?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V7l07nKVfk15n1ImOW2A~FPkLCXPLfV-5Wh5PaV1hOAIrfgYYxgInAj0qOj7XM5Yxp6Q8qa8uXqYhb-weOoHfGV8tesRuJGIKL5IgLOCQdXpc3bcPht~ljxouTrGNkDvl9sIeCL9nBaPu4GHbcJvN14qbHbCHxkhUK~p5s1GOffayYILzF2S9GqGG0Vc3d8sUyYUDoKca~nfzQlU9s7Mee7x-caB2sk~23tUiPS3bJIHdE4mwOybEnDfHp3bXL9jRJSxMBQktxvRlbiFFcEAdax3GVqJpc3B~8LjdHfbQgSty4Y-a660YXjV05KC2N8xclgE09euA0Aj2jYTJe4EvQ__"
          alt="Logo"
          className="mr-2"
        />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-bold relative">
        <div className="cursor-pointer flex items-center group">
          HOMES
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2">
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-blue-500">Option 1</a>
              <a href="#" className="hover:text-blue-500">Option 2</a>
              <a href="#" className="hover:text-blue-500">Option 3</a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex items-center group">
          PAGES
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2">
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-blue-500">Option 1</a>
              <a href="#" className="hover:text-blue-500">Option 2</a>
              <a href="#" className="hover:text-blue-500">Option 3</a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex items-center group">
          PRODUCTS
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2">
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-blue-500">Option 1</a>
              <a href="#" className="hover:text-blue-500">Option 2</a>
              <a href="#" className="hover:text-blue-500">Option 3</a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">CONTACT</div>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        <div className="cursor-pointer rounded-full bg-slate-300 h-10 w-10 flex items-center justify-center text-5xl font-serif -ml-4"></div>
        <div className="cursor-pointer rounded-full bg-slate-300 h-10 w-10 flex items-center justify-center text-5xl font-serif -ml-4">♡</div>
        <div className="cursor-pointer rounded-full bg-slate-300 h-10 w-10 flex items-center justify-center text-5xl font-serif -ml-4"></div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-gray-700 font-thin">WELCOME</div>
          <div className='flex font-bold space-x-1'>
            <button className="w-19 h-3 flex " onClick={() => { navigate("/login") }}>LOG IN</button>
            <p>/</p>
            <button className="w-20 h-3 flex" onClick={() => { navigate("/signup") }}>REGISTER</button>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="cursor-pointer rounded-full bg-slate-300 h-10 w-10 flex items-center justify-center text-5xl font-serif mr-5"></div>
          <span className="absolute top-6 right-15 left-5 bg-green-500 text-white rounded-full px-2">5</span>
          <div className="ml-4">
            <div className="text-gray-700 font-thin mr-4">CART</div>
            <span className="font-bold mr-4">$1,689.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
