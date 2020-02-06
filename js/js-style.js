alert("welcome")
   

function createstore () {

    var age = prompt("what is your age ?");
    console.log(age);
    var write = prompt("What is your favorite club?(ac milan,inter milan)")
    console.log(write);
    var picture;
    console.log(picture);
    
    // var greeting; 
    

    while (write !== 'ac milan' && write !== 'inter milan'){
        write = prompt("What is your favorite club?(ac milan,inter milan)")
     }

     var number = prompt("How many pieces of clothes do you want to buy?")
     console.log(number);
    
     for (var i=0;i<number;i++) {
        if (write === "ac milan") {
            picture = picture + '<img src="photos/theo.jpg">';
          }
          else if (write === "inter milan") {
              picture = picture + '<img src="photos/inter.jpg" alt="ggg">';
          }
        //   else {
        //       picture = "try again please!"
        //   }
     }
     
     
    // if (age > 0 && age<8   ) {     
    //     greeting = 'children clothes site';   
    // } 
    // else if (age >= 8 && age <=18) {     
    //     greeting = 'ِYoung clothes site';   
    // } else if (age > 18 && age <=100) {     
    //     greeting = 'Adult clothes site';   
    // } else {     
    //     greeting = 'Something went wrong!';   
    // } 
    return picture;
}



document.getElementById('result').innerHTML = createstore();
