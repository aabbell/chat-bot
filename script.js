const logout = document.getElementById('logout-choice')

//variable for the sign in and sign up choices
const signupChoice = document.getElementById("signup-choice")
const signinChoice = document.getElementById("signin-chioce")

//variable for the signup and signin container
const signupBox = document.querySelector(".signup-box")
const signinBox = document.querySelector(".signin-box")

const formSignup = document.querySelector(".form-signup")
const formSignin = document.querySelector(".form-signin")

const inputConvo = document.querySelector(".input-convo")
const passwordInput = document.querySelector(".password-input").value
console.log(passwordInput)


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

    
    const users = JSON.parse(localStorage.getItem('users'))|| []

    const userExist = users.some(user => user.userName === obj.userName)
    if (userExist){
        alert('userName already exists. Please choose a different username')
        return
    }
    users.push(obj)
    localStorage.setItem('users', JSON.stringify(users))
    

    alert ('Sign-up successful. Please log in.')

    signinBox.style.display = "block"
    signupBox.style.display = 'none'


})

formSignin.addEventListener("submit",function(e){
    e.preventDefault()
    const formData = new FormData(formSignin)
    const obj = Object.fromEntries(formData)

    console.log(obj)
    

    
    const users = JSON.parse(localStorage.getItem('users')) || []
    
    const user = users.find(user => user.userName === obj.userName)
    console.log(user)
    
    if (!user){
        alert ("invalid username or password.")
        return
    }

    const isPassword = passwordInput === obj.password
    console.log(user.password)
    console.log(obj.password)
    

    if (isPassword){
        alert ('login successful')
        localStorage.setItem('currentUser',JSON.stringify(user))
        inputConvo.style.display = 'block'
        signinBox.style.display = 'none'
        signupBox.style.display = "none"
        signinChoice.style.display = "none"
        signupChoice.style.display = "none"
        
    }else{
        alert("invalid password")
    }
   
})

logout.addEventListener("click", () =>{
    localStorage.removeItem('currentUser')
    inputConvo.style.display = "none"
    signinChoice.style.display = "block"
    signupChoice.style.display = "block"
    logout.style.display = "none"
    const usernameDisplay = document.getElementById('username-display')
    usernameDisplay.textContent = ""
    usernameDisplay.style.display = "none"
    alert("logged out successfully")
})


function displayCurrentUser(){
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser){
        const usernameDisplay = document.getElementById('username-display');
        usernameDisplay.textContent = `Welcome, ${currentUser.userName}!`;
        usernameDisplay.style.display = "block";
    }

}


document.addEventListener("DOMContentLoaded", () =>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser){
        inputConvo.style.display = 'block'
        signinBox.style.display = 'none'
        signupBox.style.display = "none"
        signinChoice.style.display = "none"
        signupChoice.style.display = "none"


        displayCurrentUser()
    }
    
})































// import dotenv from "dotenv"
// import openAI from "openai"

// dotenv.config()

// const openai= new openAI({
//     apiKey: process.env.api_key,
// })

// openai.chat.completions.create({
//     model:"gpt-3.5-turbo",
//     messages:[{role:"user",content:"Hello Chatgpt" }]
// }).then(res => {
//     console.log(res)
// })


// (async () => {
//     try {
//         const response = await openai.createChatCompletion({
//             model:"text-davinci-003",
//             prompt: "Hello, how are you?",
//             max_tokens:50,
//         })
//         console.log(response.data.choices[0].text.trim())
//     }catch(error){
//         console.log("Error has occured", error.message)
//     };
    
// });