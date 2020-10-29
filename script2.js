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
  // formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = messsage;
}
//success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//email validation
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//password validation
function pwdvalidation(input) {
  const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (regularExpression.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "password must have digit and spl character");
  }
}
//check for validation
function checkReq(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFeildName(input)} is required/invalid`);
    } else {
      showSuccess(input);
    }
  });
}

//check the req lengths
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFeildName(input)} must be atleat ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFeildName(input)} must be under ${max} characters`);
  } else {
    showSuccess(input);
  }
}
//check passwords
function checkPasswordsMatch(input1, inpu2) {
  if (input1.value !== inpu2.value) {
    showError(inpu2, "paswwords do not match");
  }
}

//getFeildName
function getFeildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Events
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkReq([username, email, password, password2]);
  checkLength(username, 5, 15);
  checkLength(password, 6, 15);
  checkEmail(email);
  pwdvalidation(password);
  checkPasswordsMatch(password, password2);
});
