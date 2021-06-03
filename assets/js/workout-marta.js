//capture data from localstorage

var userPotato = JSON.parse(localStorage.getItem("userData"));
var choosenWorkoutEL = document.querySelector("#choosenWorkout");
var randomExercise = userPotato.workoutData.randomExercise
console.log(randomExercise)


// Retrieve the object from storage
var retrievedObject = localStorage.getItem('userData');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

//
//localStorage.setItem("workoutData", JSON.stringify(workoutData))