import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../connection/shopSlice';

export const store = configureStore({
    reducer: {
        shop: shopReducer,
    },
    devTools: true
});
