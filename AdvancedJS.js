function PrintName(n){

    console.log(n)

}

// converting it to an arrow function 
let PrintName1 = (n) => console.log(n)




// Timing events. 


const text = document.createElement("h1")



setInterval(function time(){

    let d = new Date()        // was not sure how to show time in java script so I googled how to do it and found help at
    let t = d.toLocaleTimeString()  // https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss
                                    // I also got little help from my friend 
    text.innerHTML=t
    
},1000)


 const tu = document.getElementById("container")

 tu.append(text)

