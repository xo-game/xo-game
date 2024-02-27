/*
to custom the message of an input required
*/
function verifyRequiredField(event) {
    //get the reference of the field when occur the event
    const field = event.target;
    //get the name of the field where the event occur
    const fieldName = field.getAttribute('name');

    //verify if the field is empty or only contain blank spaces
    if (!field.value.trim()) {
        //if it is empty
        field.setCustomValidity(`Need to complete the field: ${fieldName}`);
        //if is not empty, restore the validate message
    } else {
        field.setCustomValidity('');
    }
}

//select all the required field of the form
const requiredField = document.querySelectorAll('form input[required]');
//iterate over the required fields and add an event invalid
requiredField.forEach(function (campo) {
    campo.addEventListener('invalid', verifyRequiredField);
});

/***************/
/*
Verify the password equality
*/

function verifyPasswordEquality() {
    const pwd1 = document.getElementById('pwd').value;
    const pwd2 = document.getElementById('pwdConfirm').value;

    //if both passwords are equal, print a success message
    if(pwd1 === pwd2) {
        alert('The proccess was success. Welcome!')
    }
    else{
        alert("The password don't match");
    }
}

/***************/
/*
To verify if the email ends with @narcis.com
*/

function verifyEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.toLowerCase();

    //the email needs to end with @narcis.com
    if(email.endsWith('@narcis.com')) {
        alert('The email exist');
        verifyPasswordEquality();
    }
    else {
        alert('You need to insert a @narcis.com in email field')
    }
}

/***************/
/*
All submit functiions
*/

document.addEventListener('submit', verifyEmail);




