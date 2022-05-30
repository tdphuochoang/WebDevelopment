function Vehicle(engine, speed) {
  this.engine = engine;
  this.speed = speed;
}

Vehicle.prototype.info = function () {
  console.log("Engine: " + this.engine + " with speed: " + this.speed);
};

function Car(engine, speed, wheels, brake) {
  Vehicle.call(this, engine, speed); //extends constructor from Vehicle class
  this.wheels = wheels;
  this.brake = brake;
}

/*Create new object from Vehicle prototype and assign it to prototype object of Car prototype*/
Car.prototype = Object.create(Vehicle.prototype);

//Recover constructor for Car class
Car.prototype.constructor = Car;

//static method
Car.prototype.isTesla = function () {
  if (this.brake == true) {
    return true;
  } else {
    return false;
  }
};

//Test
let tesla = new Car("tesla", "170mph", true, true);
let honda = new Car("honda", "140mph", true, false);
tesla.info();
honda.info();
console.log(tesla.isTesla());
console.log(honda.isTesla());
