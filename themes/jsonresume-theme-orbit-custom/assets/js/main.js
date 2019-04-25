jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $('.level-bar-inner').each(function() {

        var itemWidth = $(this).data('level');

        $(this).animate({
            width: itemWidth
        }, 800);

    });

    $('.interests-container > ul > li').click(
        function(elem) {
            $(this).children().slideToggle();
            $(this).toggleClass('expanded');
    });    

    $('.education-container .item').click(
        function(elem) {
            $(this).children('.grade').slideToggle();
    });    

});
