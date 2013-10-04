/// <reference path="jquery.d.ts" />
/// <reference path="binder.ts" />
var Error1 = (function () {
    function Error1() {
    }
    return Error1;
})();

var CreatePerson = (function () {
    function CreatePerson(name, age, parents) {
        this.name = name;
        this.age = age;
        this.parents = parents;
    }
    CreatePerson.metaName = "name";
    CreatePerson.metaAge = "age";
    return CreatePerson;
})();

var PersonService = (function () {
    function PersonService() {
    }
    PersonService.prototype.execute = function (person) {
        $.ajax({
            type: "POST",
            url: "http://localhost:9000/testPost",
            data: person,
            dataType: "json",
            async: false,
            success: function (data) {
            },
            error: function (data) {
                alert("fail.. " + data);
            }
        });
    };

    PersonService.prototype.validate = function (person) {
        $.ajax({
            type: "POST",
            url: "http://localhost:9000/testPost",
            data: JSON.stringify(person),
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            success: function (data) {
            },
            error: function (request, status, error) {
                console.log(request.responseText);
                console.log(JSON.parse(request.responseText));
                var field = JSON.parse(request.responseText)[0].field;
                document.getElementById(field).style.color = "red";
            }
        });
    };
    return PersonService;
})();
