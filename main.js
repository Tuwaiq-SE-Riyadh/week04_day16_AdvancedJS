function print(x){
    console.log("I'm "+x);
}
let printName = (x)=>{
    console.log("I'm "+x);
}

print('Namhd');
printName('Sara') 




let id = setInterval(() => { 
    timer()
 }, 1000);
 
 function timer() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
 };