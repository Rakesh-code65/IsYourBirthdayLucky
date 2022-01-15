const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

checkNumberButton.addEventListener('click', function getValues() {
    // console.log(dateOfBirth.value, luckyNumber.value);
})

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum);
}

function calculateSum(dob) {
    // dob= dob.replaceAll("-", "");
    // let sum = 0;
    // for
    return 22;
}