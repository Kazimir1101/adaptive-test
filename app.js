$(document).ready(function(){

    $('#menu-btn').click(function(){
        $('.new-menu').css('display', 'flex');
        $(this).css('display', 'none');
        $('#close-btn').css('display', 'block');
        $('body').addClass('no-scroll');
    });

    $('#close-btn').click(function(){
        $(this).css('display', 'none');
        $('#menu-btn').css('display', 'flex');
        $('.new-menu').css('display', 'none');
        $('body').removeClass('no-scroll');
    });






});