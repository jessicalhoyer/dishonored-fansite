// use variables, if statements, loops, one form of collections, functions,
// call backs, and events

function checkForm() {
    var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;

	var d1 = document.getElementById("d1");
	var d2 = document.getElementById("d2");
	var doto = document.getElementById("doto");

	var favgame = document.getElementById("favorite-game");
	var favmission = document.getElementById("fav-mission");

	var approach = document.getElementsByName("approach");
	var mercy = document.getElementsByName("mercy");
	var chaos = document.getElementsByName("chaos");

	// validate information section
	if (fname == "" || lname == "" || email == "") {
		alert("Please fill out all fields.");
	}

	// validate game section
	else if (!d1.checked && !kof.checked && tbw.checked && !d2.checked && !doto.checked) {
		alert("Please choose the games you've played.");
	}

	else if (favgame.selectedIndex === -1) {
		alert("Please choose a favorite game.");
	}

	else if (favmission.selectedIndex === - 1) {
		alert("Please choose a favorite mission.")
	}

	// validate playstyle section
	else if (!approach[0].checked && !approach[1].checked) {
		alert("Please choose an approach.");
	}

	else if (!mercy[0].checked && !mercy[1].checked) {
		alert("Please choose a mercy option.");
	}

	else if (!chaos[0].checked && !chaos[1].checked) {
		alert("Please choose a chaos level.");
	}

	else {
		alert("Thank you for filling out the survey!");
	}

}

function displayMission() {

	var favgame = document.getElementById("favorite-game");
	var favmission = document.getElementById("fav-mission");

	var d1_missions = ['Returning Home', 'Dishonored', 'High Overseer Campbell', 'House of Pleasure', 'The Royal Physician', "Lady Boyle's Last Party", 'Return to the Tower', 'The Flooded District', 'The Loyalists', 'The Light at the End', 'None Like Her (DLC)', 'A Captain of Industry (DLC)', 'Eminent Domain (DLC)', 'The Surge (DLC)', 'Choosing Your Mark (DLC)', 'A Stay of Execution for Lizzy (DLC)', 'The Dead Eels (DLC)', "Delilah's Masterwork (DLC)"];
	var d2_missions = ['Memories of Training', 'A Long Day in Dunwall', 'Edge of the World', 'The Good Doctor', 'The Clockwork Mansion', 'The Royal Conservatory', 'The Dust District', 'A Crack in the Slab', 'The Grand Palace', 'Death to the Empress'];
	var doto_missions = ['One Last Fight', 'Follow the Ink', 'The Bank Job', 'The Stolen Archive', 'A Hole in the World'];

	if (favgame.selectedIndex === 0) {
		favmission.options.length = 0;
		d1_missions.forEach(function(v, i, a) {
			favmission.options[favmission.options.length] = new Option(a[i], i);
		});
		favmission.selectedIndex = -1;
	}
	else if (favgame.selectedIndex === 1) {
		favmission.options.length = 0;
		d2_missions.forEach(function(v, i, a) {
			favmission.options[favmission.options.length] = new Option(a[i], i);
		});
		favmission.selectedIndex = -1;
	}
	else if (favgame.selectedIndex === 2) {
		favmission.options.length = 0;
		doto_missions.forEach(function(v, i, a) {
			favmission.options[favmission.options.length] = new Option(a[i], i);
		});
		favmission.selectedIndex = -1;
	}
}

function createEventListeners() {
	var favgame = document.getElementById("favorite-game").options;
	favgame.selectedIndex = -1;

	document.getElementById("favorite-game").addEventListener("change", displayMission);
    document.getElementById("submit").addEventListener("click", checkForm);
}

window.addEventListener("load", createEventListeners);