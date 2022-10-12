import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
type product={
    id: number;
    title?: string,
    total_qty?: number;
    total_price?: any;
}


export default function TotalPrice() {
  const cartProducts = useSelector((state:RootState)=>state.carts);

  const totalPrice = cartProducts.reduce(((total:number, product:product)=>product.total_price + total), 0)

    return (
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4" >
          <div className="flex justify-center items-center text-center" >
              <div className="text-xl font-semibold">
                  <p>Total Price</p>
                  <p className="text-5xl">{totalPrice}</p>
              </div>
          </div>
      </div>
    )
}
