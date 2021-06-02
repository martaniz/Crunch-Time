var nextEl = document.querySelector(".nextBtn");
var inputEl = document.querySelector(".validate");

nextEl.addEventListener("click", function(event){
    event.preventDefault();
    // Gets input value
    var name = inputEl.value;
    var userData = { userName: `${name}` };

    // Saves data to storage
    localStorage.setItem("userData", JSON.stringify(userData));
});

// Retrieve the object from storage
var getObject = localStorage.getItem('userData');

console.log('getObject: ', JSON.parse(getObject));

