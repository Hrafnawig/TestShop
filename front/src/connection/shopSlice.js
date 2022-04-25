import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
    'shop/getProducts',
    async () => {
        const response = await axios.get('http://localhost:3000/products');
        return response.data;
    }
);
export const listOfProducts = createSlice({
    name: 'shop',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    extraReducers:(builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled,(state, action) => {
                state.status = 'succeeded';
                state.list.push(action.payload);
            })
            .addCase(getProducts.rejected,(state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default listOfProducts.reducer;
