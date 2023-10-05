// Access To "Events" Form's Elements:
let subEmail = document.querySelector("#sub");

document.forms["email-for-subscribe"].onsubmit = function (e) {
    let subValid = false;

// Email Field Validation
    if (subEmail.value.length !== 0) {
        subValid = true;
    }

// Prevent From Sending The Data If You Don't Achieve This Conditions
    if (subValid === false) {
        e.preventDefault();
    }
}
