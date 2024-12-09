// Scroll to specific section
function scrollToSection(id) {
	document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Show alert for destinations
function showAlert(destination) {
	alert(`Explore the wonders of ${destination}. Book your journey today!`);
}

// Handle booking form submission
document.getElementById('booking-form').addEventListener('submit', function (e) {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const destination = document.getElementById('destination').value;
	const date = document.getElementById('date').value;

	alert(`Thank you, ${name}! Your trip to ${destination} on ${date} has been booked.`);
});
