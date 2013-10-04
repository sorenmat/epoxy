var Binder = (function () {
    function Binder() {
    }
    // binds a value from the htmlField to the field of the object
    Binder.prototype.bind = function (obj, field, htmlField, service) {
        // bind an onchange event to the field
        htmlField.onchange = function (event) {
            console.log("field changed: " + (event.currentTarget).value);
            obj[field] = (event.currentTarget).value;
            document.getElementById(field).style.color = "black";
            service.validate(obj);
        };

        // for debug only, verifies that we changed the value on the field of the obj
        obj.watch("name", function (id, oldval, newval) {
            console.log("o." + id + " changed from " + oldval + " to " + newval);
            return newval;
        });
    };
    return Binder;
})();
