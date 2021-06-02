//capture data from localstorage

var userData = JSON.parse(localStorage.getItem("userData"));

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('userData');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

//
//localStorage.setItem("workoutData", JSON.stringify(workoutData))