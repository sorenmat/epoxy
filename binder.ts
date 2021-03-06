
// Service interface for validating and executing the model
interface Service<T> {
    // Execute method, this could be a post to a REST service or something like that
    execute(obj :T) :void;

    // Method for validating the model object, this again could be a REST service
    validate(obj :T) :void;
}

class Binder {
    // binds a value from the htmlField to the field of the object
    bind(obj:any, field:string, htmlField:HTMLElement, service:Service<any>) {
        // bind an onchange event to the field
        htmlField.onchange = function (event) {
            console.log("field changed: " + (<HTMLInputElement>event.currentTarget).value);
            obj[field] = (<HTMLInputElement>event.currentTarget).value; // update the value of the object, from the value of the field
            document.getElementById(field).style.color = "black"; // reset the color to the "default"
            service.validate(obj)
        }

        // for debug only, verifies that we changed the value on the field of the obj
        obj.watch("name", function (id, oldval, newval) {
            console.log("o." + id + " changed from " + oldval + " to " + newval);
            return newval;
        });
    }
}