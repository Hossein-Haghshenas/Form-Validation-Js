const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

const messageInput = document.getElementById("message");
const messageError = document.getElementById("message-error");

const submitBtn = document.getElementById("submit-btn");
const submitError = document.getElementById("submit-error");

nameInput.addEventListener("keyup", validateName);
phoneInput.addEventListener("keyup", validatePhone);
emailInput.addEventListener("keyup", validateEmail);
messageInput.addEventListener("keyup", validateMessage);
submitBtn.addEventListener("click", submitForm);

/* validate functions */

function validateName() {
  const name = this.value;
  if (name.length == 0) {
    nameError.textContent = "Name is required";
    return false;
  } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.textContent = "Write full name";
    return false;
  } else {
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validatePhone() {
  const phone = this.value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }
  if (phone.length != 11) {
    phoneError.innerHTML = "Phone no should be 11 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  }

  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() {
  const email = this.value;
  if (email.length == 0) {
    emailError.textContent = "Email is required";
    return false;
  } else if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z][\.][a-z]{2,4}$/)) {
    emailError.textContent = "Email is Invalid";
    return false;
  } else {
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function validateMessage() {
  const message = this.value;
  const character = 20;
  const left = character - message.length;
  if (left > 0) {
    messageError.textContent = `${left} More characters required`;
    return false;
  } else {
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function submitForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.textContent = "something went wrong";
    alert("something went wrong");
  } else {
    submitError.textContent = "form submited";
  }
}
