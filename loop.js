var i = 0;
while(i <= 10){
    console.log(i);

    i++;
}
///------------------------
var l = 0;
do{
    console.log(l);
    l++;

} while(l <= 10);
///------------------------

for(var i = 0; i <= 10; i++){
    console.log(i);

}
///------------------------

var myCar = {
    name: "Accord",
    type: "sedan",
    year: 2019,
    color: "White"
};

for(var prop in myCar){
    if(myCar.hasOwnProperty(prop)){        //   فايدة الايف هنا عشان يطلع الصفات اللي بالاوبجكت هذا بس مايعطيني بروب من برا 

        console.log(prop + ": " + myCar[prop]);
    }
}


// break & continue 
// فايدة البريك يوقف اللوب عند شرط معين - والكونتينيو بشرط اذا حصله يطمر النتيجة المساويه للشرط ويكمل اللوب 

function generateYears(Start, End){
    var years;

    document.write("<select>");

    for(years = Start; years <= End; years++){
        document.write("<option value=\"" +years + "\">" + years + "</option>");


    }
    document.write("</select>");

}
generateYears(2010, 2022);
