// const fun = function PrintName(string){
// console.log(string);
// }

const fun =  PrintName= (string)=>{
    console.log(string);
    }

    PrintName("shahad");

const div = document.getElementById("time");

setInterval(function(){let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    div.innerText = time;}, 1000)