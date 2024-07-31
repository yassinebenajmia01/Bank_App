import React from 'react';
import Products from './Db/pdb';
import Product from '../Component/product';

function ListProduct() {
  return (
    <>
      <h2 className="text-2xl font-bold ml-[25%] h-[100px]">BEST SELLER IN THIS CATEGORY</h2>
      <div className="flex justify-between items-center py-4 border-b">
        <span className='ml-[25%] font-semibold text-gray-400'>
          <span className='font-extrabold text-black'>1 - 40</span> of 120 results
        </span>
        <div className="flex items-center space-x-4 mr-[10%]">
          <span className='text-gray-400 font-semibold'>Show item:</span>
          <div className="flex space-x-2 bg-gray-200 ml-[-100px]">
            <button className="px-3 py-1 text-black font-bold">24</button>
            <button className="px-3 py-1 font-bold text-gray-500">48</button>
            <button className="px-3 py-1 font-bold text-gray-500">72</button>
          </div>
        </div>
        <div className="flex items-center space-x-2 mr-[5%]">
          <span>Show item:</span>
          <select className="px-3 py-1 border rounded">
            <option value="default">Default</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="flex items-center space-x-2 mr-[2%]">
          <span>View</span>
          <span className="">As</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 ml-[25%] w-[70%] h-[2500px]">
        {Products.map((product, index) => (
          <div key={index}>
            <Product
              name={product.name}
              price={product.price}
              priceRange={product.priceRange}
              specs={product.specs}
              image={product.image}
              originalPrice={product.originalPrice}
              discount={product.discount}
              shipping={product.shipping}
              offre={product.offre}
              availability={product.availability}
              color={product.color}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 ml-[45%] mt-7">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        1
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        2
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        3
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        4
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        ...
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        20
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
    </>
  );
}

export default ListProduct;