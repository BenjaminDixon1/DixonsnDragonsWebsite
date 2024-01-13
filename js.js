function toggleRole(role0, role1) {
    if (role0.value === "actor") {
       role1.value = "target";
    } else {
       role1.value = "actor";
    }
   }

   const role0 = document.getElementById("role0");
const role1 = document.getElementById("role1");

role1.value = 'target';


function returnStat(stat) {
   return document.getElementById(stat).value;
}

function lightAttackFunction() {
   if (role0.value === "actor") {
      var attacker = '0';
      var defender = '1';
   } else {
      var attacker = '1';
      var defender = '0';
   }

let attackerMod = Number(returnStat(('agilityValue' + attacker))) + Number(returnStat(('combatTrainingValue' + attacker)));
let defenderMod = Number(returnStat(('ARValue' + defender))) + Number(returnStat(('combatTrainingValue' + defender)));

let attackResult = attackerMod - defenderMod;

if (attackResult > 0) {
   document.getElementById('healthValue' + defender).value -= Number(returnStat(('damageValue' + attacker)));
   if (document.getElementById('healthValue' + defender).value < 1) {
      document.getElementById('commentBox').textContent = 'Attack successful, character ' + (Number(defender) + 1) + ' is dead'

   } else {
   document.getElementById('commentBox').textContent = 'Attack is successful, character ' + (Number(defender) + 1) + ' suffers ' + Number(returnStat(('damageValue' + attacker))) + ' damage';
   }
} else {
   document.getElementById('commentBox').textContent = 'Attack unsuccessful, character ' + (Number(defender) + 1) + ' may respond';
}

console.log(attackResult);
};


function heavyAttackFunction() {
   if (role0.value === "actor") {
      var attacker = '0';
      var defender = '1';
   } else {
      var attacker = '1';
      var defender = '0';
   }

let attackerMod = Number(returnStat(('strengthValue' + attacker))) + Number(returnStat(('combatTrainingValue' + attacker)));
let defenderMod = Number(returnStat(('ARValue' + defender))) + Number(returnStat(('combatTrainingValue' + defender)));

let attackResult = attackerMod - defenderMod;

if (attackResult > 0) {
   document.getElementById('healthValue' + defender).value -= Number(returnStat(('damageValue' + attacker)));
   if (document.getElementById('healthValue' + defender).value < 1) {
      document.getElementById('commentBox').textContent = 'Attack successful, character ' + (Number(defender) + 1) + ' is dead'

   } else {
   document.getElementById('commentBox').textContent = 'Attack is successful, character ' + (Number(defender) + 1) + ' suffers ' + Number(returnStat(('damageValue' + attacker))) + ' damage';
   }
} else {
   document.getElementById('commentBox').textContent = 'Attack unsuccessful, character ' + (Number(defender) + 1) + ' may respond';
}

console.log(attackResult);
};

function main(calculationChoice) {
   if (calculationChoice === 'lightAttack') {
      lightAttackFunction();
   } else if (calculationChoice === 'heavyAttack') {
      heavyAttackFunction();
   }   else {
      alert('No calculation selected');
   }
};

function onCalculateClick() {

   const calculateButton = document.getElementById('calculateButton');
   calculateButton.addEventListener("click", function () {

   calculationChoice = document.getElementById('calculationOptions')
      main(calculationChoice.value)
});
}

onCalculateClick();

role0.addEventListener("change", () => toggleRole(role0, role1));
role1.addEventListener("change", () => toggleRole(role1, role0));

