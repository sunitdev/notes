const App = (function($){

    function init(){
        initTableOfContent();

        initFloatingButton();

        initToolTip();

        removeContainerFromMobile();
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

    function removeContainerFromMobile(){
        // Remove container class from mobile devices
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('.notes-content').removeClass('container');
        }
    }

    return {
        init: init
    }

})(jQuery);

jQuery(function(){
    App.init();
});
