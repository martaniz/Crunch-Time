// The spans containing the values for each muscle group
const chestValEl = document.querySelector("#chest");
const backValEl = document.querySelector("#back");
const shouldersValEl = document.querySelector("#shoulders");
const bicepsValEl = document.querySelector("#biceps");
const tricepsValEl = document.querySelector("#triceps");
// The next page arrow
const nextPageEl = document.querySelector("#nextPage");

// The API stuff. The key, the input from the user, the language to draw from, etc.
const apiUrl = "https://wger.de/api/v2/exerciseinfo?";

const english = "language=2"

// Get the data from wger
const getExerciseData = function() {
    // This is the length of the wger API's english-language list of exercises, minus 20. Hard-coding it because it's inefficient to call it to see the length and then call it again; we can change this later if it proves unwieldy. By subtracting 20, I get a value between 0 and 209, so I always get the max of 20 items in the response. In any case, it's used to create a random position within the total 
    const countLength = 209;
    const randomOffest = "&offset=" + Math.floor(Math.random() * countLength);
    // Here's the fetch, with the url cobbled together from input and base values
    fetch(apiUrl + english + randomOffest)
        .then(function(response) {
            // If the response is good,
            if (response.ok) {
                // Turn it to JSON we can read
                response.json()
                    .then(function(data) {
                        console.log(data);
                        // Now we choose which exercise
                        chooseExercise(data);
                    });
            }
        });
};

const chooseExercise = function(data) {
    // Now, we pick one of the workouts from the list, provided it meets the requirements that the user provided.
    const randomExercise = Math.floor(Math.random() * data.results.length);
    const workoutData = data.results[randomExercise];
    
    localStorage.setItem("workoutData", JSON.stringify(workoutData))
};

const makeInputData = function() {
    // First, clear the existing localStorage data for the previous exercise
    localStorage.removeItem("workoutData");
    // Then we get the data for the exercise
    getExerciseData();
};

// Increases the value of the muscle group when it is clicked, or cycles it back to 0 if it reaches the maximum
const incrementVal = function(event) {
    // Capture the clicked element
    const targetEl = event.target;
    // Then capture its value
    let targVal = targetEl.textContent;
    // Then increment that value, or reduce to 0 if already at max
    if (targVal > 5) {
        targVal = 1;
    } else {
        targVal++;
    }
    // Then push to the page
    targetEl.textContent = targVal;
}
// All the click events for the muscle number values
chestValEl.addEventListener("click", incrementVal);
backValEl.addEventListener("click", incrementVal);
shouldersValEl.addEventListener("click", incrementVal);
bicepsValEl.addEventListener("click", incrementVal);
tricepsValEl.addEventListener("click", incrementVal);
// The click event for leaving the page; which is where all the magic happens
nextPageEl.addEventListener("click", makeInputData);