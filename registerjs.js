// use variables, if statements, loops, one form of collections, functions,
// call backs, and events

function checkForm() {
    var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;

	if (fname == "" || lname == "" || email == "") {
		alert("Please fill out all fields.");
	}
    else {
        alert("Thank you for registering!\nYou will receive an email from us shortly.")
    }
}

function createEventListeners() {

    document.getElementById("submit").addEventListener("click", checkForm);
}

window.addEventListener("load", createEventListeners);