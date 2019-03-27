const App = (function ($) {

    // Private variables
    var bookList = null;

    var searchRegex = null;

    // Public interface
    function init() {
        initIsotope();
        initEventHandlers();
    }

    // Private methods
    function initIsotope() {

        bookList = $('.book-list').isotope({
            
            itemSelector: '.book-card',

            filter: function () {
                return searchRegex ? $(this).find('.book-title').text().match(searchRegex) : true;
            }

        });

        // Setup no result message
        bookList.on('arrangeComplete', function(event, filteredItems) {
            // Show no result if not items left
            if(filteredItems.length <= 0){
                $('#no-result-section').show();
            }else{
                $('#no-result-section').hide();
            }
        })
        
    }

    function initEventHandlers() {

        // Search field
        var searchField = $('#txtSearch');
        searchField.keyup(function(){
            
            // Remove no result and let isotope animation run
            $('#no-result-section').hide();

            searchRegex = new RegExp($(this).val(), 'gi');
            bookList.isotope();

        });
    }


    return {
        init: init
    }

})(jQuery);

jQuery(function () {
    App.init();
})