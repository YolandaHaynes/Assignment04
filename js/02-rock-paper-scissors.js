function userPick(){
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();

    let validPick = ["rock", "paper", "scissors"];
    if (validPick.includes(choice)){
        return choice;
    }else {
        confirm("Invalid pick. Please try again.");
        return userPick();
    }
}

function computerPick(){
    let random = Math.random();
    if(random < 0.33){
        return "rock";
    } else if(random < 0.66){
        return "paper";
    } else {
        return "scissors";
    }
}

function main(){
    let user = userPick();
    let computer = computerPick();
    console.log(`You picked ${user}`);
    console.log(`Computer picked ${computer}`);
    if(user === computer){
        console.log("It's a tie!");
    } else if(user === "rock" && computer === "scissors" || user === "paper" && computer === "rock" || user === "scissors" && computer === "paper"){
        console.log("User wins!");
    } else {
        console.log("Computer wins!");
    }
}

main();