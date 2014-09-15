//= require_tree .

$(document).ready(function() {
  /* affix the navbar after scroll below header */
  $('#navbar').affix({
    offset: {
      top: $('header').height()-$('#navbar').height()
    }
  });

  /* highlight the top nav as scrolling occurs */
  $('body').scrollspy({ target: '#navbar' })

  /* smooth scrolling for scroll to top */
  $('.scroll-top').click(function(){
    $('body,html').animate({scrollTop:0},1000);
  })

  /* smooth scrolling for nav sections */
  $('#navbar .nav-item a').click(function(){
    var link = $(this).attr('href');
    var posi = $(link).offset().top-30;
    $('body,html').animate({scrollTop:posi},700);
    $('.navbar-container').addClass('collapse').removeClass('in');
  })
});
