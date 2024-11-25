//variable for the sign in and sign up choices
const signupChoice = document.getElementById("signup-choice")
const signinChoice = document.getElementById("signin-chioce")

//variable for the signup and signin container
const signupBox = document.querySelector(".signup-box")
const signinBox = document.querySelector(".signin-box")

const formSignup = document.querySelector(".form-signup")
const formSignin = document.querySelector(".form-signin")

const inputConvo = document.querySelector(".input-convo")

signupChoice.addEventListener("click",function(){
    signinBox.style.display = "none"
    signupBox.style.display = "block"
    
})


signinChoice.addEventListener("click",function(){
    signupBox.style.display = "none"
    signinBox.style.display = "block"
    
})


formSignup.addEventListener("submit", function(e){
    e.preventDefault()
    let data = new FormData(formSignup)
    let obj = Object.fromEntries(data)
    let json = JSON.stringify(obj)
    localStorage.setItem('form',json)
})

formSignin.addEventListener("submit",function(e){
    e.preventDefault()
    const dataJson = localStorage.getItem('form')
    const dataObj = JSON.parse(dataJson)
    
    const indata = new FormData(formSignin)
    const inobj = Object.fromEntries(indata)
    
    
    if (inobj.userName === dataObj.userName && inobj.password === dataObj.password){
        inputConvo.style.display = "block"
        signupBox.style.display = "none"
        signinBox.style.display = "none"
        signinChoice.style.display = "none"
        signupChoice.style.display = "none"

    }else{
        alert("please try again")
    }
})
