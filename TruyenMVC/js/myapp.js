$(document).ready(
    function () {
        _searchnavbar();
        _navbar();
    }
);
//function Navbar
function _navbar() {
    //Open Navbar Moblie
    $('.js-open-sidebar').on('click', function(event) {
        console.log('1');
        event.preventDefault();
        event.stopPropagation();
        $('body').addClass('open-sidebar');
    });
    //Close Navbar Moblie
    $('.js-close-sidebar').on('click', function(event) {
        console.log('2');
        event.preventDefault();
        event.stopPropagation();
        $('body').removeClass('open-sidebar');
    });
}
// function Search
function _searchnavbar() {

    //Open Input Search Mobile
    $('.js-open-search-box-mobile').on('click', function(event) {
        console.log('3');
        event.preventDefault();
        $('body').addClass('open-search-box');
        setTimeout(function() {
            $('#js-search-input-mobile').focus()
        }, 500);
    });
    //Close Input Search Mobile
    $('.js-close-search-box').on('click', function(event) {
        console.log('4');
        event.preventDefault();
        event.stopPropagation();
        $('body').removeClass('open-search-box');
    });
    //Open Input Search Ipad
    const $searchPanel = $('#js-search-panel');
    $('#js-search-toggle').on('click', function(event) {
        console.log('5');
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