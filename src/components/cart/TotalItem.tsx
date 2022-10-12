import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
type product={
    id: number;
    title?: string,
    total_qty?: any;
    total_price?: any;
}


export default function TotalItem() {
  const cartProducts = useSelector((state:RootState)=>state.carts);

  const totalQty = cartProducts.reduce(((total:number, product:product)=>product.total_qty + total), 0)

  return (
    <div className="flex justify-center items-center text-center" >
        <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{totalQty}</p>
        </div>
    </div>
  )
}
