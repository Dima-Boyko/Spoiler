$(document).ready(function(){$('.spd-content').css('display','none')});//������� �������� ��� ��������
$(function(){
  $('.spd-header').click(function(){
    var activ=$(this).next('div');//�������� ����
    var astyle=activ.css('display') ;//������ �������� �������
    $('.spd-content').slideUp() ;//������ ��� ��������
    if(astyle!='block')activ.slideDown();//���������� ������ ������� �������
    });
});