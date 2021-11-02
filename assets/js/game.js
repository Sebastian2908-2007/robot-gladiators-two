

var fight = function(enemy) {
    // keep track of who goes first
    debugger;
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
        console.log(isPlayerTurn);
    }
  
    while(playerInfo.health > 0 && enemy.health > 0) { 
        if (isPlayerTurn) { 
            console.log(isPlayerTurn);
    // Alert players they are starting a round
   if(fightOrSkip()) {
       // if true , leave fight by breaking loop
       break;
   }
       
    // generate random damage value based on a players attack power
var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

enemy.health = Math.max(0, enemy.health - damage);

    // Log a resulting message to the console so we know that it worked.
console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
  );

    // check enemies health 
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died! ");

        //award player money for winning
        playerInfo.money = playerInfo.money + 20
       
        break;
       }
    else{
        window.alert(enemy.name + " still has " + enemy.health + " health left. ");
    }
}else {
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

     playerInfo.health = Math.max(0, playerInfo.health - damage);
    
     // Log a resulting message to the console so we know that it worked.
console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
  );

 // check players health
 if (playerInfo.health <= 0) {
     window.alert(playerInfo.name + " has died! ");
     break;
 }else {
     window.alert(playerInfo.name + " still has " +  playerInfo.health  + " health left. ");
   }
}
 // switch turn order for next round
 isPlayerTurn = !isPlayerTurn;
 
 }
};




// function for generating random numeric values
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};



var startGame = function() { 
    // reset player stats
    playerInfo.reset();
   for( var i =0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        //console.log(playerHealth);
        window.alert("Welcome to robot Gladiators! Round" + (i+1));
       
        // pick new enemy to fight based on the index of enemyNames Array
        var pickedEnemyObj = enemyInfo[i];
        // resets enemy health before starting a new fight
        pickedEnemyObj.health = randomNumber(40, 60);
        // pass the pickeedEnemyName variables value into the fight function, where it will assume the value of enemyName parameter
        fight(pickedEnemyObj);

        // if we're not at the last enemy in the array
        if ( playerInfo.health > 0 && i < enemyInfo.length -1) {
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
  if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game ! You now have a score of" + playerInfo.money + " . ");
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
      "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one: '1 = REFILL', '2 = UPGRADE', or '3 = LEAVE'  to make a choice"
  );

  // change string to integer
  shopOptionPrompt = parseInt(shopOptionPrompt); 
   // use switch to carry out action
  switch (shopOptionPrompt) {
    case 1:
       playerInfo.refillHealth();
        break;
    case 2:
    playerInfo.upgradeAttack();
            break;
    case 3:
            window.alert("leaving the store.");
            break;
     default:
           window.alert("you did not pick a valid option. Try Again.");
            // call shop again to force player to pick a valid option
           shop();
           break;
  }
}; 

var getPlayerName = function() {
    var name = "";

    while ( name === "" || name === null) {
      name = window.prompt("What is your robots name?");
    }

    console.log("your robots name is " + name);
    return name;
}

var fightOrSkip = function() {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
      promptFight = promptFight.toLowerCase();
  if(promptFight === "" || promptFight === null) {
      window.alert("You need to provide a valid answer! please try again. ");
      return fightOrSkip();
  }

    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you would like to quit?");
      
        // if yes (true), leave fight
      if(confirmSkip) {
          window.alert(playerInfo.name + " has decided to skip this fight. Bye Bye! ");
          // subtract money from playerMoney for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10)
         // console.log( "playerMoney",playerMoney);
        return true;
      }
      
    }
return false;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
        window.alert("refilling players health by 20 for 7 dollars.");     
        this.health += 20;
        this.money -= 7;
        }else {
            window.alert("you do not have the money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
        window.alert("Upgrading players attack by six for seven dollars" );    
        this.attack += 6;
        this.money -= 7;
    } else {
        window.alert("you don't have the money!");
    }
  }
};



var enemyInfo = [
    {name: "Roberto",
     attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    },
];

startGame();
