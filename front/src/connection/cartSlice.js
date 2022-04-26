import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        products: []
        // name: [],
        // price: 0,
        // amount: 1
    },
    reducers: {
        increment: (state) => {
            state.products.amount += 1;
        },
        decrement: (state) => {
            state.products.amount -= 1;
        },
        addProduct: (state,action)=>{
            state.products.push(action.payload)
        }
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;