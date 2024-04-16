import axiosInstance from '../../services/instance';
import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import { AiOutlineLoading } from 'react-icons/ai';

import { getProducts } from '../../redux/slices/procutsSlice';
import { useDispatch, useSelector } from 'react-redux';

import statusCode from '../../utils/statusCode';

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.data);
	const { status } = useSelector((state) => state.products);
	// const [products, setproducts] = useState([]);

	useEffect(() => {
		// const getProducts = async () => {
		// 	const { data } = await axiosInstance.get('/products');
		// 	setproducts(data);
		// };
		// getProducts();
		dispatch(getProducts());
	}, []);

	return (
		<>
			<div className='font-bold text-4xl mb-4'>Products</div>
			<div className='grid grid-cols-4 lg:grid-cols-5 gap-4 justify-center'>
				{status == statusCode.LOADING && (
					<>
						<div className='w-[1200px] h-[500px] flex justify-center items-center flex-col'>
							<AiOutlineLoading
								className='animate-spin'
								size={120}
								color='blue'
							/>
							<h1 className='mt-10'>Loading...</h1>
						</div>
					</>
				)}
				{status == statusCode.ERROR && (
					<>
						<h1>Something went wrong</h1>
					</>
				)}
				{products.map((product) => {
					return <Items key={product.id} data={product} />;
				})}
			</div>
		</>
	);
};

export default Products;
