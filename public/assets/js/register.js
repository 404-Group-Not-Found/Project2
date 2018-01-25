    //collect clean form data on submission and send to database
    function validateInput(newUser, cb){
        if( newUser.name === ""){
            $("#noToast").text(`Please enter a username.`);
            $("#name").val("");
        } else if ( newUser.password === ""){
            $("#noToast").text(`Please enter a password.`);
            $("#pass").val("");
        } else{
            cb(newUser);
        }
    };
    function validateDB(newUser){
        $.get("/api/username/" + newUser.name, function(data) {
            if (data) {
            console.log("Here's the response from the get with the user's name", data);
            $("#name").val("");
            $("#pass").val("");
            $("#noToast").text(`Sorry, ${newUser.name} is taken.`);
            } else {
                post(newUser)
            }
        });

    };
    function post(newUser) {
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
          createSession(newUser); 
      };
          
    
    function createSession(newUser){

        sessionStorage.setItem("username", newUser.name);
        window.location.replace("/swyppa");
    };
    $("#testSubmit").click(function(){
        event.preventDefault();

        // collect user input
        var newUser = {
            name: $("#user").val().trim(),
            password: $("#pass").val().trim()
            };

        // cleanese bad or absent forms
        validateInput(newUser, validateDB);

        // function testDisplay(){
        //     var displayData = JSON.stringify(newUser);
        //     console.log(`This is DisplayData: ${displayData}`);
        // };
    
    });
