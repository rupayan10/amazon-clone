import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {
	const [{ cart, user }] = useStateValue();

	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
					alt='amazon-logo'
				/>
			</Link>
			<div className='header__search'>
				<input className='header__searchInput' type='text' />
				<SearchIcon className='header__searchIcon' />
			</div>
			<div className='header__nav'>
				<Link to={!user && '/login'}>
					<div className='header__option' onClick={handleAuth}>
						<span className='header__option__line1'>
							Hello {user?.email.split('@')[0]}
						</span>
						<span className='header__option__line2'>
							{user ? 'Sign out' : 'Sign In'}
						</span>
					</div>
				</Link>
				<div className='header__option'>
					<span className='header__option__line1'>Returns</span>
					<span className='header__option__line2'>& Orders</span>
				</div>
				<div className='header__option'>
					<span className='header__option__line1'>Your</span>
					<span className='header__option__line2'>Prime</span>
				</div>
				<Link to='/cart'>
					<div className='header__optionBasket'>
						<ShoppingBasketIcon />
						<span className='header__option__line2 header__basketCount'>
							{cart?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
