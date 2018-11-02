// Countdown.ts //
// Author: Maximilian Dybvik
// Project: Coming Soon
// Version: 1.0

// Change your deadline by editing the date string
const deadline: string  = "January 1 2019 00:00:00 GMT+0100";

// Alternative deadline
// const countdownLength: number = 31 * 24 * 60 * 60 * 1000; 
//   // This sets countdown to 31 days
// let deadline: string = new Date(Date.parse(new Date()) + countdownLength);

function getRemainingTime(deadline: string) {
	// Return number of milliseconds between deadline and today's date
	let total: number = Date.parse(deadline) - Date.parse(new Date()); 

	// Convert milliseconds to seconds, minutes, hours and days
	let seconds: number = Math.floor( (total/ 1000) % 60 );
	let minutes: number = Math.floor( (total/ 1000 / 60) % 60 );
	let hours: number = Math.floor( (total/ 1000 / 60 / 60) % 24 );
	let days: number = Math.floor( (total/ 1000 / 60 / 60 / 24) );
		// You can continue this logic for weeks, months, and years

	// Return data as a reusable object
	return {
		"total": total,
		"seconds": seconds,
		"minutes": minutes,
		"hours": hours,
		"days": days
	};
}

function initializeCounter(containerId: string, deadline: string) {
	const countdown = document.getElementById(containerId);
	const counterSeconds = countdown.querySelector("#counterSeconds .counterNumber");
	const counterMinutes = countdown.querySelector("#counterMinutes .counterNumber");
	const counterHours = countdown.querySelector("#counterHours .counterNumber");
	const counterDays = countdown.querySelector("#counterDays .counterNumber");

	// Update only the numbers
	function updateCounter() {
		let remainder = getRemainingTime(deadline);
		counterSeconds.innerHTML = ("0" + remainder.seconds).slice(-2);
		counterMinutes.innerHTML = ("0" + remainder.minutes).slice(-2);
		counterHours.innerHTML = ("0" + remainder.hours).slice(-2);
		counterDays.innerHTML = ("0" + remainder.days).slice(-2);

		if (remainder.total <= 0) {
			clearInterval(timer);
		}
	}

	updateCounter();
	let timer = setInterval(updateCounter, 1000);
}

initializeCounter("countdown", deadline);