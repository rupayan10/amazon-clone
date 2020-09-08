import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Header />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/cart'>
						<Checkout />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
