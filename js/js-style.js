alert("welcome")

function createstore () {

    var age = prompt("what is your age ?");
    console.log(age);
    var greeting; 
     
    if (age > 0 && age<8   ) {     
        greeting = 'children clothes site';   
    } 
    else if (age >= 8 && age <=18) {     
        greeting = 'ِYoung clothes site';   
    } else if (age > 18 && age <=100) {     
        greeting = 'Adult clothes site';   
    } else {     
        greeting = 'Something went wrong!';   
    } 
    return greeting;
}



document.getElementById('result').innerText = createstore();