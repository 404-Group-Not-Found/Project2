$(document).ready(function() {
    console.log("login.js loaded");
    var input

    $("#loginSubmit").click(function() {
        event.preventDefault();
        console.log("clicked");

        var credentials = {
            username: $("#loginUser").val().trim(),
            password: $("#loginPass").val().trim()
        };
        console.log(credentials);

        $.get('/api/username/' + credentials.username, function(data) {

            //if data returned:
            console.log(data);    

            

        })
    })

})