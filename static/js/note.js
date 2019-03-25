const App = (function($){

    function init(){
        initTableOfContent();
        
        initFloatingButton();

        initToolTip();
    }

    function initTableOfContent(){

        TOC($('#tableOfContent'));
    }


    function initFloatingButton(){
        const target = $('.floating-icon-button');

        // Show button when content is scrolled
        $(window).scroll(function(){
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                target.show();
            } else {
                target.hide();
            }
        });

        // On Click scroll to top
        target.click(function(event){
            $('html,body').animate({scrollTop: 0},'slow');
            event.preventDefault();
        });

        // Hidden at start
        target.hide();
    }

    function initToolTip(){
        $('[data-toggle="tooltip"]').tooltip(); 
    }

    return {
        init: init
    }

})(jQuery);

jQuery(function(){
    App.init();
});