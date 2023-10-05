// Access The "Our Awesome Stats Section" Form's Elements:
let userName = document.querySelector("#name");
let mail = document.querySelector("#mail");
let phone = document.querySelector("#phone");

document.forms["the-form"].onsubmit = function (e) {
    let userValid = false;
    let mailValid = false;
    let phoneValid = false;

// Validation Stages:
    // User Name Field Validation
    if (userName.value !== "" && userName.value.length <= 10) {
        userValid = true;
    }
    // Email Validation
    if (mail.value.length !== 0) {
        mailValid = true;
    }
    // Phone Number Validation
    if (phone.value !== "") {
        phoneValid = true;
    }

// Prevent From Sending The Data If You Don't Achieve These Conditions
    if (userValid === false || mailValid === false || phoneValid === false) {
        e.preventDefault();
    }
}
