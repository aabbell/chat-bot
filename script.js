
import { GoogleGenerativeAI } from "https://cdn.skypack.dev/@google/generative-ai";



const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyDG687_HrvFDOzrwgDNVeIUsOZ_867_LUA";
let chat;

async function runChat() {

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        chat = model.startChat({ 
            history: [],
     });

}

async function handleChatInput() {
    const askInput = document.querySelector(".ask-input");
    const userMessage = askInput.value.trim();

    const result = await chat.sendMessage(userMessage);
    if (result.error) {
        console.error(('AI Error:'), result.error.message);
        return;
        }
        const response = result.response.text();
        console.log(('AI:'), response);
        const chatOutput = document.querySelector(".chat-output");
        const userDiv = document.createElement("div");
        userDiv.textContent = `You: ${userMessage}`;
        userDiv.className = "user-message";
    
        const aiDiv = document.createElement("div");
        aiDiv.textContent = `AI: ${response}`;
        aiDiv.className = "ai-message";

        chatOutput.appendChild(userDiv);
        chatOutput.appendChild(aiDiv);

        askInput.value = "";
        }
   


document.addEventListener("DOMContentLoaded", () => {

    runChat();

    const sendButton = document.querySelector(".send-button");
    sendButton.addEventListener("click", handleChatInput);

    // Optionally, allow pressing Enter to send a message
    const askInput = document.querySelector(".ask-input");
    askInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleChatInput();
        }
    });
});


const logout = document.getElementById('logout-choice')

//variable for the sign in and sign up choices
const signupChoice = document.getElementById("signup-choice")
const signinChoice = document.getElementById("signin-chioce")

//variable for the signup and signin container
const signupBox = document.querySelector(".signup-box")
const signinBox = document.querySelector(".signin-box")

const formSignup = document.querySelector(".form-signup")
const formSignin = document.querySelector(".form-signin")

const inputConvo = document.querySelector(".chat-container")
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

    const isPassword = user.password === obj.password
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



































