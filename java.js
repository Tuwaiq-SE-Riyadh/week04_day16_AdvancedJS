function PrintName(e) {    
      return  console.log(e);
    }
    PrintName("Norah")

    let PrintName1=(e) => console.log(e);
    PrintName1("Norah")

    setInterval(() => {
        var today = new Date();
       var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      document.getElementById("out").innerHTML=(time);
    }, 1000);
    