
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
  
    const isValid = function(){
        const fnameInput = document.getElementById('fname');
        const lnameInput = document.getElementById('lname');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone-number');
        const passwordInput = document.getElementById('password');
        const confPasswordInput = document.getElementById('confirm-password');

        let validCheck = true;
        //firstname
        if (checkFNameValidity(!fnameInput)){
            //display error message
            validCheck = false;
        }
        if (checkLNameValidity(!lnameInput)){
            //display error message
            validCheck = false;
        }
        if (checkFNameValidity(!emailInput)){
            //display error message
            validCheck = false;
        }
        if (checkFNameValidity(!phoneInput)){
            //display error message
            validCheck = false;
        }
        if (checkPasswordMatch(!confPasswordInput)){
            //display error message
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