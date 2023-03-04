import React, { useEffect, useState } from 'react';
import { DateTime, Duration } from 'luxon';

const FastCountdown = () => {
	const [timeLeft, setTimeLeft] = useState<Duration>(Duration.fromMillis(0));

	const [stateData, setStateData] = useState({
		fastStart: '2023-03-03T17:27:16.663-06:00',
		fastDuration: 18,
	});

	const setFastStartTime = (d: DateTime) => {
		const temp = stateData;
		temp.fastStart = d.toISO();
		setStateData(temp);
	};

	const calcTimeLeft = () => {
		if (stateData.fastStart !== undefined) {
			setTimeLeft(DateTime.fromISO(stateData.fastStart).plus({ hours: 18 }).diffNow());
		}
	};

	const percentLeft = () => {
		return 100 - ((timeLeft.milliseconds / (stateData.fastDuration * 60 * 60 * 1000)) * 100);
	};

	useEffect(() => {
		const countdown = setTimeout(() => {
			calcTimeLeft();
		}, 1000);

		return () => clearTimeout(countdown);
	});

	return (
		<div id="fastCountdown" className='grid grid-cols-1 place-items-center px-10'>
			<div className='text-2xl'>{timeLeft.toFormat('hh:mm:ss')}</div>
			<div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
				<div className='bg-blue-600 h-2.5 rounded-full' style={{ width: percentLeft() + '%' }}></div>
			</div>

			{stateData.fastStart !== undefined && <><h2>Started: {DateTime.fromISO(stateData.fastStart).toLocaleString(DateTime.DATETIME_FULL)}</h2>
				<h2>Ends at: {DateTime.fromISO(stateData.fastStart).plus({ hours: 18 }).toLocaleString(DateTime.DATETIME_FULL)}</h2></>}
			<div>
				<button type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mx-1 rounded' onClick={() => setFastStartTime(DateTime.now())}>⏱️ Start</button>
				<button type="button" className='bg-red-400 hover:bg-red-700 text-white font-bold py-1 px-2 mx-1 rounded'>🛑 Stop</button>
				<button type="button" className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 mx-1 rounded'>✏️ Edit</button>
			</div>
		</div>
	);
};

export default FastCountdown;