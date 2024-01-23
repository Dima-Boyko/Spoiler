$(document).ready(function(){$('.spd-content').css('display','none')});
$(function(){
  $('.spd-header').click(function(){
    $('.spd-content').slideUp() ;
    $(this).next('div').slideDown();
    });
});