function retrieveWorkout() {
        // Retrieve the object from storage
        var getWorkout = localStorage.getItem('userData');
        
        console.log(JSON.parse(getWorkout));
        // converts string back to array
        // return JSON.parse(getWorkout);
}
retrieveWorkout();