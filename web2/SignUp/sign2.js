let formSignUp = document.querySelector('form')
let accounts = [];


formSignUp.addEventListener("submit", (ev) => {
    ev.preventDefault();
    // if (userName == "" || userEMail == "" || userPassWord == "" || userConfirm == ""){
    //     console.log("input cannot be missing")
    // }
    if (!formSignUp.username.value){
        document.getElementById("missU").innerHTML += "Missing username"
    }
    if(!formSignUp.email.value){
        document.getElementById("missE").innerHTML += "Missing user email"
    }
    if(!formSignUp.password.value){
        document.getElementById("missP").innerHTML += "Missing password"
    }
    if(formSignUp.cf-password.value == null){
        document.getElementById("missC").innerHTML += "Missing user confirm"
    }
    // if(formSignUp.cf-password.value !== formSignUp.password.value){
    //     console.log("confirm password failed")
    // }
    let account = {
        username: formSignUp.username.value,
        email: formSignUp.email.value,
        password: formSignUp.password.value,
    }
    accounts.push(account)
    document.querySelector('form').reset() //to clear the form for the next entry

//For debugging purpose
// console.log(accounts)

// saving to local storage
    localStorage.setItem('UserAccounts', JSON.stringify(accounts))
    window.location.href = "http://127.0.0.1:5500/JSA-01-Do-Ngoc-Mai/web2/web2.html"

})
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('btn').addEventListener('click', addAccount)
// })