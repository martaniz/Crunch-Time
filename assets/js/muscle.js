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
const getWorkoutData = function() {
    // Here's the fetch, with the url cobbled together from input and base values
    fetch(apiUrl + english)
        .then(function(response) {
            // If the response is good,
            if (response.ok) {
                // Turn it to JSON we can read
                response.json()
                    .then(function(data) {
                        console.log(data);
                    })
            }
        });
};

const makeInputData = function() {

}

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
nextPageEl.addEventListener("click", function() {
    console.log("Hey");
});