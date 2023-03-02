import React from 'react';

const Navbar = () => {
	return (
		<nav id="navbar" className="bg-gray-500 flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full">
			<div className="mb-2 sm:mb-0">
				<a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Fastier</a>
			</div>
			<div>
				<a href="/one" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">User Name</a>
			</div>
		</nav>
	);
};

export default Navbar;