var tableData = document.querySelector(".td");

function retrieveWorkout() {
        // Retrieve the object from storage and converts string to array
        var getWorkout = JSON.parse(localStorage.getItem('userData'));
    
        var getWorkoutName = getWorkout.chosenWorkout.name;
        console.log(getWorkoutName);

        var para = document.createElement("p");
        para.textContent = getWorkoutName;
        tableData.appendChild(para);

}
retrieveWorkout();
