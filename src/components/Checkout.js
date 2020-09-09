import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
	const [{ cart }] = useStateValue();
	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img
					className='checkout__ad'
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg'
					alt='ad'
				/>
				<div>
					<h2 className='checkout__title'>Your shopping cart</h2>

					<div>
						{cart?.map((item, index) => (
							<CheckoutProduct
								key={index}
								id={item.id}
								title={item.title}
								price={item.price}
								image={item.image}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='checkout__right'>
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
