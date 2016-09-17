// This is probably the most sh*tty js I have ever done.
// KISS

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

    $('.image')
      .visibility({
        type       : 'image',
        transition : 'fade in',
        duration   : 200
      })
    ;

    // show dropdown on hover
    $('.ui.dropdown').dropdown({
      on: 'hover'
    });

  })
;