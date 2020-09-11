import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Auth/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
	'pk_test_51HQA3UHvB4KAKD3TfCLf31jY2ZbC31xjru8HhF3B5myPMKCNjWhATyC4eNKsfjRZ2RAUjsPrr3xu4xDDpkUUW6au00Sjouk6jJ'
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log('user: ', authUser);
			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		<BrowserRouter>
			<div className='app'>
				<Switch>
					<Route path='/' exact>
						<Header />
						<Home />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/cart'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/payment'>
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
