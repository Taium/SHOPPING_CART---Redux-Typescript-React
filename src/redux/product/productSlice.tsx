import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import initialState from "./initialState";



interface product{
    id: number;
    title?: string,
    total_qty: number;
    total_price: number;
}



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increment: (state, action) => {
            return state.map((product) => {
                if (product.id !== action.payload) {
                    return product;
                }
                return {
                    ...product,
                    available_qty: product.available_qty + 1,
                };
            });
      },
      decrement: (state, action) => {
        return state.map((product) => {
            if (product.id !== action.payload) {
                return product;
            }

            return {
                ...product,
                available_qty: product.available_qty - 1,
            };
        });
      }
    }
  })
  export default productSlice.reducer
export const { increment, decrement } = productSlice.actions