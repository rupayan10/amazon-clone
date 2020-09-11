import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import FlipMove from 'react-flip-move';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
	const [{ cart }, user] = useStateValue();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = () => {};
	const handleChange = () => {};

	return (
		<div className='payment'>
			<div className='payment__container'>
				<h1>
					Checkout (<Link to='/checkout'> {cart?.length} items</Link> )
				</h1>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>123 Street</p>
						<p>Kolkata</p>
					</div>
				</div>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Review Items</h3>
					</div>
					<div className='payment__items'>
						<FlipMove>
							{cart?.map((item) => (
								<CheckoutProduct
									key={item.id}
									id={item.id}
									title={item.title}
									price={item.price}
									image={item.image}
									rating={item.rating}
								/>
							))}
						</FlipMove>
					</div>
				</div>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment__details'>
						<form onSubmit={handleSubmit}>
							<CardElement />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
