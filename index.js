 document.getElementById('passwordConfirm').addEventListener('change', passwordMatch);
 document.getElementById('password').addEventListener('change', passwordMatch);
 function passwordMatch () {
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("passwordConfirm");
    const errorMsg = document.getElementById("errorMsg");
    if (password.value !== passwordConfirm.value) {
        errorMsg.innerHTML = "* Passwords do not match";
        password.setAttribute ("style", "border-color:red");
        passwordConfirm.setAttribute ("style", "border-color:red");

    } else {
        errorMsg.innerHTML= "";
         password.setAttribute ("style", "border-color:green");
        passwordConfirm.setAttribute ("style", "border-color:green");
        
    }
   
    
}