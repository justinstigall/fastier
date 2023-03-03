import React from 'react';

const Navbar = () => {
	return (
		<header className="bg-gray-500 text-white sticky top-0 z-10">
			<section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
				<h1 className='text-3xl font-medium'>
					<a href="/">⌚Fastier</a>
				</h1>
				<div>
					🧑 Username
				</div>
			</section>
		</header>
	);
};

export default Navbar;