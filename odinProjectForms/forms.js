// const form  = document.getElementsByName('leave_message');

// form.addEventListener('submit', (event) => {
//     // handle the form data
//     event.preventDefault();
// });
const messageForm = document.getElementsByName('leave_message');
messageForm.addEventListener('submit', (event) => {
    // const name =
    console.log(event.target);
    console.log(event.target.name);
    console.log("hello world");
    event.preventDefault();
})
console.log("hello world outside function");
