import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__img'
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch29.9916/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684229.99_.jpg'
					alt='banner'
				/>
				<div className='home__row'>
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
				</div>
				<div className='home__row'>
					{/* Product */}
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
				</div>
				<div className='home__row'>
					{/* Product */}
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
				</div>
				<div className='home__row'>
					{/* Product */}
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
					<Product
						id='12321'
						title='Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band'
						price={29.99}
						rating={5}
						image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
