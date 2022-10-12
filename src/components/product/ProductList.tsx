import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { RootState } from '../../redux/rootReducer';


export default function ProductList() {
  const products = useSelector((state:RootState)=>state.products);
  console.log(products)
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {products.map((product)=>(
        <Product product={product} key={product.id}/>
      ))}
        
    </div>
  )
}
