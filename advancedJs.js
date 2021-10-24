
// --- Arrow function ---

    // Part 1:
        // function PrintName (str)
        // {
        //         console.log(str)
        // }
        
    // Part 2:
        let PrintName = (str) =>{console.log(str)}


    
    
// --- Timing Events ---
let date ;
setInterval(()=>{
    date = new Date;
    let theH1 = document.querySelector("#time")
    theH1.innerHTML= date
}, 1000);


