// Part 1

function PrintName(name){
console.log("The name in Part1 is"+name)
}

// Part2
 let Printname2=(name) => console.log("The name in Part2 is"+name)
    




//  Current Time 

setInterval(function(){ 
    const currentdate = new Date();
    var datetime = "  " 
    + currentdate.getHours() + ":" 
+    currentdate.getMinutes() + ":" + currentdate.getSeconds();
    document.getElementById("output").innerHTML = datetime;
 }, 3000);