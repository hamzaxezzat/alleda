import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartItems: [],
};
// in Reducers we add all of our cart actions : like:
// Add Product
// update Product
// remove Product
// empty card Product
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action, payload);
    },
    updateCart(state, action) {
      state.cartItems = action.payload;
    },
    emptyCart(state, action) {
      state.cartItems = [];
    },
  },
});

// Export Actions | with destructuring
export const { addToCart, updateCart, emptyCart } = cartSlice.actions;

// Export default reducer of cartSlice
export default cartSlice.reducer;
