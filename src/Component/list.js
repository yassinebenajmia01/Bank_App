import React from 'react';
import Products from './Db/pdb';
import Product from '../Component/product';

function ListProduct() {
    return (
      <div className='grid grid-cols-4 gap-1 ml-[25%] w-[70%] h-[500px]'>
        {Products.map((product, index) => (
          <div key={index} className=''>
            <Product
              name={product.name}
              price={product.price}
              specs={product.specs}
              image={product.image} 
              originalPrice={product.originalPrice}
              discount={product.discount}
              shipping={product.shipping}
              availability={product.availability}
            /> 
          </div>
        ))}
      </div>
    );
  }

  export default ListProduct;