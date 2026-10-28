let events = [];
function addEvent() {
let eventName = document.getElementById("event").value;
if (eventName == "") {
alert("Please enter an event name.");
return;
}
if (events.length >= 3) {
alert("You can join a maximum of 3 events.");
return;
}
events.push(eventName);
alert("Event Added");
document.getElementById("event").value = "";
}
function confirmRegistration() {
let studentName = document.getElementById("studentName").value;
if (studentName == "") {
alert("Please enter your student name.");
return;
}
if (events.length == 0) {
alert("Please add at least one event.");
return;
}
localStorage.setItem("studentName", studentName);
localStorage.setItem("events", JSON.stringify(events));
window.location.href = "confirm.html";
}