/** @format */

import React from 'react';

function Card({ userName = 'sun', accupation = 'Not assinged yet' }) {
	return (
		<>
			<div className='flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-gray-900 m-2.5'>
				<div>
					<img
						className='size-48 shadow-xl rounded-md'
						alt=''
						src='https://images.pexels.com/photos/35119489/pexels-photo-35119489.jpeg'
					/>
				</div>
				<div className='flex items-center md:items-start'>
					<span className='text-2xl font-medium'>{userName}</span>
					<span className='font-medium text-sky-500'>{accupation}</span>
					<span className='flex gap-2 font-medium text-gray-600 dark:text-gray-400'>
						<span>No. 4</span>
						<span>·</span>
						<span>2025</span>
					</span>
				</div>
			</div>
		</>
	);
}

export default Card;
