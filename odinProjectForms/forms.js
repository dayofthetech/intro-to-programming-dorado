//Below - what this does, as soon as I click on the input field, it logs the id name of that field, for example
//click on first name, logs first_name in console
// const messageForm = document.querySelector('#leave_message').addEventListener('click', function(e){
//     console.log(e.target.getAttribute('id', 'name'));
// })


const btn = document.getElementById('btn');
//global ul element
const messagesDisplay = document.getElementById('messages-box');

btn.addEventListener('click', function(e){
    e.preventDefault();

    //.value without the parenthesis is a method
    //with parenthesis is a function and the code wont work
    const firstName = document.getElementById('first_name').value
    const email = document.getElementById('email').value
    const userMessage = document.getElementById('user-message').value

    const message = document.createElement('li');
    message.innerHTML = [firstName, email, userMessage];
    messagesDisplay.append(message);
})
