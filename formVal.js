// while typing validate the form and show message
const emailFld = document.querySelector("input[name='email']");
const passwordFld = document.querySelector("input[name='password']");
const repass = document.querySelector("input[name='repassword']");

emailFld.addEventListener("keyup", function (event) {
  console.log(event.target.value);
  // console.log("keyup");
  if (!validateEmail(event.target.value)) {
    event.target.parentElement.classList.add("form-field-error");
  } else if (event.target.value === "") {
    event.target.parentElement.classList.add("form-field-error");
  } else {
    event.target.parentElement.classList.remove("form-field-error");
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

repass.addEventListener("keyup", function (event) {
  let password = passwordFld.value;
  if (password != event.target.value) {
    event.target.parentElement.classList.add("form-field-error");
  } else {
    event.target.parentElement.classList.remove("form-field-error");
  }

  console.log(event.target.value);
});
