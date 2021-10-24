// # Advanced JavaSript Lab

// ## Arrow function 

// ### Part 1:
// - Create function called `PrintName`.
// - The function should receive string argument and print the string to the console.
function PrintName1(str) {
    console.log(str)
}
PrintName1("Part 1 ans")
// ### Part 2:
// - convert `PrintName` function into an arrow function 

let PrintName2 = str => {console.log(str)};
PrintName2("Part 2 ans")
// ## Timing Events  
// - Create a webpage that always displays the current time.
// - The time should be updated every second.

// <i>Hint: use setInterval</i> 

myVar = setInterval(function(){ time(); }, 1000);

function time() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const timeP = document.querySelector("#time")
    timeP.innerHTML = time
}

