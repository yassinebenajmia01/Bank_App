
import React from 'react';
import Products from './Db/pdb';
import Product from '../Component/product';

function ListProduct() {
  return (
    <>
      <h2 className="text-2xl font-bold ml-[25%] h-[100px]">BEST SELLER IN THIS CATEGORY</h2>
      <div className="flex justify-between items-center py-4 border-b">
      <span className='ml-[25%] font-semibold text-gray-400'><span className='font-extrabold text-black' >1 - 40</span> of 120 results</span>
      <div className="flex items-center space-x-4 mr-[30%]">
        <span className='text-gray-400 font-semibold'>Show item:</span>
        <div className="flex space-x-2 bg-gray-200">
          <button className="px-3 py-1  text-black font-bold">24</button>
          <button className="px-3 py-1 font-bold text-gray-500">48</button>
          <button className="px-3 py-1 font-bold  text-gray-500">72</button>
        </div>
        <div className="flex items-center space-x-2 ">
          <span>Show item:</span>
          <select className="px-3 py-1 border rounded ml-9">
            <option value="default">Default</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <span className='ml-[800%]'>View<span>As</span></span>
        </div>
      </div>
    </div>
      <div className="grid grid-cols-4 gap-1 ml-[25%] w-[70%] h-[1000px]">
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
    </>
  );
}

export default ListProduct;
