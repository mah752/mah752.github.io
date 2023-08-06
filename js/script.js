(function($) {
  "use strict";

  document.addEventListener("DOMContentLoaded", function(){
      window.addEventListener('scroll', function() {
          if (window.scrollY > 50) {
              document.getElementById('header-nav').classList.add('fixed-top');
          } else {
              document.getElementById('header-nav').classList.remove('fixed-top');
              document.body.style.paddingTop = '0';
          }
      });

      $(window).on('scroll', function(){
          if ($(window).scrollTop()){
              $('nav').addClass('nav-bg');
          } else {
              $('nav').removeClass('nav-bg');
          }
      });

      AOS.init({
          duration: 1200,
      });
  });

  $(document).ready(function() {
      var btn = $('#backToTop');

      $(window).on('scroll', function() {
          if ($(window).scrollTop() > 300) {
              btn.addClass('show');
          } else {
              btn.removeClass('show');
          }
      });

      btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({
              scrollTop: 0
          }, 300);
      });
  });
})(jQuery);
