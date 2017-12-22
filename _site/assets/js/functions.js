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


        var active = function(e){
            console.log(e.target.nodeName)
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


  $('.link-list').on('click', function(e){

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
      $('.project-list').on('click', function(e){

              wrapperName = e.currentTarget.className
              wrapperName = wrapperName.split(' ')
              elemNum = wrapperName[2].match(/\d+/)[0]

              if ($('#project-holder'+elemNum+'').hasClass('project-open')) {
                  $('.clicked-btn'+elemNum+'').css('background-color', '#4FADDA')
                  $('#project-holder'+elemNum+'').removeClass('project-open');

              } else {
                var neededLength = document.getElementsByClassName('project-list')

                for( var i = 1; i < neededLength.length + 1; i++) {
                  if ($('#project-holder'+i+'').hasClass('project-open')) {
                    $('.clicked-btn'+i+'').css('background-color', '#4FADDA')
                    $('#project-holder'+i+'').removeClass('project-open');
                  }
                }
                $('.clicked-btn'+elemNum+'').css('background-color', 'gray')
                $('#project-holder'+elemNum+'').addClass('project-open')

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
    // centerMode: true,
    // centerPadding: '40px',
    slidesToShow: 1,
    arrows: false,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //
    //             slidesToShow: 2
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: false,
    //             centerPadding: '0px',
    //             slidesToShow: 1
    //         }
    //     }
    // ]
});

$('.slider-projects').slick({
    slidesToShow: 1.1,
    arrows: false,
    focusOnSelect: true,
    rtl: true,
    infinite: true,
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
                // arrows: false,
                slidesToShow: 3
            }
        },
        // {
        //     breakpoint: 1260,
        //     settings: {
        //         // arrows: false,
        //         slidesToShow: 5
        //     }
        // },
        {
        breakpoint: 880,
        settings: {
            // arrows: false,
            slidesToShow: 3
        }
        },

        {
            breakpoint: 720,
            settings: {
                // arrows: false,
                slidesToShow: 1

            }
        },

    ]
});



    $('.invest-carousel').slick({
      slidesToShow: 1,
      // arrows: true,
      rtl: true,
      autoplay: true,
      autoplaySpeed: 2000,

    });



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
