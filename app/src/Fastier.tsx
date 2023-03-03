import React from 'react';
import Navbar from './Navbar';
import FastCountdown from './FastCountdown';

const Fastier = () => {
	return (
		<div id='fastier' className='min-h-screen bg-slate-600'>
			<Navbar />
			<main id='main' className='max-w-4xl mx-auto pt-5'>
				<FastCountdown />
			</main>
		</div>
	);
};

export default Fastier;