let button = document.getElementsByClassName("btn")[0];
let form = document.querySelector(".form");
let input = document.querySelector("#input1");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();
let output = document.querySelector(".output");


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uservalue = input.value;
    console.log(uservalue);
    let UserYear = uservalue.split("-")[0];
    let UserMonth = uservalue.split("-")[1];
    let UserDay = uservalue.split("-")[2];

    let resultyear;
    let resultmonth;
    
    if(UserMonth <= month){
        if(UserDay <= day){
            resultyear = year - UserYear;
            resultmonth = month - UserMonth;
            console.log(resultyear);
            console.log(resultmonth);
            
        }
        else{
            resultyear = (year - UserYear) - 1;
            resultmonth = 12 - UserMonth + month ;
            console.log(resultyear);
            console.log(resultmonth);
        }
    }
    else{
        resultyear = (year - UserYear) - 1;
        resultmonth = 12 - UserMonth + month ;
        console.log(resultyear);
        console.log(resultmonth);
        
    }


    output.innerHTML = `You are ${resultyear} years  and ${resultmonth} month old `

});

