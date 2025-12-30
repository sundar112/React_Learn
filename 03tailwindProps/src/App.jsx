/** @format */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className='bg-amber-950'>vite with tailedwind</h1>
			<Card userName='Sundar' accupation='software enginere' />
			<Card userName='sanam' />
			<Card userName='punam' />
			<Card userName='shyam' accupation='artist' />
		</>
	);
}

export default App;
