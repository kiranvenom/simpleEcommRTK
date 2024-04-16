import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { TbBrandRedux } from 'react-icons/tb';

import { useSelector } from 'react-redux'; //this is use to read the data

const NavBar = () => {
	const noOfCartProd = useSelector((state) => state.cart);
	return (
		<>
			<div className='max-w-[1200px] m-auto flex justify-between h-[4rem] items-center'>
				<Link to='/'>
					<TbBrandRedux size={40} color='purple' />
				</Link>
				<div className='flex gap-10 items-center'>
					<Link to='/'>
						<h2 className='bg-blue-500 px-4 py-1 text-white rounded-full'>PRODUCTS</h2>
					</Link>
					<Link
						className='flex items-center gap-2 bg-blue-500 px-4 py-1 rounded-full text-white'
						to='/cart'>
						<FaShoppingCart /> <h2>{noOfCartProd.length}</h2>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NavBar;
