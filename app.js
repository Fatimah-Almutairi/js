function calcu(){
    "use strict";

    var amount = document.getElementById("price").value;

    var result = amount * 3.75;

    let message = amount + " Doller is worth " + result + " Riyal ";

    document.getElementById('message').innerHTML = message;

    // ممكن كتابتها بالطريقة هذي 
    // var message = document.getElementById("message");
    // message.innerHTML = amount + " Doller is worth " + result + " Riyal ";

}

