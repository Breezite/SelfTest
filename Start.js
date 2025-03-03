console.log('Boom');
let person =
{
    name: 'A',
    surname: 'B',
    age: 0,

    greet: function salute()
    {
        console.log('Hi I am '+this.name+' '+this.surname);
    }
}
console.log(person.name);
person.greet();

function Person(name, surname, age)
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    console.log(this.age);
}
let p1 = new Person ('z', 'X', 2);