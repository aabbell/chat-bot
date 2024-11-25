//variable for the sign in and sign up choices
const signupChoice = document.getElementById("signup-choice")
const signinChoice = document.getElementById("signin-chioce")

//variable for the signup and signin container
const signupBox = document.querySelector(".signup-box")
const signinBox = document.querySelector(".signin-box")


signupChoice.addEventListener("click",function(){
    signupBox.style.display = "block"

})

signinChoice.addEventListener("click",function(){
    signinBox.style.display = "block"
})

