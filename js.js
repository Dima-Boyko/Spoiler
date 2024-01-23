$(document).ready(function(){$('.spd-content').css('display','none')});//сначала скрываем все елементы
$(function(){
  $('.spd-header').click(function(){
    var activ=$(this).next('div');//выбраный блок
    var astyle=activ.css('display') ;//скрыть активный елемент
    $('.spd-content').slideUp() ;//скрыть все елементы
    if(astyle!='block')activ.slideDown();//отображать только скрытый елемент
    });
});