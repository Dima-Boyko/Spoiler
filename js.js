$(function(){
  $('button').click(function(){
    $('.spoiler').css('display','none');
    $(this).next('div').show();
    });
});