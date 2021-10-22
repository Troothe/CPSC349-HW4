(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment="form"]';
    var App = window.App;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function (data) {
        console.log('Handling?');
        console.log(data);
        $('#open-modal-link').click();
        $('#modal-text')[0].innerText = "Thank you for your payment, " + data.title + " " + data.username;
    });
})(window);