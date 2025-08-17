
function isAdult(age){
    return age >= 18;
}

function ageVerifier(personObject){
    return `${personObject.name} ${isAdult(personObject.age)? `is` : `isn't`} an adult.`;
}

function showAgeStatus(personObject){
    console.log(ageVerifier(personObject));
}

// Unit Tests:
showAgeStatus({name: "Joaquim", age: 5})
showAgeStatus({name: "Rubens", age:18})