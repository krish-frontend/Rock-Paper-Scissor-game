
// taking variable for count score
let userScore=0;
let systemScore=0;

// from choices div->apply each button for pressing and counting-3div 
const choices=document.querySelectorAll(".choice");


// make a funtion for taking user and system choice
let myChoice=(userChoice)=>{
    console.log(`I choose:- ${userChoice}`)
}


// foreach using for iterate each element of choices div->means 3 choice element under choices and add each n evry elemnt addeventlistener so should click to show their names

choices.forEach((el)=>{
    el.addEventListener("click",()=>{
        const userChoice= el.getAttribute("id");
        // console.log(`user select:-${userChoice}`);
        myChoice(userChoice);
    });
});

