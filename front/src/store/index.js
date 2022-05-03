import { configureStore } from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import shopReducer from '../connection/shopSlice';
import cartReducer from '../connection/cartSlice';
const persistConfig = {
    key: 'root',
    storage,
}
const reducers = combineReducers({ shop: shopReducer, cart: cartReducer });
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
    reducer: reducers, //for not refresh persistedReducer instead of reducers
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
