/// <reference path="jquery.d.ts" />

/// <reference path="binder.ts" />

class CreateCar {
    make : string;
    age : number;
    wheels : number;

    public static  metaMake = "make";
    public static metaAge = "age";
    public static metaWheels = "wheels";
}

class CarService implements Service<CreateCar> {
    execute(car:CreateCar) {
       // do something
    }

    validate(car:CreateCar) {
        if(car.age < 0 || car.age > 80)
            document.getElementById(CreateCar.metaAge).style.color = "red";
     
        if(car.wheels < 2 || car.wheels > 6)
            document.getElementById(CreateCar.metaWheels).style.color = "red";
           
    }

}

