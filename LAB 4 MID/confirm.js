let studentName = localStorage.getItem("studentName");
let events = JSON.parse(
localStorage.getItem("events")
);
let result = "";
if(studentName == null || events == null || events.length == 0) {
result = "No registration found.";
} 
else {
result += "<h2>Registration Confirmed</h2>";
result += "Name: " + studentName + "<br>";
result += "Events: <br>";
for (let i = 0; i < events.length; i++) {
result += events[i] + "<br>";
}
result += "Total Fee: " + (events.length * 150) + " Taka<br><br>";
}
document.getElementById("summary").innerHTML = result;
function goBack() {
window.location.href = "index.html";
}