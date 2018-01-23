$(document).ready(function() {
    // some hard coded images--these will come from the API instead of being hardcoded here
    var current = 0;
    var nextImgURLs = [
        "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
        "http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg",
        "http://w1nd.cc/promo/347.jpg",
        "http://hircsarda.hu/wp-content/uploads/2016/03/orban1.jpeg"
    ];

    var pullNextImage = function(numToPull) {
        // loop numToPull to get that many new images

        for (var i = 0; i < numToPull; i++) {

            // instead of using setTimeout and getting the img URL from the hardcoded array of nextImgURLs, you'll get the image from your API
            setTimeout(function(){
                /* REPLACE CODE BELOW HERE */
                if (current > 3) {
                    return;
                }
                nextImgURL = nextImgURLs[current];
                current++
                 /* REPLACE CODE ABOVE HERE */
    
                // Once you have the next image's URL you can call addTinderCard to create a new tinder card for it
                var newSwipableCard = addTinderCard(nextImgURL);

                // You can set data on the newSwipableCard if you want
                newSwipableCard.attr("data-id", 10);
                
            }, 100);
        }
    }

    // create the first three cards
    pullNextImage(3);

    // initTinder to make the cards swipable
    initTinder(function(liked, element){
        // Handle like or dislike of image however you want
        console.log("Liked?", liked, $(element).data("id"));

        // add another card
        pullNextImage(1);
    });

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