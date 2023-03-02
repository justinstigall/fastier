import React, { useState } from 'react';
import { DateTime } from 'luxon';

const FastCountdown = () => {
	const [fastStartTime, setFastStartTime] = useState<DateTime>();

	return (
		<div id="fastCountdown">
			{fastStartTime !== undefined && <><h2>Your Fast started at {fastStartTime.toLocaleString(DateTime.DATETIME_FULL)}</h2>
				<h2>Your 18 hour fast will end at {fastStartTime.plus({ hours: 18 }).toLocaleString(DateTime.DATETIME_FULL)}</h2></>}
			<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setFastStartTime(DateTime.now())}>Start Fasting</button>
		</div>
	);
};

export default FastCountdown;