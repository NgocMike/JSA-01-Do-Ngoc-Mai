accounts =  JSON.parse(localStorage.getItem('UserAccounts'))
// console.log(accounts)
let formLogin = document.querySelector('form')
formLogin.addEventListener("submit", (ev) => {
    ev.preventDefault()
    let u = accounts.find(account => account.username == formLogin.userlogin.value)
    // console.log(u)
    if (u == undefined) {
        document.getElementById("wronginfo").innerHTML += "Wrong username or password, please try again"
    }
    else if(formLogin.loginpassword.value == u.password) {
        window.location.href = "http://127.0.0.1:5500/JSA-01-Do-Ngoc-Mai/web2/web2.html"
    } else {
        document.getElementById("wronginfo").innerHTML += "Wrong username or password, please try again"
    }
    document.querySelector('form').reset()
})