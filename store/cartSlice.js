import { createSlice } from '@reduxjs/toolkit';

// in Reducers we add all of our cart actions : like:
// Add Product
// update Product
// remove Product
// empty card Product
export const cartSlice = createSlice({
  name: 'cart',
  initialState: 'Hello',
  reducers: {},
});

// Export Actions | with destructuring
// export const {} = cartSlice.actions

// Export default reducer of cartSlice
export default cartSlice.reducer;
