import { writable } from 'svelte/store';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
	apiKey: 'AIzaSyAodc3EHPvnONlgkqF8PzUJ7qL2DunTlNQ',
	authDomain: 'web-kit.firebaseapp.com',
	projectId: 'web-kit',
	storageBucket: 'web-kit.appspot.com',
	messagingSenderId: '930768219517',
	appId: '1:930768219517:web:ecbada7a92930c826df014',
	measurementId: 'G-M9GSNYP42V'
};
export const app = initializeApp(firebaseConfig);
export let auth = writable(getAuth());