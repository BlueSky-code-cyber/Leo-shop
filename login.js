// get elements

const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const formTitle = document.querySelector(".form-name");
const eyeIcons = document.querySelectorAll(".eye-icon");
const alertTexts = document.querySelectorAll(".alert-text");

// changing register/login form

loginLink.addEventListener("click", () => {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  formTitle.innerText = "login form";
  alertTexts.forEach((alert) => {
    alert.textContent = "";
  });
});

registerLink.addEventListener("click", () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  formTitle.innerText = "Register form";
  alertTexts.forEach((alert) => {
    alert.textContent = "";
  });
});

// changing eye icon

eyeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const passwordInputs = icon.previousElementSibling;
    if (passwordInputs.type === "password") {
      passwordInputs.type = "text";
      icon.firstElementChild.classList.replace("fa-eye", "fa-eye-slash");
    } else if (passwordInputs.type === "text") {
      passwordInputs.type = "password";
      icon.firstElementChild.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});

// validate form

// valid email (login form)
const loginEmailInput = document.querySelector("#login-email");
const loginEmailAlert = document.querySelector(".login-email-alert");

loginEmailInput.addEventListener("input", () => {
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!loginEmailInput.value.match(validEmail)) {
    loginEmailAlert.innerText = "please enter valid email!";
    loginEmailInput.classList.add("alert-input");
  } else {
    loginEmailAlert.innerText = "";
    loginEmailInput.classList.remove("alert-input");
  }
});

// valid password (login form)
const loginPassInput = document.querySelector("#login-pass");
const loginPassAlert = document.querySelector(".login-pass-alert");

loginPassInput.addEventListener("input", () => {
  if (loginPassInput.value.length < 8) {
    loginPassAlert.innerText = "password is less than 8";
    loginPassInput.classList.add("alert-input");
  } else {
    loginPassAlert.innerText = "";
    loginPassInput.classList.remove("alert-input");
  }
});

// send information for valid login form
loginForm.addEventListener("submit", (e) => {
  if (!validLoginForm()) {
    e.preventDefault();
  }
});

function validLoginForm() {
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!loginEmailInput.value.match(validEmail)) {
    loginEmailAlert.innerText = "please enter valid email!";
    loginEmailInput.classList.add("alert-input");
    return false;
  }

  if (loginPassInput.value.length < 8) {
    loginPassAlert.innerText = "password is less than 8";
    loginPassInput.classList.add("alert-input");
    return false;
  }

  return true;
}

// valid email (register form)
const registerEmailInput = document.querySelector("#register-email");
const registerEmailAlert = document.querySelector(".register-email-alert");

registerEmailInput.addEventListener("input", () => {
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!registerEmailInput.value.match(validEmail)) {
    registerEmailAlert.innerText = "please enter valid email!";
    registerEmailInput.classList.add("alert-input");
  } else {
    registerEmailAlert.innerText = "";
    registerEmailInput.classList.remove("alert-input");
  }
});

// valid pass (register form)
const registerpassInput = document.querySelector("#register-pass");
const registerpassAlert = document.querySelector(".register-pass-alert");

registerpassInput.addEventListener("input", () => {
  if (registerpassInput.value.length < 8) {
    registerpassAlert.innerText = "password is less than 8";
    registerpassInput.classList.add("alert-input");
  } else {
    registerpassAlert.innerText = "";
    registerpassInput.classList.remove("alert-input");
  }
});

// valid confirm pass (register form)
const registerConfirmInput = document.querySelector("#register-pass-confirm");
const registerConfirmAlert = document.querySelector(".register-confirm-alert");

registerConfirmInput.addEventListener("input", () => {
  if (registerConfirmInput.value.length < 8) {
    registerConfirmAlert.innerText = "password is less than 8";
    registerConfirmInput.classList.add("alert-input");
  } else if (registerConfirmInput.value !== registerpassInput.value) {
    registerConfirmAlert.innerText = "please repeat password";
    registerConfirmInput.classList.add("alert-input");
  } else {
    registerConfirmAlert.innerText = "";
    registerConfirmInput.classList.remove("alert-input");
  }
});

// send information for valid register form
registerForm.addEventListener("submit" , (e) => {
  if (!validRegisterForm()) {
    e.preventDefault
  }
})


function validRegisterForm () {
   const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!registerEmailInput.value.match(validEmail)) {
    registerEmailAlert.innerText = "please enter valid email!";
    registerEmailInput.classList.add("alert-input");
    return false
  }
  
   if (registerpassInput.value.length < 8) {
    registerpassAlert.innerText = "password is less than 8";
    registerpassInput.classList.add("alert-input");
    return false
  }

   if (registerConfirmInput.value.length < 8) {
    registerConfirmAlert.innerText = "password is less than 8";
    registerConfirmInput.classList.add("alert-input");
    return false
  } else if (registerConfirmInput.value !== registerpassInput.value) {
    registerConfirmAlert.innerText = "please repeat password";
    registerConfirmInput.classList.add("alert-input");
    return false
  }


  return true


}