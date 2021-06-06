var tableData = document.querySelector(".td");
var tableTime = document.querySelector(".ttime");

// function reason(){
//     var dropd = document.getElementById("savedrop").value;
//     var drophistory = JSON.parse(localStorage.getItem("reason")) || [];
//     drophistory.push(dropd);
//     localStorage.setItem("reason", JSON.stringify(drophistory));
// }
var getWorkout = [];
function retrieveWorkout() {
    // Retrieve the object from storage and converts string to array
    var userData = JSON.parse(localStorage.getItem('userData'));

    // history array from local storage, if its empty, I'll make a new one
    var historyArr = JSON.parse(localStorage.getItem("historyArr"));
    if (historyArr === null ){
        historyArr = [];
    }

    // getting the name of the workout and push it to historyArr
    historyArr.push(userData);
    
    // for loop to print to page
    for (i = 0; i <= historyArr.length; i++ ) {
        var para = document.createElement("p");
        para.textContent = historyArr[i].chosenWorkout.name;
        tableData.appendChild(para);

        var para = document.createElement("p");
        para.textContent = historyArr[i].c
        tableData.appendChild(para);

        var para = document.createElement("p");
        para.textContent = historyArr[i].chosenWorkout.name;
        tableData.appendChild(para);

    }
    // save to historyArr to historyArr
    localStorage.setItem("historyArr", JSON.stringify(historyArr));

    


    // var getTime = getObject.userTime;
    
    // getObject.push(getTime);

    // localStorage.setItem("userData", JSON.stringify(getObject));

    var para = document.createElement("p");
    para.textContent = getTime;
    tableTime.appendChild(para);

}
retrieveWorkout();
