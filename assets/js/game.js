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
          playerMoney = Math.max(0, playerMoney - 10)
         // console.log( "playerMoney",playerMoney);
          break;
      }
      
    }

  
       
    // generate random damage value based on a players attack power
var damage = randomNumber(playerAttack - 3, playerAttack);

enemyHealth = Math.max(0, enemyHealth - damage);

    // Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

    // check enemies health 
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");

        //award player money for winning
        playerMoney = playerMoney + 20
        //console.log(playerMoney);
        break;
       }
    else{
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

     playerHealth = Math.max(0, playerHealth - damage);
    
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

// function for generating random numeric values
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};


var startGame = function() { 
    // reset player stats
    playerHealth = 100;
    playerAttack = 40;
    playerMoney = 10;
   for( var i =0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        //console.log(playerHealth);
        window.alert("Welcome to robot Gladiators! Round" + (i+1));
        // pick new enemy to fight based on the index of enemyNames Array
        var pickedEnemyName= enemyNames[i];
        // resets enemy health before starting a new fight
        enemyHealth = randomNumber(40, 60);
        // pass the pickeedEnemyName variables value into the fight function, where it will assume the value of enemyName parameter
        fight(pickedEnemyName);

        // if we're not at the last enemy in the array
        if ( playerHealth > 0 && i < enemyNames.length -1) {
           var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
           // if yes take them to the shop() function
           if(storeConfirm) {
               shop();
           }
        }
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
};

var shop = function() {
  // ask the player what they'd like to do
  var shopOptionPrompt = window.prompt(
      "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one: 'REFILL', 'UPGRADE', or 'LEAVE'  to make a choice"
  );
  // use switch to carry out action
  switch (shopOptionPrompt) {
      case "REFILL":
      case "refill":
          if( playerMoney >=7) {
          
          window.alert("Refilling player's health by 20; for 7 dollars.");
    // increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
    console.log(playerHealth);
    console.log(playerMoney);
          }else {
              window.alert("You dont have enough money!");
          }

    break;
    case "UPGRADE":
    case "upgrade":
        if (playerMoney >= 7) { 
        window.alert("Upgraading player's attack by 6 for 7 dollars");
        // increase the attack and decrease the money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        console.log(playerAttack);
        console.log(playerMoney);
        }else{
            window.alert("you dont have the money !")
        }

        break;
        case "LEAVE":
        case "leave":
            window.alert("leaving the store.");
            "do nothing so function will end"
            break;
            default:
                window.alert("you did not pick a valid option. Try Again.");
                // call shop again to force player to pick a valid option
                shop();
                break;
  }
}; 

startGame();
