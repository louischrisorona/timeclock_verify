timeIn = splitTime(prompt("When did you arrive?", "9:00 AM"));
	timeOut = splitTime(prompt("When did you leave?", "5:30 PM"));

	let hoursA = splitHours(timeIn[0]);
	let hoursB = splitHours(timeOut[0]);

	function splitTime(time) {
	  let a = time.split(" ");
	  return a;
	}
	function splitHours(time){
	  let b = time.split(":").map(Number);
	  return b;
	}

	let hourDiff = 0;
	let minuteDiff = hoursB[1] - hoursA[1];


	let clockIn = parseInt(hoursA[0]);
	let clockOut = parseInt(hoursB[0]);
	let outputStr = "";

	if (clockIn > clockOut) {
	  clockOut += 12;
	  hourDiff = clockOut - clockIn;
	} else {
	  hourDiff = clockOut - clockIn;
	}

	if (minuteDiff == 0) {
	  outputStr = `You clocked in at ${timeIn[0]} ${timeIn[1]} and clocked out at ${timeOut[0]} ${timeOut[1]}. That is a total of ${hourDiff} hours.`;
	} else {
	  outputStr = `You clocked in at ${timeIn[0]} ${timeIn[1]} and clocked out at ${timeOut[0]} ${timeOut[1]}. That is a total of ${hourDiff} hours and ${minuteDiff} minutes.`;
	}

	let loc = document.getElementById('hidden');
	loc.innerHTML = "<p>" + outputStr + "</p>";
