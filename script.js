
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegExp = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const form = document.querySelector("form");
const inputs = Array.from(document.querySelectorAll(".form-input > input"));

inputs.forEach(input => input.addEventListener("input",checkInputValidityWhenEntered));


function checkInputValidityWhenEntered(e){
    const elementTargeted = document.getElementById(e.target.id);
    switch (e.target.id) {
        case 'fname':
            checkFNameValidity(elementTargeted);
            break;
        case 'lname':
            checkLNameValidity(elementTargeted);
            break;
        case 'email':
            checkEmailValidity(elementTargeted);
            break;   
        case 'phone-number':
            checkPhoneValidity(elementTargeted);
            break;
        case 'confirm-password':
            checkPasswordMatch(elementTargeted);
            break;           
        default:
            break;
    }

}

function checkEmailValidity(elementTargeted){
    const isValid = elementTargeted.value.length === 0 || emailRegExp.test(elementTargeted.value);
    const error = elementTargeted.parentElement.querySelector("span");
    if (isValid) {
        elementTargeted.className = "valid";
        error.textContent = "";
        error.className = "error";
      } else {
        elementTargeted.className = "invalid";
        console.log( elementTargeted); 
      }
    return isValid;

}

function checkFNameValidity(elementTargeted){
    const isValid = elementTargeted.value.length === 0 || elementTargeted.value.length >= 2;
    const error = elementTargeted.parentElement.querySelector("span");
    if (isValid) {
        elementTargeted.className = "valid";
        error.textContent = "";
        error.className = "error";
      } else {
        elementTargeted.className = "invalid";
      }
    return isValid;

}

function checkLNameValidity(elementTargeted){
    const isValid = elementTargeted.value.length === 0 || elementTargeted.value.length >= 2;
    const error = elementTargeted.parentElement.querySelector("span");
    if (isValid) {
        elementTargeted.className = "valid";
        error.textContent = "";
        error.className = "error";
      } else {
        elementTargeted.className = "invalid";
      }
    return isValid;
}

function checkPhoneValidity(elementTargeted){
    
    const isValid = elementTargeted.value.length === 0 || phoneRegExp.test(elementTargeted.value);
    const error = elementTargeted.parentElement.querySelector("span");
    if (isValid) {
        elementTargeted.className = "valid";
        error.textContent = "";
        error.className = "error";
      } else {
        elementTargeted.className = "invalid";
        console.log(elementTargeted); 
      }
    return isValid;
}

function checkPasswordMatch(elementTargeted){
    
    const passwordMain = document.getElementById('password');
    const isValid = elementTargeted.value == passwordMain.value ;
    console.log(isValid); 
    console.log(passwordMain); 
    const error = passwordMain.parentElement.querySelector("span");
    if (isValid) {
        elementTargeted.className = "valid";
        error.textContent = "";
        error.className = "error";
      } else {
        elementTargeted.className = "invalid";
        error.className = "error active";
        error.textContent="*Passwords do to match"
      }
    return isValid;
}

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const isValid = checkAllAreValid();

    function checkAllAreValid() {
        const fnameInput = document.getElementById('fname');
        const lnameInput = document.getElementById('lname');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone-number');
        const passwordInput = document.getElementById('password');
        const confPasswordInput = document.getElementById('confirm-password');

        console.log(fnameInput);
        
        let validCheck = true;
        //firstname
        if (!checkFNameValidity(fnameInput)){
            let fnameError = fnameInput.parentElement.querySelector("span");
            fnameInput.className = "invalid";
            fnameError.className = "error active";
            fnameError.textContent="Enter a valid First name"
            validCheck = false;
        }
        if (!checkLNameValidity(lnameInput)){
            let lnameError = lnameInput.parentElement.querySelector("span");
            lnameInput.className = "invalid";
            lnameError.className = "error active";
            lnameError.textContent="Enter a valid Last Name"
            validCheck = false;
        }
        if (!checkEmailValidity(emailInput)){
            let emailError = emailInput.parentElement.querySelector("span");
            emailInput.className = "invalid";
            emailError.className = "error active";
            emailError.textContent="Email email correctly"
            validCheck = false;
        }
        if (!checkPhoneValidity(phoneInput)){
            let phoneError = phoneInput.parentElement.querySelector("span");
            phoneInput.className = "invalid";
            phoneError.className = "error active";
            phoneError.textContent="Enter phone number correctly"
            validCheck = false;
        }
        if (!checkPasswordMatch(confPasswordInput)){
            let passwordError = confPasswordInput.parentElement.querySelector("span");
            confPasswordInput.className = "invalid";
            passwordError.className = "error active";
            passwordError.textContent="*Passwords do to match"
            validCheck = false;
        }

    
        return validCheck;
    }

    console.log(isValid);

    if(isValid){
        //allow submit
    } else {
        //display
    }

  });

// use input id to select error message
// use input id to select span by #id + span
// if