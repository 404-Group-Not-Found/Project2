$(document).ready(function() {
    console.log("login.js loaded");
    var input

    $("#loginSubmit").click(function() {
        event.preventDefault();
        console.log("clicked");

        var newUser = {
            name: $("#loginUser").val().trim(),
            password: $("#loginPass").val().trim()
            };
        console.log(newUser);
        validateInput(newUser, createSession);
       
    })

})