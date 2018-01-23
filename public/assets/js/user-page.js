$(document).ready(function() {
    var pullNextImage = function() {
        // pull next image URL from API
        var nextImgURL = "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg";

        // use JQuery to create .buddy div with image element inside of it and place on DOM
        
    }

    initTinder(function(liked, element){
        // Handle like or dislike of image
        console.log("Liked?", liked, $(element).data("id"));

        pullNextImage();
    });

    pullNextImage();
})

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mainnav").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainnav").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}