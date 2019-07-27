$(document).ready(function(){
    $('#dropdown li ul').hide();
    $('#dropdown li').hover(
      function() {
         $(this).find('ul').slideDown('fast');
         $(this).find('a:first').addClass('active')
      },
      function() {
         $(this).find('#submenu').fadeOut('fast');
         $(this).find('a').removeClass('active')
      });
      
  
  
  });
  
 