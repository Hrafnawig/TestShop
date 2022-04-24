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
    reducers: {
        addProduct: {
            reducer: (state, action) => {
                state.list.push(action.payload);
            },
            prepare(value) {
                return {
                    payload: {
                        key: value.id,
                        value: value,
                    },
                };
            },
        },
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.list.push(...action.payload);
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export const { addProduct } = listOfProducts.actions;

export default listOfProducts.reducer;
