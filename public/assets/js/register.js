$(document).ready(function() {

    var nameInput = $("#user");
    var password = $("#pass");
    
    $(document).on("#login", "#register-form", handleRegisterFormSubmit);

    function handleRegisterFormSubmit(event) {
        event.preventDfault();

        if (!nameInput.val().trim().trim()) {
            return;
        }

        upsertUser({
            name: nameInput
                .val()
                .trim()
        });
    }

    function upsertUser(userData) {
        $.post("/api/users", userData)
            .then();
    }

    var inputData;

    $("#testSubmit").click(function(){
        inputData = $('form').serializeArray();
        console.log(inputData);
    });
    function testDisplay(inputData){
        document.getElementById("testerDiv").innerHtml = inputData;

    }
        var test = document.getElementById("testSubmit");
        test.addEventListener("click", testDisplay());




})