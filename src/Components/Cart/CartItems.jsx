import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';

const CartItems = ({ data }) => {
	const dispatch = useDispatch();

	const handleItemDelete = (product) => {
		dispatch(removeFromCart(product));
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
						onClick={() => handleItemDelete(data.id)}>
						Remove Items
					</button>
				</div>
			</div>
		</>
	);
};

export default CartItems;
