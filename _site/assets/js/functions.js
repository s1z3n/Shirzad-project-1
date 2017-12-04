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


  // $('.sub-btn1').click(function(e){
  //     console.log(e.currentTarget.className)
  //     $('#sub-holder1').addClass('sub-open');
  //     // return false
  //   });

  // $('.sub-btn2,.sub-btn3').click(function(e){
  //   console.log(e.currentTarget.className)
  //   $('#sub-holder1').removeClass('sub-open');
  // });


});


  $('.link-wrapper').on('click', function(e){

      wrapperName = e.currentTarget.className
      wrapperName = wrapperName.split(' ')
      elemNum = wrapperName[1].match(/\d+/)[0]

      if ($('#sub-holder'+elemNum+'').hasClass('sub-open')) {

          $('#sub-holder'+elemNum+'').removeClass('sub-open');

      } else {
        for( var i = 1; i < 16; i++) {
          if ($('#sub-holder'+i+'').hasClass('sub-open')) {
            $('#sub-holder'+i+'').removeClass('sub-open');
          }
        }
        $('#sub-holder'+elemNum+'').addClass('sub-open')

      }
  })

  $(document).ready(function () {
      $(document).on("scroll", onScroll);

      //smoothscroll
      $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");

          $('a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');

          var target = this.hash,
              menu = target;
          $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top+2
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.menu-center a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.menu-center a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }
  $('.main-carousel').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1,
    arrows: false,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {

                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

$('.slider-project').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1,
    arrows: false,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {

                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

$('.slider-company').slick({
    centerPadding: '0',
    slidesToShow: 5,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

        // var logoWrapper
        // logoWrapper = document.getElementsByClassName('logo-wrapper')

        // var left = 0

        // $('div.arrow.arrow-left').on('click', function(){

        //     logoWrapper[0].style.position = 'relative'

        //     if( left <= 800 && left >= -800) {

        //         logoWrapper[0].style.right = left + 'px'
        //         left = left + 100
        //         console.log(left)
        //     }
        //     else {
        //         left = -900
        //     }

        // })

        // $('div.arrow.arrow-right').on('click', function(){

        //     logoWrapper[0].style.position = 'relative'

        //     if( left <= 800 && left >= -800) {

        //         logoWrapper[0].style.right = -left + 'px'
        //         left = left + 100
        //         console.log(left)
        //     }
        //     else {
        //         left = 900
        //     }

        // })
    

    $('.invest-carousel').slick({
      slidesToShow: 1,
      arrows: true,
      rtl: true,
      autoplay: true,
      autoplaySpeed: 2000,

    });
