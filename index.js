
// step 1. taking variable for count score
let userScore=0;
let systemScore=0;  


// step 2. from choices div->apply each button for pressing and counting-3div 
const choices=document.querySelectorAll(".choice");


//step 3. foreach using for iterate each element of choices div->means 3 choice element under choices and add each n evry elemnt addeventlistener so should click to show their names

choices.forEach((el)=>{
    el.addEventListener("click",()=>{
        const userChoice= el.getAttribute("id");
       // console.log(`user select:-${userChoice}`);
        playGame(userChoice);
    });
});


// step 4. taking random choice of system 
const genSystemChoice=()=>{
    const randomChoice=["Rock", "Paper", "Scissor"];
    let randomIdx=Math.floor(Math.random()*3);
    return randomChoice[randomIdx];
}


// step 5. make a funtion for taking user and system choice
const playGame=(userChoice)=>{
    console.log(`I choose:- ${userChoice}`);  //first its print user input choice
    const systemchoice=genSystemChoice();     //store in var for clling return function --return a funtion to variable 
    console.log(`System choose:- ${systemchoice}`);  //after above system taking random choice 
    

    // making function for each result call and show all posibbilities in paraText
    let resultMssgShow=document.querySelector("#msg");

    let userPoint=document.querySelector("#u-score");
    let systemPoint=document.querySelector("#sys-score");
    
  
    let drawResult=()=>{
       return "Both choice is same [Result= Draw]";
    }

    let userWin=()=>{
       return "User Win!!";
    }

    let systemWin=()=>{
        return "System Win!!";
    }

    
    
    //step 5(A). consition win statement of user and system
        if(userChoice === systemchoice){
        resultMssgShow.innerText=drawResult();
        resultMssgShow.style.background="black";
        // resultMssgShow.style.color="white";

        }
        else if(
            userChoice==="Rock" && systemchoice==="Scissor" ||
            userChoice==="Scissor" && systemchoice==="Paper" ||
            userChoice==="Paper" && systemchoice==="Rock"

        ){
        userScore++;
        userPoint.innerText=userScore;
       
        resultMssgShow.innerText=userWin() && winnerFunct();
        resultMssgShow.style.background="green";
     
        }
        else{
        systemScore++;
        systemPoint.innerText=systemScore;
        
        resultMssgShow.innerText=systemWin() && winnerFunct();
        resultMssgShow.style.background="red";}
        
    
    
        
        //choose who is win and declared the name
        
        const winnerFunct=()=>{
            if(userPoint===10){
                resultMssgShow.innerText="This Round--> User Wins..!!";
                againPlay.style.display="block";
            }else if(systemPoint===10){
                resultMssgShow.innerText="This Round--> System Wins..!!"
                againPlay.style.display="block";
            }
        }
        
        //this function create to end the round when anyone will reach count 10
        let againPlay=document.querySelector("#btnRound");
    
        againPlay.addEventListener("click",()=>{
            
            userScore=0;
            systemScore=0;

            userPoint.innerText=userScore;
            systemPoint.innerText=systemScore;
    
            resultMssgShow.innerText="Play Again & Defeat Your Opponent...!!";
            
            againPlay.style.display="none";
        
        })
    }          





