// Function for calculating grades
const calculate = () => {

// Getting input from user into height variable.
let subject1 = document.querySelector("#subject1").value;
let subject2 = document.querySelector("#subject2").value;
let subject3 = document.querySelector("#subject3").value;
let subject4 = document.querySelector("#subject4").value;
let grades = "";

// Input is string so typecasting is necessary. */
let totalgrades =
	parseFloat(subject1) +
	parseFloat(subject2) +
	parseFloat(subject3) +
	parseFloat(subject4);

// Checking the condition for the providing the
// grade to student based on percentage
let percentage = (totalgrades / 400) * 100;
if (percentage <= 100 && percentage >= 80) {
	grades = "A";
} else if (percentage <= 79 && percentage >= 60) {
	grades = "B";
} else if (percentage <= 59 && percentage >= 40) {
	grades = "C";
} else {
	grades = "F";
}
// Checking the values are empty if empty than
// show please fill them
if (subject1 == "" || subject2 == ""
			|| subject3 == "" || subject4 == "") {
	document.querySelector("#showdata").innerHTML
		= "Please enter all the fields";
} else {

	// Checking the condition for the fail and pass
	if (percentage >= 39.5) {
	document.querySelector(
		"#showdata"
	).innerHTML =
		` Out of 400 your total is ${totalgrades}
		and percentage is ${percentage}%. <br>
		Your grade is ${grades}. You are Pass. `;
	} else {
	document.querySelector(
		"#showdata"
	).innerHTML =
		` Out of 400 your total is ${totalgrades}
		and percentage is ${percentage}%. <br>
		Your grade is ${grades}. You are Fail. `;
	}
}
}
