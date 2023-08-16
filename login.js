//console.log('login in js file')
document.getElementById('btn-submit').addEventListener('click', function() {
  //  console.log('submit button clicked')
   const emailField = document.getElementById('user-email');
   const email = emailField.value;  

const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(email,password)

// DENGER DO NOT VERIFY EMAIL & PASSWORD ON THE CLIENT SIDE 
// step 4 : verify email & password

if(email === 'refatbd1000@gmail.com' && password === '12345678'){
// console.log('valid user')  
window.location.href = 'bank.html';  
}
else{
    // console.log('invalid user')
    alert("Invalid your Email or Password");

}

})