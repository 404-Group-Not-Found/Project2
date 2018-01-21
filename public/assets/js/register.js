$(document).ready(function() {
    console.log("I am register.js");
    var inputData;
    //collect clean form data on submission and send to database
    $("#testSubmit").click(function(){
        event.preventDefault();
        function testDisplay(){
            var displayData = JSON.stringify(newUser);
            console.log(`This is DisplayData: ${displayData}`);
            // document.getElementById("testerDiv").appendChild(displayData);
        };
        var newUser = {
            name: $("#user").val().trim(),
            password: $("#pass").val().trim()
            };
        $.post("/api/new", newUser)
        // handling validation errors
        .catch(function(err) {
            // print the error details
            console.log(err);
        })
        // on success, run this callback
        .then(function(data) {
        // log the data we found
        var parsedData = JSON.stringify(data);
        console.log(`Adding User: ${parsedData}`);
        // tell the user we're adding a user
        testDisplay();
        });
        $("#name").val("");
        $("#pass").val("");        
    });
})