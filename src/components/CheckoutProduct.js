import React from 'react';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating }) {
	const [{}, dispatch] = useStateValue();

	const removeFromCart = () => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			id,
		});
	};
	return (
		<div className='checkoutProduct'>
			<img className='checkoutProduct__image' src={image} alt={title} />
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<span key={i} role='img' aria-label='star'>
								⭐
							</span>
						))}
				</div>
				<button onClick={removeFromCart}>Remove from Cart</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
