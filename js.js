var spd_index='';//открыть ппри загрузке страницы
var template_spd_index='#spd_index=';//шаблон запроса
$(document).ready(function(){
  $('.spd-content').css('display','none'); //сначала скрываем все елементы
  //определяет активный елемент при загрузке
  spd_index=location.hash;
  if(spd_index.indexOf(template_spd_index)>-1)//определен активный елемент
  {
    spd_index=spd_index.substr(template_spd_index.length,spd_index.length-template_spd_index.length);
    $('.spoiler-dix:eq('+spd_index+')').children('.spd-content').slideDown();//открывает активный елемент
  }
  });
$(function(){
  $('.spd-header').click(function(){
      var activ=$(this).next('div');//выбраный блок
      var astyle=activ.css('display') ;//скрыть активный елемент
      $('.spd-content').slideUp() ;//скрыть все елементы
      if(astyle!='block')activ.slideDown();//отображать только скрытый елемент
      let  _spoiler=jQuery(this).closest(".spoiler-dix");
      if(_spoiler.hasClass("spd-active")){
        _spoiler.removeClass('spd-active');
      }else{
        _spoiler.addClass('spd-active');
      }
    });
});