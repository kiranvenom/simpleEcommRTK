import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/instance';
import statusCode from '../../utils/statusCode';

const initialState = {
	data: [],
	status: 'idle',
};

const productSlice = createSlice({
	name: 'productSlice',
	initialState,
	reducers: {
		// fetchProducts: (state, action) => {
		// 	state.data = action.payload;
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state, action) => {
				state.status = statusCode.LOADING;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = statusCode.IDLE;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.status = statusCode.ERROR;
			});
	},
});

export const getProducts = createAsyncThunk('products/get', async () => {
	const { data } = await axiosInstance.get('/products');
	return data;
});
// export function getProducts() {
// 	return async function getProductsThunk(dispatch, state) {
// 		const { data } = await axiosInstance.get('/products');
// 		dispatch(fetchProducts(data));
// 	};
// }

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
