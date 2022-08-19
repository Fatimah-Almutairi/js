function calcu(){
    "use strict";

    var amount = document.getElementById("price").value;

    var result = amount * 3.75;

        // ممكن كتابتها بالطريقة هذي 
    // let message = amount + " Doller is worth " + result + " Riyal ";

    // document.getElementById('message').innerHTML = message;


    var message = document.getElementById("message");

    if(amount === ""){
        message.innerHTML = "Can't Be Empty";
    }
    else if(amount === "0"){
        message.innerHTML = "The value must be not 0";
    }else if(isNaN(amount)){
        message.innerHTML = "The value must be number only";
    }else if(amount < 0){
        message.innerHTML = "Can't be the value negative number";
    }
    
    else{
        message.innerHTML = amount + " Doller is worth " + result + " Riyal ";
    }

}

