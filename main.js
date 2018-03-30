var finalDate = new Date("August 14 17:30:00 2018 GMT+01:00");

function countDown() {
	var now = new Date();
	var diff = Math.floor( (finalDate - now) / 1000);

	if(diff>0) {

	var jours = Math.floor(diff / (60*60*24));
	var heures = Math.floor(diff % 86400/3600);
	var minutes = Math.floor(diff % 3600/60);
	var secondes = diff % 60;

	$('#d').html(jours + ' jours');
	$('#h').html(heures + ' heures');
	$('#m').html(minutes + ' minutes');
	$('#s').html(secondes + ' secondes');
	}
	else {
		$('#countDown').html('Date dépassée!');
	}
}

$(document).ready(function() {
	window.setInterval(countDown, 1000);
	countDown();
});