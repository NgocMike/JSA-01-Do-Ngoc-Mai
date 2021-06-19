let formSignUp = document.querySelector ("form")


formSignUp.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log( formSignUp.userName.value)
    console.log( formSignUp.userEmail.value)
    console.log( formSignUp.pass.value)
})