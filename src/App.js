import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

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
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
