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




        // ===================== Pollen London =====================


        var active = function(e){
            e.preventDefault()
            if( e.target.nodeName == 'DIV'){
                $(e.target).removeClass('inactive').addClass('active');
            }

         };

         var inactive = function(e){
            if( e.target.nodeName == 'DIV'){
             $(e.target).removeClass('active').addClass('inactive');
            }
         };

         $('.pollen').mouseenter(active)
         $('.pollen').mouseleave(inactive)

         $('.pollen-img').mouseenter(active)
         $('.pollen-img').mouseleave(inactive)

    });
});

    // ===================== dropdown subsidieries =====================

  $('.link-list').on('click', function(e){
      e.preventDefault()
      wrapperName = e.currentTarget.className
      wrapperName = wrapperName.split(' ')
      elemNum = wrapperName[2].match(/\d+/)[0]

      if ($('#sub-holder'+elemNum+'').hasClass('sub-open')) {
          $('.sub-btn'+elemNum+'').css('background-color', '#4FADDA')
          $('#sub-holder'+elemNum+'').removeClass('sub-open');

      } else {
        var neededLength = document.getElementsByClassName('link-list')
        for( var i = 1; i < 16; i++) {
          if ($('#sub-holder'+i+'').hasClass('sub-open')) {
            $('.sub-btn'+i+'').css('background-color', '#4FADDA')
            $('#sub-holder'+i+'').removeClass('sub-open');
          }
        }

        $('.sub-btn'+elemNum+'').css('background-color', 'gray')
        $('#sub-holder'+elemNum+'').addClass('sub-open')

      }
  })


    // ===================== dropdown board memers =====================
  $('.board-list').on('click', function(e){

          wrapperName = e.currentTarget.className
          wrapperName = wrapperName.split(' ')
          elemNum = wrapperName[2].match(/\d+/)[0]

          if ($('#board-holder'+elemNum+'').hasClass('board-open')) {
              $('.clicked-button'+elemNum+'').css('background-color', '#4FADDA')
              $('#board-holder'+elemNum+'').removeClass('board-open');

          } else {
            var neededLength = document.getElementsByClassName('board-list')

            for( var i = 1; i < neededLength.length + 1; i++) {
              if ($('#board-holder'+i+'').hasClass('board-open')) {
                $('.clicked-button'+i+'').css('background-color', '#4FADDA')
                $('#board-holder'+i+'').removeClass('board-open');
              }
            }
            $('.clicked-button'+elemNum+'').css('background-color', 'gray')
            $('#board-holder'+elemNum+'').addClass('board-open')

          }
      })

      // ===================== dropdown projects =====================

    $('.project-list').on('click', function(e){

            wrapperName = e.currentTarget.className
            wrapperName = wrapperName.split(' ')
            elemNum = wrapperName[2].match(/\d+/)[0]

            if ($('#on-project-holder'+elemNum+'').hasClass('project-open')) {
                $('.clicked-btn'+elemNum+'').css('background-color', '#4FADDA')
                $('#on-project-holder'+elemNum+'').removeClass('project-open');

            } else {
              var neededLength = document.getElementsByClassName('project-list')

              for( var i = 1; i < neededLength.length + 1; i++) {
                if ($('#on-project-holder'+i+'').hasClass('project-open')) {
                  $('.clicked-btn'+i+'').css('background-color', '#4FADDA')
                  $('#on-project-holder'+i+'').removeClass('project-open');
                }
              }
              $('.clicked-btn'+elemNum+'').css('background-color', 'gray')
              $('#on-project-holder'+elemNum+'').addClass('project-open')

            }
        })

        // ===================== dropdown don projects =====================

        $('.done-project-list').on('click', function(e){

                wrapperName = e.currentTarget.className
                wrapperName = wrapperName.split(' ')
                elemNum = wrapperName[2].match(/\d+/)[0]

                if ($('#done-project-holder'+elemNum+'').hasClass('project-open')) {
                    $('.clicked-btn'+elemNum+'').css('background-color', '#4FADDA')
                    $('#done-project-holder'+elemNum+'').removeClass('project-open');

                } else {
                  var neededLength = document.getElementsByClassName('done-project-list')

                  for( var i = 1; i < neededLength.length + 1; i++) {
                    if ($('#done-project-holder'+i+'').hasClass('project-open')) {
                      $('.clicked-btn'+i+'').css('background-color', '#4FADDA')
                      $('#done-project-holder'+i+'').removeClass('project-open');
                    }
                  }
                  $('.clicked-btn'+elemNum+'').css('background-color', 'gray')
                  $('#done-project-holder'+elemNum+'').addClass('project-open')

                }
            })

