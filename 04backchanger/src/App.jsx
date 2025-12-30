/** @format */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [color, setColor] = useState('white');

	return (
		<div
			className='h-screen w-full flex flex-wrap justify-center'
			style={{ backgroundColor: color }}>
			<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
				<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
					<button
						onClick={() => {
							setColor('black');
						}}
						className='outline-non px-4 py-1 rounded-full shadow-lg text-black'>
						Dark
					</button>
					<button
						onClick={() => {
							setColor('Red');
						}}
						className='outline-non px-4 py-1 rounded-full shadow-lg text-black'>
						Red
					</button>
					<button
						onClick={() => {
							setColor('green');
						}}
						className='outline-non px-4 py-1 rounded-full shadow-lg text-black'>
						Green
					</button>
					<button
						onClick={() => {
							setColor('Blue');
						}}
						className='outline-non px-4 py-1 rounded-full shadow-lg text-black'>
						Blue
					</button>
					<button
						onClick={() => {
							setColor('pink');
						}}
						className='outline-non px-4 py-1 rounded-full shadow-lg text-black'>
						Pink
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
