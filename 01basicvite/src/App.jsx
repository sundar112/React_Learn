/** @format */

import { useState } from 'react';

import './App.css';

function App() {
	const [counter, setCounter] = useState(1);
	const addValue = () => {
		setCounter(counter + 1);
	};
	const decreseValue = () => {
		setCounter(counter - 1);
	};
	return (
		<>
			<h1>React course {counter}</h1>
			<h2>Counter Value : {counter}</h2>
			<button onClick={addValue}>Add Value</button> {'  '}
			<button onClick={decreseValue}>Remove Value</button>
			<p>Footer: {counter}</p>
		</>
	);
}

export default App;
