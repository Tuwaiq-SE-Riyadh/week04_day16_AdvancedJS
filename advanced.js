function printName(fristname){
   return (fristname)
}
print();

//arrowfunction
let printName=(fristname)=>fristname
  


function displayTime(){
   setInterval(function(){
   // var today =new Date();

let hour=today.getHours()>12 ? today.getHours()-12:today.getHours()
let minut=today.getMinutes()
let seconds=today.getSeconds()
   
   var output=hour+":"+minut+":"+":"+seconds
   document.write(output);
},11000);

}
displayTime()