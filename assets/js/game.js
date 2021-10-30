var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 40;
var playerMoney = 10;



var enemyNames = ["Ronnie", "Craig", "cranbitchery"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) { 
    // Alert players they are starting a round
   

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you would like to quit?");
      
        // if yes (true), leave fight
      if(confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Bye Bye! ");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log( "playerMoney",playerMoney);
          break;
      }
      
    }

  
       
    // Subtract the value of playerAttack from the value of enemyHealth and ;use that result to update the value in enemy health variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

    // check enemies health 
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");

        //award player money for winning
        playerMoney = playerMoney + 20
        console.log(playerMoney);
        break;
       }
    else{
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
    //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the playerHealth variable
     playerHealth = playerHealth - enemyAttack;
    
     // Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

 // check players health
 if (playerHealth <= 0) {
     window.alert(playerName + " has died! ");
     break;
 }
 else {
     window.alert(playerName + " still has " +  playerHealth  + " health left. ");
   }
 }
};


var startGame = function() { 
    // reset player stats
    playerHealth = 100;
    playerAttack = 40;
    playerMoney = 10;
   for( var i =0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        console.log(playerHealth);
        window.alert("Welcome to robot Gladiators! Round" + (i+1));
        // pick new enemy to fight based on the index of enemyNames Array
        var pickedEnemyName= enemyNames[i];
        // resets enemy health before starting a new fight
        enemyHealth = 50
        // pass the pickeedEnemyName variables value into the fight function, where it will assume the value of enemyName parameter
        fight(pickedEnemyName);
    }else{
        window.alert("you have lost your robot in battle ! Game Over");
        break;
    }
   
  }
  //plsy again
  endGame();
};

var endGame = function() {
  // if player is still alive
  if (playerHealth > 0) {
      window.alert("Great job, you've survived the game ! You now have a score of" + playerMoney + " . ");
  }else {
      window.alert("you've lost your robot in battle.")
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if(playAgainConfirm) {
      // restart the game
      startGame();
  }else {
      window.alert("Thank you for  playing Robot Gladiators! Come back soon!");
  }
}
startGame();
