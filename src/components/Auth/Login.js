import { auth } from '../../firebase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	const signIn = async (e) => {
		e.preventDefault();
		try {
			const authData = await auth.signInWithEmailAndPassword(email, password);
			if (authData) {
				console.log(authData);
				history.push('/');
			}
		} catch (e) {
			alert(e.message);
		}
	};
	const register = async (e) => {
		e.preventDefault();
		try {
			const authData = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			console.log(authData);
			if (authData) {
				history.push('/');
			}
		} catch (e) {
			alert(e.message);
		}
	};

	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login__logo'
					src='https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg'
					alt='amazon-logo'
				/>
			</Link>

			<div className='login__container'>
				<h1>Sign In</h1>
				<form>
					<h5>Email</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e?.target.value)}
					/>
					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e?.target.value)}
					/>
					<button
						type='submit'
						className='login__signInButton'
						onClick={signIn}
					>
						Sign In
					</button>
				</form>
				<p>I Agree to T&C and Privacy Policy</p>
				<button className='login__registerButton' onClick={register}>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
