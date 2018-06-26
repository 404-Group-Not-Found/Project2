
module.exports = {
    validateDB : function (){
        $.get("/api/username/" + newUser.name, function(data) {
            if (data) {
            console.log("Here's the response from the get with the user's name", data);
            $("#name").val("");
            $("#pass").val("");
            $("#noToast").text(`Sorry, ${newUser.name} is taken.`);
            } else {
                post()
            }
        });

    }
}


// function createSession(){
//     sessionStorage.setItem("username", newUser.name);
//     window.location.replace("/swyppa");
// };

