const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//functions
//error message
function showError(input, messsage) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = messsage;
}
//success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//email validation
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Events
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "Username is invalid");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "email is invalid");
  } else if (!isValidEmail(email.value)) {
    showError(email, "email is not valid");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "password is invalid");
  } else {
    showSuccess(password);
  }
  if (password2.value === "" || password2.value !== password.value) {
    showError(password2, "password2 is invalid or doesn't match ");
  } else {
    showSuccess(password2);
  }
});
