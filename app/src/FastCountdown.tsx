import React, { useEffect, useState } from 'react';
import { DateTime, Duration } from 'luxon';

const FastCountdown = () => {
	const [fastStartTime, setFastStartTime] = useState<DateTime>();
	const [timeLeft, setTimeLeft] = useState<Duration>(Duration.fromMillis(0));

	const calcTimeLeft = () => {
		if (fastStartTime !== undefined) {
			setTimeLeft(fastStartTime.plus({ hours: 18 }).diffNow());
		}
	};

	useEffect(() => {
		const countdown = setTimeout(() => {
			calcTimeLeft();
		}, 1000);

		return () => clearTimeout(countdown);
	});

	return (
		<div id="fastCountdown">
			{timeLeft.toFormat('hh:mm:ss')}
			{fastStartTime !== undefined && <><h2>Your Fast started at {fastStartTime.toLocaleString(DateTime.DATETIME_FULL)}</h2>
				<h2>Your 18 hour fast will end at {fastStartTime.plus({ hours: 18 }).toLocaleString(DateTime.DATETIME_FULL)}</h2></>}
			<button type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setFastStartTime(DateTime.now())}>Start Fasting</button>
		</div>
	);
};

export default FastCountdown;