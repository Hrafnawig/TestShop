import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
export const order = createAsyncThunk(
    'cart/addNewPost',
    async body => {
        const response = await axios.post('http://localhost:3000/order', {
                name: body.name,
                surname: body.surname,
                address: body.address,
                phone: body.phone
        })
        return response.data
    }
)
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
        },
        checkExist:(state,action)=>{
            const itemIndex = state.products.findIndex(
                (item) => item.id === action.payload.id
            );
            if(state.products[itemIndex].amount <= 0){
                state.products.splice(itemIndex, 1);
            }
        }
    },
});

export const { increment, decrement, addProduct, checkExist } = cartSlice.actions;

export default cartSlice.reducer;