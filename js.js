var index='';//открыть ппри загрузке страницы
var template_index='#index=';//шаблон запроса
$(document).ready(function(){
  $('.spd-content').css('display','none'); //сначала скрываем все елементы
  //определяет активный елемент при загрузке
  index=location.hash;
  if(index.indexOf(template_index)>-1)//определен активный елемент
  {
    index=index.substr(template_index.length,index.length-template_index.length);
    $('.spoiler-dix:eq('+index+')').children('.spd-content').slideDown();//открывает активный елемент
  }
  });
$(function(){
  $('.spd-header').click(function(){
    var activ=$(this).next('div');//выбраный блок
    var astyle=activ.css('display') ;//скрыть активный елемент
    $('.spd-content').slideUp() ;//скрыть все елементы
    if(astyle!='block')activ.slideDown();//отображать только скрытый елемент
    });
});