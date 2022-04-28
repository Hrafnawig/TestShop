import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
    name: 'counter',
    initialState:{
        products: []
    },
    reducers: {
        increment: (state,action) => {
            const itemIndex = state.products.findIndex(
                (item) => item.id === action.payload.id
            );
            state.products[itemIndex].amount += 1;
        },
        decrement: (state,action) => {
            const itemIndex = state.products.findIndex(
                (item) => item.id === action.payload.id
            );
            state.products[itemIndex].amount -= 1;
        },
        addProduct: (state,action)=>{
            state.products.push(action.payload)
        }
    },
});

export const { increment, decrement, addProduct } = cartSlice.actions;

export default cartSlice.reducer;