/*
to custom the message of an input required
*/
function validarCampoRequerido(event) {
    //get the reference of the field when occur the event
    const campo = event.target;
    //get the name of the field where the event occur
    const nombreCampo = campo.getAttribute('name');

    //verify if the field is empty or only contain blank spaces
    if (!campo.value.trim()) {
        //if it is empty
        campo.setCustomValidity(`Need to complete the field: ${nombreCampo}`);
        //if is not empty, restore the validate message
    } else {
        campo.setCustomValidity('');
    }
}

//select all the required field of the form
const camposRequeridos = document.querySelectorAll('form input[required]');
//iterate over the required fields and add an event invalid
camposRequeridos.forEach(function (campo) {
    campo.addEventListener('invalid', validarCampoRequerido);
});

/***************/

/*
To verify if the email ends with @narcis.com
*/
function verifyEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.toLowerCase();

    if(email.endsWith('@narcis.com')) {
        alert('The email exist');
        alert(email);
        verifyPasswordEquality();
    }
    else {
        alert('You need to insert a @narcis.com in email field')
    }
}

/*
Verify the password equality
*/

function verifyPasswordEquality() {
    const pwd1 = document.getElementById('pwd').value;
    const pwd2 = document.getElementById('pwdConfirm').value;
    if(pwd1 === pwd2) {
        alert('The proccess was success!')
    }
    else{
        alert("The password don't matches");
    }
}

/*
All submit functiions
*/

document.addEventListener('submit', verifyEmail);




