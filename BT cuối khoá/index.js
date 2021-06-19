let Info = [
    {
        Email: "maimeo@gmail.com",
        Phone: "0123456789",
        Password: "cucucu",
        Username: "Mai"
    },
    {
        Email: "carrot@gmail.com",
        Phone: "987654321",
        Password: "cococo",
        Username: "Carrot"
    },
    {
        Email: "maicua@gmail.com",
        Phone: "1122334455",
        Password: "cicici",
        Username: "Con cua"
    },
]
localStorage.setItem("UserInfo", JSON.stringify(Info))


let SignInForm = document.querySelector('form')
SignInForm.addEventListener("submit", (ev) => {
    ev.preventDefault()
    let a = Info.find(info => info.Email == SignInForm.email.value)
     console.log(a)
    if (a == undefined){
        document.getElementById("wrong").innerHTML += "Please enter an email address or phone number"
    }
    else if(SignInForm.password.value == a.Password)
    { window.location.href = "https://www.youtube.com"} 
    else {
        document.getElementById("wrong").innerHTML += "Please enter an email address or phone number"
    }
    document.querySelector("form").reset()
})
