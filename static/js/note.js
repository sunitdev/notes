const App = (function($){

    function init(){
        initTableOfContent();
    }

    function initTableOfContent(){

        TOC($('#tableOfContent'));
    }

    return {
        init: init
    }

})(jQuery);

jQuery(function(){
    App.init();
});