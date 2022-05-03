import shopReducer from "./shopSlice";
import cartReducer from "./cartSlice";

export const reducer = {
    shop: shopReducer,
    cart: cartReducer,
}