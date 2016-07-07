

$(document)
  .ready(function() {
    // setup drop downs..
    $('.ui.dropdown').dropdown();

    // // Set smooth scroll on nav
    $('#top-nav a').smoothScroll();
    $('#fix-nav a').smoothScroll();

    // fix main menu to page on passing
    $('#top-nav').visibility({
        once: false,
        onBottomPassed: function() {
          $('#fix-nav').transition('fade in');
        },

        onBottomPassedReverse: function() {
          $('#fix-nav').transition('fade out');
        }
      })
    ;


    // // lazy load images
    // $('.image').visibility({
    //   type: 'image',
    //   transition: 'vertical flip in',
    //   duration: 500
    // });

    // show dropdown on hover
    $('.ui.dropdown').dropdown({
      on: 'hover'
    });

  })
;