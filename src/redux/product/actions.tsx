import { Action } from "./action.types";
import { DECREMENT, INCREMENET } from "./actionTypes";

export const productIncrement = (productId:number) => {
    return {
        type: INCREMENET,
        payload: productId,
    };
};

export const productDecrement = (productId:number) => {
    return {
        type: DECREMENT,
        payload: productId,
    };
};
