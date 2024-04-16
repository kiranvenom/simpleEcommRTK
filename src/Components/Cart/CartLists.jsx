import React from 'react';
import CartItems from './CartItems';

const CartLists = ({ data }) => {
	return (
		<>
			<div className='grid grid-cols-4 lg:grid-cols-5 gap-4 justify-center'>
				{data.map((d) => {
					return <CartItems key={d.id} data={d} />;
				})}
			</div>
		</>
	);
};

export default CartLists;
