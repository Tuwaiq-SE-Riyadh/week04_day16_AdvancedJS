//-------------------------Part 1:------------------

// function PrintName(text) {
    
//     console.log(text)
// }

// PrintName("Abdullah")

//-------------------------Part 2:--------------------


const PrintName = text => console.log(text);

PrintName("Abdullah")


//--------------------------setInterval------------------------



setInterval(() => {
    let time = new Date();
     document.querySelector("#time").innerText = time.toLocaleString('en-US', 
     { hour: 'numeric',
       minute: 'numeric',
       second: 'numeric',
    });
}, 1000);
