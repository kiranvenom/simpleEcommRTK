import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice';
import productSlice from '../slices/procutsSlice';

const myStore = configureStore({
	reducer: {
		cart: cartSlice,
		products: productSlice,
	},
});

export default myStore;
