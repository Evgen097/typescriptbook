(function () {
    "use strict";

    /**
     * Submit an order
     * @param {Boolean} valid
     */

    function alertFn(parameters) {
        let valid = parameters.valid;
        alert('not working');
    }

    $(document).ready( function () {
        $('#orderForm').on("submit", function () {
            alertFn({valid: true});
            return false
        })
    } )


})()