function makeShape(X, Y){   //Other way to do the same thing
    return {
        X: X,
        Y: Y,
        Visible: true,
        Locate: function(){ //Locate(){} is the same
            console.log('Shape is at: '+this.X+', '+this.Y);
        }
    }    
}
let s1 = makeShape(1, 2);
console.log(s1);

function Shape(x, y){   //Constructor
    this.x = x;
    this.y = y;
    this.locate = function(){
        console.log('Shape is at: '+this.x+', '+this.x);
    }
}
let s2 = new Shape(4, 5);
console.log(s2.x);
s2.locate();

const shape = {  //OOP, Made an object
    x: 0,
    y: 0,
    visible: true,
    locate: function()
        {console.log('Shape is at: '+this.x+', '+this.y)}
}

shape.locate();
console.log(shape);
shape.colour = 'pink';
console.log(shape);
delete shape.colour;
console.log(shape);
shape.about = function(){
    console.log('I am colourful');
}
console.log(shape);

//in, of
if('visible' in shape){
    console.log('TRUE');
}
for(let attribute in shape){
    console.log(attribute+' '+shape[attribute]);
    console.log(attribute+' '+shape.attribute); //Sets everything to undefined. Makes a new object?
}
for(let attribute of Object.keys(shape)){   //of is for iterable objects such as array. //Object.keys() puts every key into an array object
    console.log(attribute);
}