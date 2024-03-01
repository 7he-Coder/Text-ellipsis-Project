const input = document.querySelector(`#input`);
const output = document.querySelector(`#output`);

function getDescription(text){
    console.log(text);
}

input.addEventListener(`input`, (event) => {
    output.textContent = getDescription(event.currentTarget.value)
});

// if(prompt(`Are you ready to play with input field?`)){
//     console.log(`Yes, Let's do it😍`);
// }else{
//     console.log(`No, I'm not intrested.😔`);
// }