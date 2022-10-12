import { Provider } from "react-redux";
import CartList from "./components/cart/CartList";
import Header from './components/Header';
import ProductList from "./components/product/ProductList";


import store from "./redux/store";

export default function App() {
    console.log(store)
    return (
        
        <Provider store={store}>
        
            <div className="bg-gray-50 h-full md:h-screen">
                
                <Header/>
                <div className="grid grid-cols-12 gap-6">
                    <ProductList/>
                    <CartList/>
                </div>
            </div>
        </Provider>
    );
}
