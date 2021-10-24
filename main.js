//Arrow function
//Create function called PrintName.
//The function should receive string argument and print the string to the console.
function printName(name) {
    console.log("Name: " + name);
}
printName('sarah');

//convert PrintName function into an arrow function
(names) => console.log("Name: " + names);

//Timing Events
//Create a webpage that always displays the current time.
//The time should be updated every second.
let showtime = document.createElement('h1')
document.body.append(showtime)

setInterval(function() {
    let dt = new Date();
    showtime.innerHTML = "Time: " + ((dt.getHours())) + ":" + (dt.getMinutes() + ":" + (dt.getSeconds()));
}, 1000);