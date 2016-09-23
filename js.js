//"use strict";

(function(){
	var a=b=3;
})();

console.log("a defined? " +  (typeof a != 'undefined'));
console.log("b defined? " +  (typeof b != 'undefined'));

console.log("-----------------------------")

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        })();  // or }())
    }
};
myObject.func();

console.log("-----------------------------")

var str = "this is a test";
str = str.replace(/\W/g,'').toLowerCase();
console.log(str);
str = str.split('').reverse().join('');
console.log(str);

console.log("-----------------------------")

// for (var i = 0; i < 5; i++) {
// 	(function test(x) {
//     	setTimeout(function() { console.log(x); }, 200 );
//     })(i);
// }

// console.log("-----------------------------")

for (var i = 0; i < 5; i++) {
	
    	setTimeout((function test(){
    		//function() { console.log(x); }
    		console.log(i);
    	})(), 200 )
}    

console.log("-----------------------------")

function Animal() { this.eatVeggie=true; this.eatMeat=false; }
function Herbivore() {}
Herbivore.prototype = new Animal();

function Carnivore() { this.eatMeat = true; this.eatVeggie = false;}
Carnivore.prototype = new Animal;

var rabbit = new Herbivore();
var bear = new Carnivore();

console.log("rabbit eat meat: " + rabbit.eatMeat + ", eat veggie: " + rabbit.eatVeggie);
console.log("bear eat meat: " + bear.eatMeat + ", eat veggie: " + bear.eatVeggie);


console.log("-------  function statement(Hoisting) vs function expression -------")

//Since a function statement was used to define the function, the last definition of 
//the function is the one that is hoisted at the time it is invoked
// (even though it is subsequent to its invocation in the code!).
function foo() { return 1; }
function foo() { return 2; }
console.log(foo());
function foo() { return 3; }
function foo() { return 4; }

//Since a function expression was employed to define the function, the most 
//recent definition of the function is the one that is employed at the time it is invoked.
var foo = function() { return 1; }
foo = function() { return 2; }
console.log(foo());
foo = function() { return 3; }
foo = function() { return 4; }


console.log("-----------------------------")

var animals = [
{ name: 'Caro', species: 'dog'},
{ name: 'Jimmy', species: 'fish'},
{ name: 'Hamilton', species: 'dog'}
];
var isDog = function(animal){
    return animal.species === 'dog';
}
var dogs = animals.filter(isDog);
console.log("Filter on Dogs: " + JSON.stringify(dogs));
//var otherAnimals = animals.reject(isDog);
//console.log("other animals: " + otherAnimals);
var names = animals.map(function(animal) {return animal.name;});
console.log("Map of animal name: " + names);
var names = animals.map(animal => animal.name);  // if can fit into 1 line, can remove return
console.log("Map of animal name ES6: " + names);
var allNames = animals.reduce((sum, animal) => sum += animal.name + " ", "start:");
console.log("Reduce of animal name ES6: " + allNames);
