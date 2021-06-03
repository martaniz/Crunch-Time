var tableData = document.querySelector(".td");
var tableTime = document.querySelector(".ttime");

function retrieveWorkout() {
        // Retrieve the object from storage and converts string to array
        var getWorkout = JSON.parse(localStorage.getItem('userData'));
    
        var getWorkoutName = getWorkout.chosenWorkout.name;

        var para = document.createElement("p");
        para.textContent = getWorkoutName;
        tableData.appendChild(para);
}
retrieveWorkout();

function retrieveTime() {
    // Retrieve the object from storage
    var getObject = JSON.parse(localStorage.getItem('userData'));

    var getTime = getObject.userTime;

    var para = document.createElement("p");
    para.textContent = getTime;
    tableTime.appendChild(para);

}
retrieveTime();
