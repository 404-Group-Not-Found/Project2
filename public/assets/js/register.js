$(document).ready(function() {
    console.log("I am register.js");

    // var nameInput = $("#user");
    // var password = $("#pass");
    
    // $(document).on("#login", "#register-form", handleRegisterFormSubmit);

    // function handleRegisterFormSubmit(event) {
    //     event.preventDfault();

    //     if (!nameInput.val().trim().trim()) {
    //         return;
    //     }

    //     upsertUser({
    //         name: nameInput
    //             .val()
    //             .trim()
    //     });
    // }

    //function to post the user to the database
    // function upsertUser(userData) {
    //     $.post("/api/users", userData)
    //         .then();
    // }

    var inputData;

    //collect clean form data on submission and send to database
    $("#testSubmit").click(function(){
        // inputData = $('form').serializeArray();
        // console.log('This is inputData: ',inputData);

        // for(var i =0, len = inputData.length;i<len;i++){
        //     inputData[i] = $.trim(inputData[i]);
        //   }
        //   console.log(`This is trimmed inputData: ${inputData}`)
        //   //turn it into a string if you wish
        //   inputData = JSON.parse(inputData);
        //   console.log(`This is string form of inputData: ${inputData}`);

        event.preventDefault();
        var newUser = {
            name: $("#user").val().trim(),
            password: $("#pass").val().trim()
            };
        $.post("/api/new", newUser)
        // on success, run this callback
        .done(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        console.log("Adding user...");
        });
        $("#name").val("");
        $("#pass").val("");

        function testDisplay(){
            var displayData = JSON.stringify(newUser);
            console.log(`This is DisplayData: ${displayData}`);
            document.getElementById("testerDiv").innerHtml = displayData;
        }
    testDisplay();
});




})