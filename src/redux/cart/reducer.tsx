/* eslint-disable no-self-assign */
import { DECREMENT, INCREMENET } from "./actionTypes";
import { RootState } from '../rootReducer';



type product={
    id: number;
    title?: string,
    total_qty: number;
    total_price: number;
}
type initial={
    id: number,
    title: string,
    price: number,
    available_qty: number,
    total_price:number,
    total_qty:number
}
const initialState = [
    {
        id: 0,
        title: '',
        price: 0,
        available_qty: 0,
        total_price:0,
        total_qty:0
    },
   
];
 interface Action {
    type: "carts/increment" | "carts/decrement",
    payload: any
}




const reducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case INCREMENET:
            const cartProduct = state.map((product:product)=>({
                ...product,
            }));

            const itemIndex = cartProduct.findIndex((product:product)=> product.id === action.payload.id);

            if(itemIndex > -1){
                cartProduct[itemIndex].total_qty = cartProduct[itemIndex].total_qty + 1;
                cartProduct[itemIndex].total_price = cartProduct[itemIndex].total_price + action.payload.price;

                return cartProduct;

            }else{
                return [
                    ...state,
                    {
                        ...action.payload,
                        total_qty:1,
                        total_price: action.payload.price,
                    }
                ]
            }


        case DECREMENT:
            const cartProducts = state.map((product:product)=>({
                ...product,
            }));

            const itemIndexNo = cartProducts.findIndex((product:product)=> product.id === action.payload.id);

            if(cartProducts[itemIndexNo].total_qty === 1){
                return state.filter((product:product) => product.id !== action.payload.id);
                
            } else if(itemIndexNo > -1){
                cartProducts[itemIndexNo].total_qty = cartProducts[itemIndexNo].total_qty - 1;
                cartProducts[itemIndexNo].total_price = cartProducts[itemIndexNo].total_price - action.payload.price;

                return cartProducts;

            }else{
                return [...state ]
            }
            

        default:
            return state;
    }
};

export default reducer;
