import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import productReducer from "./product/reducer";

const rootReducer = combineReducers({
    carts: cartReducer,
    products: productReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
