import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Destructure product details from the action payload
      const { name, image, cost } = action.payload; 
      
      // Check if the item already exists in the cart by comparing names
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity++;
      } else {
        // If the item does not exist, add it to the cart with a quantity of 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Filter the items array to create a new array excluding the item to be removed
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      // Destructure the product name and new quantity from the action payload
      const { name, quantity } = action.payload; 
      
      // Find the item in the cart that matches the given name
      const itemToUpdate = state.items.find(item => item.name === name);
      
      if (itemToUpdate) {
        // If the item is found, update its quantity to the new value
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the action creators for each reducer
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as the default to be used in the Redux store
export default CartSlice.reducer;
