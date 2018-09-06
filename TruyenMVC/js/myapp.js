$(document).ready(
    function () {
        _searchnavbar();
    }
);
function _searchnavbar() {
    // Menu navbar
    $('.js-open-sidebar').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('body').addClass('open-sidebar');
    });
    $('.js-close-sidebar').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('body').removeClass('open-sidebar');
    });
    $('.js-open-search-box-mobile').on('click', function(event) {
        event.preventDefault();
        $('body').addClass('open-search-box');
        setTimeout(function() {
            $('#js-search-input-mobile').focus()
        }, 500);
    });
    $('.js-close-search-box').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('body').removeClass('open-search-box');
    });
    const $searchPanel = $('#js-search-panel');
    $('#js-search-toggle').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!$searchPanel.hasClass('active')) {
            $searchPanel.addClass('active');
            setTimeout(function() {
                $('#txtKeyword').focus()
            }, 500);
        } else {
            $searchPanel.removeClass('active');
        }
    });
}