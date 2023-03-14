function attachEventListeners(){
    let count=0;
    document.getElementById("click").addEventListener("DOMCONTENTLOADED",function xyz(){
        console.log("DOM has loaded",++count);
    });
    }

attachEventListeners();



