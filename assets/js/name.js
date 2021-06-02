var nextEl = document.querySelector(".nextBtn");
var inputEl = document.querySelector(".validate");



// function getName() {
//     return localStorage.getItem("userName");
// }

// function update() {
//     var name = getName();
//     // document.querySelector("greet").innerHTML = "Welcome " + name + "!";
//     document.querySelector("storedName").innerHTML = name;
// }

nextEl.addEventListener("click", function(event){
    event.preventDefault();
    // Gets input value
    var name = inputEl.value;
    console.log(name);
    // Saves data to retrieve later
    localStorage.setItem("userName", name);
    alert('clicked!');
});

// function getInput() {
//     // Gets input value
//     var name = input.value;

//     // Saves data to retrieve later
//     localStorage.setItem("userName", name);

//     // update();
//     console.log(name);
// }
