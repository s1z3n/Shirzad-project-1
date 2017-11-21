$(document).ready(function() {


  var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }



    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
        // console.log(scroll)
      var header = $('.header');
      var secondary = $('.secondary-menu');
      var hitpoint = 435;
      var fixpoint = 80;
      var mainnav_top = 0;
      var secondarynav_top = 62;
      if(scroll >= fixpoint) {
            $(header).addClass('header-fixed');
            $('.header-home').addClass('header-fixed');
          } else {

            $(header).removeClass('header-fixed');
            $('.header-home').removeClass('header-fixed');
          }

        if(scroll >= hitpoint) {


          $(secondary).addClass('secondary-fixed');
          $(header).addClass('header-transition');
        } else {

          $(header).removeClass('header-transition');
          $(secondary).removeClass('secondary-fixed');
        }




// pollen london


        var active = function(){
             $('.frame').removeClass('inactive').addClass('active');
             $('.img-semega').removeClass('inactive').addClass('active');
         };

         var inactive = function(){
             $('.frame').removeClass('active').addClass('inactive');
             $('.img-semega').removeClass('active').addClass('inactive');
         };

         $('.frame').mouseenter(active)
         $('.frame').mouseleave(inactive)

         $('.img-semega').mouseenter(active)
         $('.img-semega').mouseleave(inactive)

         var active1 = function(){
          $('.frame-text').removeClass('inactive1').addClass('active1');
          $('.frame-image').removeClass('inactive1').addClass('active1');          
        };

        var inactive1 = function(){
            $('.frame-text').removeClass('active1').addClass('inactive1');
            $('.frame-image').removeClass('active1').addClass('inactive1');          
        };

          $('.frame-text').mouseenter(active1)
          $('.frame-text').mouseleave(inactive1)


    });


  $('.sub-btn1').click(function(){
      $('#sub-holder1').addClass('sub-open');
      // return false
    });

  $('.sub-btn2,.sub-btn3').click(function(){
    $('#sub-holder1').removeClass('sub-open');
  });





});
