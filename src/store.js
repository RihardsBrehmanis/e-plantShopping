// Import the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the cartReducer that was created in CartSlice.jsx
import cartReducer from './CartSlice';

// Configure the Redux store
// configureStore automatically sets up a basic store with Redux DevTools Extension enabled and some middleware.
const store = configureStore({
    // The reducer property is where you define the slices of state.
    // The 'cart' key will correspond to the state slice managed by cartReducer.
    reducer: {
        cart: cartReducer,
    },
});

// Export the configured store as the default export
export default store;
