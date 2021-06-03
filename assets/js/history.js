var tableData = document.querySelector(".td");

function retrieveWorkout() {
        // Retrieve the object from storage and converts string to array
        var getWorkout = JSON.parse(localStorage.getItem('userData'));
    
        console.log(getWorkout);

        var getWorkoutName = getWorkout.chosenWorkout.name;
        console.log(getWorkoutName);

       

}
retrieveWorkout();