// =====================  =====================

  $(document).ready(function () {
      $(document).on("scroll", onScroll);

      //smoothscroll
      $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");

          $('a').each(function () {
              $(this).removeClass('active');
              console.log('4')
          })
          $(this).addClass('active');
          console.log('3')
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


    // ===================== Submenu Movement  =====================
    // Center the sub menu
    // function isOnScreen(element) {
            
    //     var curPos = element.offsetLeft;    
    //     var screenHeight = $(window).width();

    //     return (curPos > screenHeight) ? false : true;
    // }

    // submenuItems = document.querySelectorAll('section.secondary-menu.about-menu.secondary-fixed > div > a')

    // for( i in submenuItems.length) {
    //     var elem = document.querySelector(`section.secondary-menu.about-menu.secondary-fixed > div > a:nth-child(${i})`)
    //     if(isOnScreen(elem)){
    //         elem.offsetLeft = 15
    //     }
    // }
//   function onScroll(event){
//       var scrollPos = $(document).scrollTop();
//       $('.menu-center a').each(function () {
//           var currLink = $(this);
//           var refElement = $(currLink.attr("href"));
//           if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//               $('.menu-center a').removeClass("active");
//               if(currLink.offset().left < 0 && $(window).width() > 900){                                                 
//                 $('.secondary-wrapper-submenu').css('left', `+=${-currLink.offset().left}` )
//                 currLink.addClass("active");              
//               }              
//               if(currLink.offset().left > 1400 && $(window).width() > 900){                                                 
//                 $('.secondary-wrapper-submenu').css('left', 0 )
//                 currLink.addClass("active");              
//               }              
//               currLink.addClass("active");              
//           }
//           else{
//               currLink.removeClass("active");                            
//           }
//       });
//   }


  // ===================== Slicks starts =====================

  $('.main-carousel').slick({
    // centerMode: true,
    // centerPadding: '40px',
    slidesToShow: 1,
    arrows: false,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,

});

$('.slider-projects').slick({
    slidesToShow: 1.5,
    arrows: false,
    focusOnSelect: true,
    ltr: true,
    // infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.slider-text',
    responsive: [
        {
            breakpoint: 820,
            settings: {
              arrows: true,
              slidesToShow: 1
            }
        },
    ]

});

$('.slider-text').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    ltr: true,
    // asNavFor: '.slider-projects',

});

$('.slider-company').slick({
    centerPadding: '20',
    slidesToShow: 5,
    arrows: true,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1460,
            settings: {
                // arrows: false,
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1068,
            settings: {
                slidesToShow: 3
            }
        },

        {
        breakpoint: 880,
        settings: {
            slidesToShow: 3
        }
        },

        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1

            }
        },

    ]
});



    $('.invest-carousel').slick({
      slidesToShow: 1,
      rtl: true,
      autoplay: true,
      autoplaySpeed: 2000,
      // dots: true,

    });


    
    var childNum = document.querySelectorAll('.slick-car')
    childNum = Array.from(childNum)
    
    childNum.map((i) => {
        
    if (i.childElementCount > 4) {

    console.log(1)
    $('.slick-car').slick({
      centerPadding: '0',
      slidesToShow: 4,
      arrows: true,
      rtl: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
              breakpoint: 1260,
              settings: {
                  arrows: true,
                  slidesToShow: 3,
              }
          },
          {
          breakpoint: 950,
          settings: {
              arrows: true,
              slidesToShow: 2,
          }
          },

          {
              breakpoint: 620,
              settings: {
                  arrows: true,
                  slidesToShow: 1,



              }
          },

      ]


    });
}
    })

    $('.slick-cert').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true,
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  arrows: true,
                  slidesToShow: 2,
              }
          },
          {
          breakpoint: 500,
          settings: {
              arrows: true,
              slidesToShow: 1,
          }
          },
      ]
    });


    $('.accordion-mobile-slick').slick({
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      initialSlide: 4,
      rtl: true,


    });

    // =====================   End of Slick =====================



    // ===== Scroll to Top ====

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


// =====================   Scroll Func =====================




    var currentSelected = "";

    var lastScroll = 0;
    var down = false;
    $(window).on("scroll", function() {
      var scroll = $(this).scrollTop();
      down = scroll > lastScroll;
      lastScroll = scroll;
    });
    
    function onScroll(event) {
      var scrollPos = $(document).scrollTop();
      $(".menu-center a").each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $(".menu-center a").removeClass("active");
          currLink.addClass("active");
          if (currentSelected !== "" && !currentSelected.is(refElement)) {
            if (down) {
              $(".menu-center").scrollLeft($(".menu-center").scrollLeft() - 232);
            } else {
              $(".menu-center").scrollLeft($(".menu-center").scrollLeft() + 232);
            }
          }
          currentSelected = refElement;
        } else {
          currLink.removeClass("active");
        }
      });
    }