// Add a simple alert when the form is submitted
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Trip search initiated!");
});