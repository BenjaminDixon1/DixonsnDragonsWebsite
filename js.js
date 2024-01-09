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






let strengthValue0 = document.getElementById('strengthValue0').value;
let agilityValue0 = document.getElementById('agilityValue0').value;
let combatTrainingValue0 = document.getElementById('combatTrainingValue0').value;
let charismaValue0 = document.getElementById('charismaValue0').value;
let perceptionValue0 = document.getElementById('perceptionValue0').value;
let intelligenceValue0 = document.getElementById('intelligenceValue0').value;
let healthValue0 = document.getElementById('healthValue0').value;
let damageValue0 = document.getElementById('damageValue0').value;
let ARValue0 = document.getElementById('ARValue0').value;



strengthValue1 = document.getElementById('strengthValue1').value;
agilityValue1 = document.getElementById('agilityValue1').value;
combatTrainingValue1 = document.getElementById('combatTrainingValue1').value;
charismaValue1 = document.getElementById('charismaValue1').value;
perceptionValue1 = document.getElementById('perceptionValue1').value;
intelligenceValue1 = document.getElementById('intelligenceValue1').value;
healthValue1 = document.getElementById('healthValue1').value;
damageValue1 = document.getElementById('damageValue1').value;
 ARValue1 = document.getElementById('ARValue1').value;



function lightAttackFunction() {
   console.log(document.getElementById('ARValue0').value);
};

function heavyAttackFunction() {
   console.log('Heavy Attack Function');
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