// Create a new date object and store it in a variable named today
// Retrieve the current year from your date object and store it in a variable named thisYear
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

let today = new Date();
const thisYear = today.getFullYear();
//console.log(today.getFullYear());

//https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events
//Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer
const footer = document.querySelector('#footer');

//Create a new paragraph (p) element and store it in a variable named copyright
const copyright = document.createElement('p');

//Set the inner HTML of your copyright element to display your name and the current year
copyright.innerHTML = "Alberto " + thisYear;

//Using "DOM Manipulation", append the copyright element to the footer
footer.appendChild(copyright);

//List your technical skills by creating an Array of String values and store it in a variable named skills
//  Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection
//  hint: querySelector or getElementById method

const skills = ['python', 'javascript', 'design', 'web3']

//Using "DOM Selection", query the skills Section (instead of the entire document)
//to find the <ul> element and store it in a variable named skillsList
const skillsList = document.getElementById('#skills');

// Create a for loop to iterate over your skills Array, starting at index 0
// Inside the loop, create a new list item (li) element and store it in a variable named skill
// hint: createElement method

//https://www.3schools.in/2021/12/create-li-from-loop-through-array-js.html
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');

    //Both innerText and innerHTML work in displaying each individual skill

    //Below - this works as setting the li element to the str
    skill.innerText = skills[i];

    //skill.innerHTML = skills[i];
    document.getElementById("skills").appendChild(skill);
}

// - Solves the problem by adding each str into a li, but it does not uses a loop
// skills.forEach(function(item) {
//     var li = document.createElement('li');
//     var text = document.createTextNode(item);
//     li.appendChild(text);
//     document.getElementById("skills").appendChild(li);
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

