import { useSelector } from 'react-redux';
import CartLists from './CartLists';
import image from '../../images/cart.jpg';
import { Link } from 'react-router-dom';

const Cart = () => {
	const allProdInCart = useSelector((state) => state.cart);
	return (
		<div className='max-w-[1200px] m-auto mt-10'>
			{allProdInCart.length == 0 && (
				<>
					<div className='w-full h-[80vh] flex flex-col justify-center items-center'>
						<div className='w-[400px] h-[400px]'>
							<img
								className='w-full h-full object-cover'
								src={image}
								alt='empty cart'
							/>
						</div>
						<h1>your cart looks Clean ✨</h1>
						<Link
							className='bg-blue-500 px-4 py-1 text-white rounded-full'
							to='/'>
							Add to cart
						</Link>
					</div>
				</>
			)}
			<CartLists data={allProdInCart} />
		</div>
	);
};

export default Cart;
