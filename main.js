const regForm = document.querySelector('.registerForm');
const logForm = document.querySelector('.loginForm');
const logBtn = document.querySelector('.logFormBtn');
const regBtn = document.querySelector('.regFormBtn');
const userName = document.getElementById('#user-name');  //login user name
const passWord = document.getElementById('#password');   // login password
const emailInput = document.getElementById('#emailInput');     // register email
const passwordInput = document.getElementById('#passwordInput');    //register password
const verPasswordInput = document.getElementById('#verpasswordInput');    //register verify password


logBtn.addEventListener('click', loginAction);
var loginUsername;
var loginPassword;
function loginAction(event){
    event.preventDefault();
    loginUsername = userName.value;
    loginPassword = passWord.value;
}
