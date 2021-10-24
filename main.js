// ### Part 1:
// - Create function called `PrintName`.
// - The function should receive string argument and print the string to the console.

function PrintName(name){
    console.log(name);
}



// ### Part 2:
// - convert `PrintName` function into an arrow function 

const PrintName2 = (name) => {
    console.log(name);
}


// ## Timing Events  
// - Create a webpage that always displays the current time.
// - The time should be updated every second.

let myVar = setInterval(Timer, 1000);
 
function Timer() { 
    const x = document.querySelector(".timer")
    let d = new Date();
    let t = d.toLocaleTimeString();
    x.innerHTML = t;
}

// <i>Hint: use setInterval</i> 

