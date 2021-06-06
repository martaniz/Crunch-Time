var tableData = document.querySelector(".td");
var tableTime = document.querySelector(".ttime");

var getWorkout = [];
// Retrieve the object from storage and converts string to array
var userData = JSON.parse(localStorage.getItem('userData'));

var workoutContainer = JSON.parse(localStorage.getItem("workoutContainer"));
var timeContainer = JSON.parse(localStorage.getItem("timeContainer"));
function retrieveWorkout() {
    // workout array from local storage, if its empty, I'll make a new one
    if (workoutContainer === null ){
        workoutContainer = [];
    }

    // getting the data and push it to workoutContainer
    // workoutContainer.push(userData);

    workoutContainer.push(userData.chosenWorkout.name);
    
    // for loop to print to page
    for (i = 0; i <= workoutContainer.length; i++ ) {
        var para = document.createElement("p");
        para.textContent = workoutContainer[i];
        tableData.appendChild(para);
    }
    console.log(workoutContainer);
    // save to workoutContainer to workoutContainer
    // localStorage.setItem("workoutContainer", JSON.stringify(workoutContainer));
}
retrieveWorkout();

// function retrieveTime(){
//     if (timeContainer === null ){
//         timeContainer = [];
//     }
//     timeContainer.push(userData.userTime);
    
//     // for loop to print to page
//     for (i = 0; i <= timeContainer.length; i++ ) {
//         var para = document.createElement("p");
//         para.textContent = timeContainer[i]/60 + " mins";
//         tableTime.appendChild(para);
//     }
//     console.log(timeContainer);
//     console.log(tableTime);
//     // localStorage.setItem("timeContainer", JSON.stringify(timeContainer));
// }
// retrieveTime();

// function retrieveName(){
//     if (nameContainer === null ){
//         nameContainer = [];
//     }
//     nameContainer.push(userData.userName);
    
//     // for loop to print to page
//     for (i = 0; i <= nameContainer.length; i++ ) {
//         var h2 = document.createElement("h2");
//         para.textContent = nameContainer[i]/60 + " mins";
//         userNameInput.appendChild(h2);
//     }
    
//     localStorage.setItem("timeContainer", JSON.stringify(timeContainer));
// }
// retrieveTime();


    // historyArr.push(userData.userName);
    
    // // for loop to print to page
    // for (i = 0; i <= historyArr.length; i++ ) {
    //     var para = document.createElement("p");
    //     para.textContent = historyArr[i];
    //     tableData.appendChild(para);
    // }
    
    // historyArr.push(userData.userTime);
    
    // for loop to print to page
    // for (i = 0; i <= historyArr.length; i++ ) {
    //     var para = document.createElement("p");
    //     para.textContent = historyArr[i];
    //     tableTime.appendChild(para);
    // }

    


    


    // var getTime = getObject.userTime;
    
    // getObject.push(getTime);

    // localStorage.setItem("userData", JSON.stringify(getObject));

    // var para = document.createElement("p");
    // para.textContent = getTime;
    // tableTime.appendChild(para);


