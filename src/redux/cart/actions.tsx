import { DECREMENT, INCREMENET } from "./actionTypes";

interface productAction{

}
export const cartIncrement = (product:any) => {
    return {
        type: INCREMENET,
        payload: {
            ...product,
        },
    };
};

export const cartDecrement = (product:any) => {
    return {
        type: DECREMENT,
        payload: {
            ...product,
        },
    };
};
