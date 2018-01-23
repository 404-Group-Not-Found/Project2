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
    $.ajax({ url: "/api/username",
            data: newUser,
            type: 'post',
            success: function(output) {}
    })    
        // $.post("/api/username", newUser)
        // // handling validation errors
        .catch(function(err) {
            // print the error details
            console.log(err);
        })
        // on success, run this callback
        .then(function(data) {
        // log the data we found
        var parsedData = JSON.stringify(data);
        console.log(`Adding User: ${parsedData}`);
        // --------->>>>> add here. If parsedData is undefined (because the sequelize validation works although it throws an error in terminal) then put an alert or prompt or something to tell the user to enter a new name. It is undefined. you can even capture the value of the input field and just put it into a div somewhere and say "this username is taken"
            if ( parsedData === null || parsedData === undefined){
                $("#noToast").text(`Sorry, ${newUser.name} is taken.`);
                $("#name").val("");
                $("#pass").val("");
                return;
            } else {
                testDisplay();
                $("#name").val("");
                $("#pass").val("");   
            }


        // tell the user we're adding a user
        });
    });
})