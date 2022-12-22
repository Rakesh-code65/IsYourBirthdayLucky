const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector(".output");



function compareValues(sum,number)
{
 
  if(sum%luckyNumber.value === 0){
   outputBox.innerText= "WoW Your Birthday is lucky 🎉";
   
   if(!number)
    outputBox.innerText= "Invalid Input";
  }
  else {
      outputBox.innerText= "Sorry !! Your Birthday is not lucky 😥";
  }
}

function calculateSum(dob) 
{
    dob= dob.replaceAll("-","");
    let sum = 0;
    for(let index=0;index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));
        
    }
    return sum;
    
}

checkNumberButton.addEventListener('click', function checkBirthDateIsLucky()
{
    
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
      compareValues(sum, luckyNumber.value)
    }
      else{
      outputBox.innerText="Please enter both the fields 😡";
    } 
});
