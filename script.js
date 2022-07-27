const form = document.querySelector('#form');
const username = document.querySelector('#username');
const pw1 = document.querySelector('#ps1');
const pw2 = document.querySelector('#ps2');


form.addEventListener('submit', function(e){
    e.preventDefault();

    checkInputs()
})

function checkInputs(){
    const usernameVal = username.value.trim();
    const pw1Val = pw1.value.trim();
    const pw2Val = pw2.value.trim();

    if(usernameVal === ''){
        setError( username, "username cannot be blank")
    } else{
        setSuccess(username)
    }

    //for Password 
    if(pw1Val === ''){
        setError(pw1, "Password cannot be blank")
    } else if(pw1Val.length < 7){
        setError(pw1, "Password cannot be less than 7 characters")
    }
    else{
        setSuccess(pw1)
    }

    //for confirm pasword input
    if(pw2Val === ''){
        setError(pw2, "Password cannot be blank")
    } else if(pw2Val !== pw1Val){
        setError(pw2, "Enter password same as above")
    } else{
        setSuccess(pw2)
    }

}

function setError(input, message ){
    const formControl = input.parentElement //This is the form control div can also work like this input.parentElement
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccess (input){
    const formControl = input.parentElement
    
    // const formControl = input.parentElement; //This is the form control div

    //add success class
    formControl.className = 'form-control success'
}