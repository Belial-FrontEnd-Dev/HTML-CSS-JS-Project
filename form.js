const submitBtn = document.getElementById("submitBtn");
let input = document.getElementById("input");
let passw = document.querySelector(".passw");
let confirm = document.querySelector(".confirmPassw");
let email = document.querySelector(".email");

submitBtn.addEventListener("click", () => {
    validate();
    checkEmail();
});
input = input.value;

function validate() {
    if (passw.value != confirm.value) {
        Toastify({
            text: "Password & Confirm password don't match!",
            duration: 2500,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #B621FE, #1FD1F9)",
            },
            onClick: function() {}, // Callback after click
        }).showToast();
    }
}

function checkEmail() {
    let validC =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validC)) {
        alert("Valid email address");
    } else {
        Toastify({
            text: "Email is not valid",
            duration: 2500,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #B621FE, #1FD1F9)",
            },
            onClick: function() {}, // Callback after click
        }).showToast();
    }
}