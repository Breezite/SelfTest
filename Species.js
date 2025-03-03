let animal =
{
    legs: 4,
    sound: 'Gr',
    alive: true,

    jump: () => {return (Math.random()*10)+animal.legs}
}
console.log(animal.jump());

let dog = Object.create(animal)
{
    dog.jump = 22;
}
console.log(dog.alive);
console.log(dog.jump);

//Above is inheritance
//Below is constructor

function Car(model, manufacture)
{
    this.model = model;
    this.manufacture = manufacture;
}
Car.prototype.display = function()
{
    console.log('Make: ' + this.make + ', Manufacturing date: ' + this.manufacture);
}

let c1 = new Car('Reno', 1999);
c1.display();