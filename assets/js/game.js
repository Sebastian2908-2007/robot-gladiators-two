var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyName = "Ronnie";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    // Alert players they are starting a round
    window.alert(" Welcome to Robot Gladiators! ");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    

    if (promptFight === "fight" || promptFight === "FIGHT") { 

    // Subtract the value of playerAttack from the value of enemyHealth and ;use that result to update the value in enemy health variable
    enemyHealth = enemyHealth - playerAttack;

    

    // check enemies health 
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else{
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
    //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the playerHealth variable
     playerHealth = playerHealth - enemyAttack;
    

 // check players health
 if (playerHealth <= 0) {
     window.alert(playerName + " has died! ");
 }
 else {
     window.alert(playerName + " still has " +  playerHealth  + " health left. ");
 }
}else if (promptFight === "skip" || promptFight === "SKIP") {
  var confirmSkip = window.confirm("Are you sure you would like to quit?");

  // if yes (true), leave fight
if(confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Bye Bye! ");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    console.log(playerMoney);
}else {
    fight();
}

 }else{
     window.alert("You need to enter a valid option. Try again!");
 }
};

fight(); 
