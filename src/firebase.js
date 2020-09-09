import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDB2cZG-BlUzqQpqNZ1gL-FtQxIdRMMVOU',
	authDomain: 'clone-7e703.firebaseapp.com',
	databaseURL: 'https://clone-7e703.firebaseio.com',
	projectId: 'clone-7e703',
	storageBucket: 'clone-7e703.appspot.com',
	messagingSenderId: '89799227366',
	appId: '1:89799227366:web:487971479237b80cb00827',
	measurementId: 'G-FM2GZBXRVC',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
