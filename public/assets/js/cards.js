// Find all bbq locations in Austin, TX
const api_url = "https://developers.zomato.com/api/v2.1/search?q=bbq%2C%20barbecue&lat=30.307182&lon=-97.755996&radius=100000";

$.ajax({
    url       : api_url,
    method    : "GET",
    dataType  : "JSON",
    beforeSend: setHeader

}).done(function(response) {
    const restaurants = [];

    response.restaurants.forEach(r => {
        // Create a custom object
        const restaurant = {
            "name"    : r.restaurant.name,
            "location": {
                "address": r.restaurant.location.address,
                "city"   : r.restaurant.location.city,
                "state"  : "TX",
                "zipcode": r.restaurant.location.zipcode,
                "lat"    : parseFloat(r.restaurant.location.latitude),
                "lng"    : parseFloat(r.restaurant.location.longitude)
            },
            "website" : null,
            "image"   : r.restaurant.featured_image,
            "rating"  : parseFloat(r.restaurant.user_rating.aggregate_rating),
            "type"    : "bbq"
        };

        // Add the object to our array
        restaurants.push(restaurant);
    });
    
    console.table(restaurants);
});

function initTinder(callback) {
  $("body").on("swiperight", ".buddy", function(event){
    $(this).addClass('rotate-left').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();

    $(this).append('<div class="status like">Like!</div>');      
    if ( $(this).is(':last-child') ) {
      $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
    } else {
      $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }

    if (callback) {
      setTimeout(function() {
        callback(true, event.currentTarget);
      }, 100);
    }
  });  

  $("body").on("swipeleft", ".buddy", function(event){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
      $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
    } else {
      $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
    
    if (callback) {
      setTimeout(function() {
        callback(false, event.currentTarget);
      }, 100);
    }
  });
}

function addTinderCard(imgURL) {
  // get the swipe container that holds on the cards
  swipeContainer = $("#swipe-container");
    
  // create a new card with the image div inside of it
  var swipableDiv = $("<div class='buddy'>");
  var img = $("<div class='avatar' style='display: block; background-image: url(" + imgURL + ")'>");

  // add the image to the swipable card
  swipableDiv.append(img);

  // add the swipable card to the swipe container
  swipeContainer.append(swipableDiv);
  
  // such a hack, whatever
  setTimeout(function(){
    // after we've added it to the DOM we'll set it to not be displayed
    swipableDiv.attr("style", "display:none;")

    // except for the top one, it needs to be displayed
    $("#swipe-container > div:nth-child(1)").attr("style", "display:block;");
  }, 0);


  // return the new div so data can be added to it if desired
  return swipableDiv;
}