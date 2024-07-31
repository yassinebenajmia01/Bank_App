import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Product({ name, price, priceRange, specs, image, originalPrice, discount, shipping, availability }) {
  const isNewProduct = name === "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone" || name === "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB" || name === "LG Pro Tablet 2023 LTE + Wifi, GPS Cellular" || name==="Samsung Galaxy X6 Ultra LTE 4G/128 Gbb, Black Smartphone";
  const isSpecialProduct = name === "OPod Pro 12.9 Inch M2 2023";
  const isOutOfStock = name === "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone";
  

  return (
    <>
      <div className="h-[300px] text-center relative">
        {discount != null && !priceRange && (
          <div className={`${isSpecialProduct ? 'bg-blue-600' : 'bg-green-600'} text-white py-1 px-2 rounded absolute top-4 left-4 text-xs w-[25%] h-[15%]`}>
            SAVE ${discount.toFixed(2)}
          </div>
        )}
        {isNewProduct && (
          <div className="bg-black text-white py-1 px-2 rounded absolute top-4 left-4 text-xs h-7 w-19">
            NEW
          </div>
        )}
        {isOutOfStock && (
          <div className="bg-black text-white py-1 px-2 rounded absolute top-4 left-4 text-xs h-7 w-19">
            OUT OF STOCK
          </div>
        )}
        <div className="cursor-pointer rounded-full bg-slate-300 h-10 w-10 flex items-center justify-center text-5xl font-serif ml-60"></div>
        <img
          src={image}
          alt={name}
          className="w-[200px] h-[200px]"
        />
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-lg font-semibold">{specs}</p>
          <div className="mt-2 mb-[10%]">
            {priceRange ? (
              <span className="text-black text-xl font-bold">${priceRange.min.toFixed(2)} - ${priceRange.max.toFixed(2)}</span>
            ) : (
              <>
                <span className="text-red-600 text-xl font-bold">${price?.toFixed(2)}</span>
                {originalPrice != null && (
                  <span className="line-through text-gray-500 ml-2 text-lg">${originalPrice.toFixed(2)}</span>
                )}
              </>
            )}
          </div>
          <div className={`py-1 px-2 rounded-md inline-block mt-2 font-serif ${shipping === 'Free Shipping' ? 'text-green-600' : 'text-black'} bg-gray-200`}>
            {shipping === 'Free Shipping' ? shipping : `$${shipping}`}
          </div>
          {name === "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone" && (
            <button className="ml-2 text-red-600 py-1 px-2 rounded-md inline-block mt-2 font-serif bg-gray-200">
              Free Gift
            </button>
          )}
          <div className="mt-2 font-light">
            <span className={`font-bold ${availability === 'In stock' ? 'text-green-600' : availability === 'Contact' ? 'text-black' : 'text-red-600'}`}>
              {availability}
            </span>
            {availability === 'In stock' && (
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 inline-block w-5 h-5 ml-2" />
            )}
            {availability === 'Out of stock' && (
              <FontAwesomeIcon icon={faTimesCircle} className="text-red-600 inline-block w-5 h-5 ml-2" />
            )}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Product;
