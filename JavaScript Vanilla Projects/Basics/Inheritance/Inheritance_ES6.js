class Vehicle {
  constructor(engine, speed) {
    this.engine = engine;
    this.speed = speed;
  }

  //method
  info() {
    console.log("Engine: " + this.engine + " with speed: " + this.speed);
  }
}

class Car extends Vehicle {
  constructor(engine, speed, wheels, brake) {
    super(engine, speed);
    this.wheels = wheels;
    this.brake = brake;
  }

  //static method
  static isTesla(model) {
    return model.brake == true ? true : false;
  }

  //method
  honk() {
    console.log("This is the honk method");
  }
}

let tesla = new Car("tesla", "170mph", true, true);
let honda = new Car("honda", "140mph", true, false);
tesla.info();
honda.info();
console.log(Car.isTesla(tesla));
console.log(Car.isTesla(honda));
