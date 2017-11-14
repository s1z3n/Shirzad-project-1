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
        // Do something
        // console.log(scroll)
      var header = $('.header');
      var secondary = $('.secondary-menu');
      var hitpoint = 485;
      var mainnav_top = 0;
      var secondarynav_top = 62;
        if(scroll >= hitpoint) {

          // $(header).css('display', 'none');
          $(secondary).addClass('secondary-fixed');
          $(header).addClass('header-transition');
        } else {

          $(header).removeClass('header-transition');
          $(secondary).removeClass('secondary-fixed');
        }
    });

    // JS with jQuery
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

});
