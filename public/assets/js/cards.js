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


