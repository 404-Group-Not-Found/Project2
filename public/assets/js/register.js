$(document).ready(function() {
    //collect clean form data on submission and send to database
    $("#testSubmit").click(function(){
        event.preventDefault();

        // collect user input
        var newUser = {
            name: $("#user").val().trim(),
            password: $("#pass").val().trim()
            };

        // cleanese bad or absent forms
        validateInput();

        function testDisplay(){
            var displayData = JSON.stringify(newUser);
            console.log(`This is DisplayData: ${displayData}`);
        };

        function validateInput(){
            if( newUser.name === ""){
                $("#noToast").text(`Please enter a username.`);
                $("#name").val("");
            } else if ( newUser.password === ""){
                $("#noToast").text(`Please enter a password.`);
                $("#pass").val("");
            } else{
                validateDB();
            }
        };
        

        function post() {
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
            }); 
            createSession(); 
        };

    
        function validateDB(){
            $.get("/api/username/" + newUser.name, function(data) {
                if (data) {
                console.log("Here's the response from the get with the user's name", data);
                $("#name").val("");
                $("#pass").val("");
                $("#noToast").text(`Sorry, ${newUser.name} is taken.`);
                // here can be error handler. if id is present, then don't allow it to make a user. If it makes an ID and/user then call the post function and clear everything and send to the /swyppa page
                } else {
                    post()
                }
            });

        };

        function createSession(){
            sessionStorage.setItem("username", newUser.name);
            window.location.replace("/swyppa");
        };
            
    
    });
})