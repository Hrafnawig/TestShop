import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../connection/shopSlice';
import cartReducer from '../connection/cartSlice';

export const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
    },
    devTools: true
});
