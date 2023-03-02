import React from 'react';
import { createRoot } from 'react-dom/client';
import Fastier from './Fastier';

const container = document.getElementById('app');
if (container !== null) {
	const root = createRoot(container); // createRoot(container!) if you use TypeScript
	root.render(<Fastier />);
} else {
	console.error('failed to start');
}
