import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const Items = ({ data }) => {
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	return (
		<>
			<div className='w-[200px] border'>
				<div className='w-full h-[200px]'>
					<img
						className='w-full h-full object-cover'
						src={data.image}
						alt='products'
					/>
				</div>
				<div className='px-2 flex flex-col justify-between h-[200px]'>
					<div>
						<h1>{data.title}</h1>
						<h2>{data.price} $</h2>
					</div>
					<button
						className='bg-blue-500 px-4 py-1 text-white rounded-md'
						onClick={() => handleAddToCart(data)}>
						Add to cart
					</button>
				</div>
			</div>
		</>
	);
};

export default Items;
