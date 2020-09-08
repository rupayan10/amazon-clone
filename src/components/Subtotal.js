import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

function Subtotal() {
	const [{ basket }] = useStateValue();
	const priceArr = basket.map((item) => item.price);
	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket?.length} items):
							<strong>
								$
								{basket.length > 0
									? priceArr.reduce((acc, val) => acc + val).toFixed(2)
									: 0}
							</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={0}
				displayType={'text'}
				thousandSeperator={true}
				prefix={'$'}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
