let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let sysorBtn = document.getElementById("sysorBtn");


let myP = document.getElementById("myP");
let myH1 = document.getElementById("myH1");




rockBtn.onclick = function(){
let rockBtn = 2;
Math.floor(Math.random() * 3) + 1;


let randomNum = Math.floor(Math.random() * 3) + 1;
console.log(randomNum);
if(randomNum == 3){
    paperBtn = 3}  


    if(paperBtn > rockBtn){
        myP.textContent = "COMPUTER:PAPER";
        myH1.textContent = "YOU LOSE";
        paperBtn = 2;
        console.log("you lose")


   
    }
else if(randomNum == 2){
   
    myP.textContent = "COMPUTER:ROCK";


    myH1.textContent = "YOU DRAW";




}


else{console.log("you win");


myP.textContent = "COMPUTER:SYSOR";
myH1.textContent = "YOU WIN";


};
   
}






paperBtn.onclick = function(){
    let sysorBtn = 2;
    Math.floor(Math.random() * 3) + 1;
   
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    if(randomNum == 3){
        rockBtn = 3}  
   
        if(rockBtn > paperBtn){
            myP.textContent = "COMPUTER:ROCK";
            myH1.textContent = "YOU WIN";
            rockBtn = 2;
            console.log("you win")
   
       
        }
    else if(randomNum == 2){
       
        myP.textContent = "COMPUTER:PAPER";
   
        myH1.textContent = "YOU DRAW";
   
   
    }
   
    else{console.log("you lose");
   
    myP.textContent = "COMPUTER:SYSOR";
    myH1.textContent = "YOU LOSE";
   
    };
       
    }
   
   
   
    sysorBtn.onclick = function(){
        let paperBtn = 2;
        Math.floor(Math.random() * 3) + 1;
       
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        if(randomNum == 3){
            sysorBtn = 3}  
       
            if(sysorBtn > paperBtn){
                myP.textContent = "COMPUTER:PAPER";
                myH1.textContent = "YOU WIN";
                sysorBtn = 2;
                console.log("you win")
       
           
            }
        else if(randomNum == 2){
           
            myP.textContent = "COMPUTER:SYSOR";
       
            myH1.textContent = "YOU DRAW";
       
       
        }
       
        else{console.log("you lose");
       
        myP.textContent = "COMPUTER:ROCK";
        myH1.textContent = "YOU LOSE";
       
        };
           
        }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   














































