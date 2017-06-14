require('../sass/styles.scss');



$(document).ready(function() {


// VIEW

var headerMenuBtn = $('#header-menu-btn');
var headerMenu = $('#header-menu');
var body = $('body');


headerMenuBtn.on({
    'click' : function (e) {
        headerMenuBtnHandler(e);
    }
})

// Controller

function headerMenuBtnHandler(e) {
    e.preventDefault();
    body.toggleClass('header-menu-open');
    headerMenu.toggleClass('menu-open');
}


});