// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
// step-2: get the email address inside the email input filed
// always remember to use .value to get text from an input filed
const emailFiled = document.getElementById('user-email');
const email = emailFiled.value;
// step-3: get password
const passwordFiled = document.getElementById('user-pass');
const password = passwordFiled.value;
// DANGER: Do not verify email pssword on the client side
// step-4: Verify email and password and cheek whether valid user or not
if(email === 'sontan@baap.com' && password === 'secret'){
    window.location.href = 'bank.html';
}
else{
    alert('Invalid user');
}
})