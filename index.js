
// taking variable for count score
let userScore=0;
let systemScore=0;

// from choices div->apply each button for pressing and counting-3div 
const choices=document.querySelectorAll(".choice");


// taking random choice of system 
const genSystemChoice=()=>{
    const randomChoice=["Rock", "Paper", "Scissor"];
    let randomIdx=Math.floor(Math.random()*3);
    return randomChoice[randomIdx];
}


// make a funtion for taking user and system choice
const playGame=(userChoice)=>{
    console.log(`I choose:- ${userChoice}`);  //first its print user input choice
    const systemchoice=genSystemChoice();     //after above system taking random choice 
    console.log(`System choose:- ${systemchoice}`);
}


// foreach using for iterate each element of choices div->means 3 choice element under choices and add each n evry elemnt addeventlistener so should click to show their names

choices.forEach((el)=>{
    el.addEventListener("click",()=>{
        const userChoice= el.getAttribute("id");
        // console.log(`user select:-${userChoice}`);
        playGame(userChoice);
    });
});

