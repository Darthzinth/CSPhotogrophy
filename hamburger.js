$(document).ready(function(){
    
    $('.js--fav-images').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }   
    }, {
        offset: '40px'
    });
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon');
        
        nav.slideToggle(200);
        
        if (icon.attr('name') == "menu") {
            icon.attr('name', 'close-sharp');
        } else {
            icon.attr('name', 'menu')
        }
    });
});