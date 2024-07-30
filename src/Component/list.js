
import React from 'react';
import Products from './Db/pdb';
import Product from '../Component/product';

function ListProduct() {
  return (
    <>
      <h2 className="text-2xl font-bold ml-[25%] h-[100px]">BEST SELLER IN THIS CATEGORY</h2>
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
