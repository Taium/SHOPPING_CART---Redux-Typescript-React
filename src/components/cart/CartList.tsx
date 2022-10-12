import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import TotalItem from './TotalItem';
import TotalPrice from './TotalPrice';
import { RootState } from '../../redux/rootReducer';

export default function CartList() {
  const cartProducts = useSelector((state:RootState)=>state.carts);
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">

            {cartProducts.length > 0 && cartProducts.map((product)=>(
              <CartProduct product={product} key={product.id}/>
            ))}

            <TotalItem/>

        </div>

        <TotalPrice/>
        
    </div>
  )
}
