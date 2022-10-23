//Below - what this does, as soon as I click on the input field, it logs the id name of that field, for example
//click on first name, logs first_name in console
// const messageForm = document.querySelector('#leave_message').addEventListener('click', function(e){
//     console.log(e.target.getAttribute('id', 'name'));
// })


// const btn = document.getElementById('btn');
// const messagesDisplay = document.getElementById('messages-box');

// btn.addEventListener('click', function(e){
//     e.preventDefault();

//     //.value without the parenthesis is a method
//     //with parenthesis is a function and the code wont work
//     const firstName = document.getElementById('first_name').value
//     const email = document.getElementById('email').value
//     const userMessage = document.getElementById('user-message').value

//     const message = document.createElement('li');
//     message.innerHTML = [firstName, email, userMessage];
//     messagesDisplay.append(message);
// })

//main action of button
const btn = document.getElementById('btn');
//global ul element
const messagesDisplay = document.getElementById('messages_box');


btn.addEventListener('click', function(e){
    e.preventDefault();

    //grab the values from each form field
    const firstName = document.getElementById('first_name').value
    const email = document.getElementById('email').value
    const userMessage = document.getElementById('user_message').value

    //create the elements that will go inside the html
    const message = document.createElement('li');
    const link = document.createElement('a');
    const span = document.createElement('span');

    //create button to remove the message
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.setAttribute('type', 'button');
    removeBtn.addEventListener('click', function(){
        messagesDisplay.removeChild(message);
    })

    //create button to edit message

    //format how the elements will look like
    span.innerHTML = ` wrote ${userMessage} `;
    link.href = email;
    link.innerHTML = firstName;

    message.append(link);
    message.append(span);
    message.append(removeBtn);
    messagesDisplay.append(message);

    const messageForm = document.getElementById('leave_message').reset();

})
