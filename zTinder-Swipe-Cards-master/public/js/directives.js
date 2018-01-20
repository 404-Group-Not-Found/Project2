angular.module('tinder.directives', [])

.directive('tinderCard', function(){
  return {
    restrict: 'C',
    link: function(scope, element, attrs) {
      // we need a native DOM element for HammerJS, hence the [0] notation to retrieve it from the jQLite wrapper
      element = element[0];
      var textYes = element.querySelector('.card-image-yes');
      var textNo = element.querySelector('.card-image-no');

      // set the stack order and the cascade effect
      element.style.zIndex = 99 - attrs.index;
      var offsetTop = Math.min(Math.max((attrs.index * 5), 0), 15);

      // the active variable is used to render each frame of the animation
      var active = false;
      var transform;

      var reqAnimationFrame = (function () {
          return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
              window.setTimeout(callback, 1000 / 60);
          };
      })();

      var mc = new Hammer.Manager(element);
      mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

      // all animation takes place between when active changes state from true
      // in requestElementUpdate to false in updateElementTransform
      function requestElementUpdate() {
        if (!active) {
          reqAnimationFrame(updateElementTransform);
          active = true;
        }
      }

      function resetElement() {
          element.className = 'card tinder-card animate';
          textYes.style.opacity = 0;
          textNo.style.opacity = 0;
          transform = {
              translate: {
                x: 0,
                y: offsetTop
              },
              angle: 0
          };
          requestElementUpdate();
      }
      resetElement();

      function updateElementTransform() {
        var value = [
          'translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)',
          'rotate(' + transform.angle + 'deg)'
        ].join(" ");

        element.style.webkitTransform = value;
        element.style.mozTransform = value;
        element.style.transform = value;
        active = false;
      }

      mc.on("hammer.input", function(ev) {
  	    if(ev.isFinal) {
          if (textYes.style.opacity == 1) {
            //offscreen
            element.className = 'card tinder-card animate';
            transform.translate = {
                x: (ev.deltaX * 3),
                y: (ev.deltaY * 3)
            };
            requestElementUpdate();
            window.setTimeout(function(){
              element.parentNode.removeChild(element);
              scope.destroyCard(true);
            }, 500);
          } else if (textNo.style.opacity == 1) {
            //offscreen
            element.className = 'card tinder-card animate';
            transform.translate = {
                x: (ev.deltaX * 3),
                y: (ev.deltaY * 3)
            };
            requestElementUpdate();
            window.setTimeout(function(){
              element.parentNode.removeChild(element);
              scope.destroyCard(false);
            }, 500);
          } else {
            resetElement();
          }
  	    }
    	});

      mc.on("panstart panmove", function(ev){
        var MAX_ANGLE = 25;

        element.className = 'card tinder-card';
        transform.translate = {
  	        x: ev.deltaX,
  	        y: ev.deltaY
  	    };

        // change opacity of the LIKE / NOPE text and angle of card
        var multiplier = Math.min(Math.max(Math.abs(ev.deltaX) / (element.offsetWidth / 1.5), 0), 1);
        if(ev.deltaX > 0) {
          transform.angle = MAX_ANGLE * multiplier;
          textYes.style.opacity = multiplier;
          textNo.style.opacity = 0;
        } else if (ev.deltaX <= 0) {
          transform.angle = -MAX_ANGLE * multiplier;
          textYes.style.opacity = 0;
          textNo.style.opacity = multiplier;
        }

  	    requestElementUpdate();
      });
    }
  };
})

.directive('matchScreen', function(){
  return {
    restrict: 'C',
    link: function(scope, element, attrs) {
      element = element[0];

      element.querySelector('.match-return-btn').addEventListener('click', function(){
        element.style.opacity = 0;
        element.style.zIndex = 0;
      });

      scope.$on('Liked', function(event, args) {
        element.style.zIndex = 999;
        element.style.opacity = 1;
      });
    }
  };
});
