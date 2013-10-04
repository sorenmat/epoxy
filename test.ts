/// <reference path="jquery.d.ts" />

/// <reference path="binder.ts" />

class Error1 {
    field:string;
    message:string;
}

class CreatePerson {
    name:string;
    age:number;
    parents:Array<CreatePerson>;

    public static  metaName = "name";
    public static metaAge = "age";

    constructor(name:string, age:number, parents:Array<CreatePerson>) {
        this.name = name;
        this.age = age;
        this.parents = parents;
    }
}

class PersonService implements Service {
    execute(person:CreatePerson) {
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
    }

    validate(person:CreatePerson) {
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
                console.log(request.responseText)
                console.log(JSON.parse(request.responseText))
                var field = JSON.parse(request.responseText)[0].field
                document.getElementById(field).style.color = "red";
            }
        });
    }

}

