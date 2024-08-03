import React from 'react';
import Products from './Db/pdb';
import Product from '../Component/product';

function ListProduct() {
  const visibleProducts = Products.filter((_, index) => ![4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20].includes(index));

  return (
    <>
    <h1 className='font-bold ml-[25%] text-2xl '>BEST SELLER IN THIS CATEGORY</h1>
      <div className="grid grid-cols-4 gap-1 ml-[25%] w-[70%] h-[500px] mt-8">
        {visibleProducts.map((product, index) => (
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
