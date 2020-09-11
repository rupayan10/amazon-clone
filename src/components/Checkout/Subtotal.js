import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
	const history = useHistory();
	const [{ cart }] = useStateValue();
	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({cart?.length} items):
							<strong>{value}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(cart)}
				displayType={'text'}
				thousandSeperator={true}
				prefix={'$'}
			/>
			<button onClick={() => history.push('/payment')}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
