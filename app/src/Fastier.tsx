import React, { useState } from 'react';
import { DateTime } from 'luxon';

const Fastier = () => {
	const [fastStartTime, setFastStartTime] = useState<DateTime>();

	return (
		<div id="fastier" className='bg-slate-500'>
			<h1 className='text-3xl font-bold underline'>Fastier</h1>
			{fastStartTime !== undefined && <><h2>Your Fast started at {fastStartTime.toLocaleString(DateTime.DATETIME_FULL)}</h2>
				<h2>Your 18 hour fast will end at {fastStartTime.plus({ hours: 18 }).toLocaleString(DateTime.DATETIME_FULL)}</h2></>}
			<button onClick={() => setFastStartTime(DateTime.now())}>Start Fasting</button>
		</div>
	);
};

export default Fastier;