import { createSlice } from "@reduxjs/toolkit";

type c = {
    cartList: [],
    cartItemCount: number
}

const initialState: c = {
    cartList: [],
    cartItemCount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addIntoCartList: (state: any, action: any): void => {
            state.cartList.push(action.payload);
        },
        updateCartList: (state: { cartList: [] }, action: { payload: { id: number, data: {} } }): void => {
            const { id, data } = action.payload;
            state.cartList.splice(id, 1, data);
        },
        setRemoveItem: (state: { cartList: [] }, action: { payload: number }): void => {
            state.cartList.splice(action.payload, 1);
        },
        setCartItemCount: (state: { cartItemCount: number }, action: { payload: number }): void => {
            state.cartItemCount = action.payload;
        },
        resetCart: (state: { cartList: [] }) => {
            state.cartList = [];
        }
    }
})


export default cartSlice.reducer;
export const { addIntoCartList, updateCartList, setRemoveItem, setCartItemCount,resetCart } = cartSlice.actions; 