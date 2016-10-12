// //"use strict";

// (function(){
// 	var a=b=3;
// })();

// console.log("a defined? " +  (typeof a != 'undefined'));
// console.log("b defined? " +  (typeof b != 'undefined'));

// console.log("-----------------------------")

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         })();  // or }())
//     }
// };
// myObject.func();

// console.log("-----------------------------")

// var str = "this is a test";
// str = str.replace(/\W/g,'').toLowerCase();
// console.log(str);
// str = str.split('').reverse().join('');
// console.log(str);

// console.log("-----------------------------")

// // for (var i = 0; i < 5; i++) {
// // 	(function test(x) {
// //     	setTimeout(function() { console.log(x); }, 200 );
// //     })(i);
// // }

// // console.log("-----------------------------")

// for (var i = 0; i < 5; i++) {
	
//     	setTimeout((function test(){
//     		//function() { console.log(x); }
//     		console.log(i);
//     	})(), 200 )
// }    

// console.log("-----------------------------")

// function Animal() { this.eatVeggie=true; this.eatMeat=false; }
// function Herbivore() {}
// Herbivore.prototype = new Animal();

// function Carnivore() { this.eatMeat = true; this.eatVeggie = false;}
// Carnivore.prototype = new Animal;

// var rabbit = new Herbivore();
// var bear = new Carnivore();

// console.log("rabbit eat meat: " + rabbit.eatMeat + ", eat veggie: " + rabbit.eatVeggie);
// console.log("bear eat meat: " + bear.eatMeat + ", eat veggie: " + bear.eatVeggie);


// console.log("-------  function statement(Hoisting) vs function expression -------")

// //Since a function statement was used to define the function, the last definition of 
// //the function is the one that is hoisted at the time it is invoked
// // (even though it is subsequent to its invocation in the code!).
// function foo() { return 1; }
// function foo() { return 2; }
// console.log(foo());
// function foo() { return 3; }
// function foo() { return 4; }

// //Since a function expression was employed to define the function, the most 
// //recent definition of the function is the one that is employed at the time it is invoked.
// var foo = function() { return 1; }
// foo = function() { return 2; }
// console.log(foo());
// foo = function() { return 3; }
// foo = function() { return 4; }


// console.log("-----------------------------")

// var animals = [
// { name: 'Caro', species: 'dog'},
// { name: 'Jimmy', species: 'fish'},
// { name: 'Hamilton', species: 'dog'}
// ];
// var isDog = function(animal){
//     return animal.species === 'dog';
// }
// var dogs = animals.filter(isDog);
// console.log("Filter on Dogs: " + JSON.stringify(dogs));
// //var otherAnimals = animals.reject(isDog);
// //console.log("other animals: " + otherAnimals);
// var names = animals.map(function(animal) {return animal.name;});
// console.log("Map of animal name: " + names);
// var names = animals.map(animal => animal.name);  // if can fit into 1 line, can remove return
// console.log("Map of animal name ES6: " + names);
// var allNames = animals.reduce((sum, animal) => sum += animal.name + " ", "start:");
// console.log("Reduce of animal name ES6: " + allNames);


// console.log("-------------------------")

// // Constructor pattern
// function Learning(name) { // function, also an object  function -> object - > null prototypical chain
//     this.name = name;  // this is unique of every instance of the Learning object
// }
// var school1 = new Learning("base");
// console.log("school1.name: " + school1.name);
// school1.name = "school1";
// console.log("school1.name: " + school1.name);
// console.log("school1.name has own: " + school1.hasOwnProperty("name"));


// console.log("------------- encapsulation & inheritance ------------")

// var Mammal  = function(name){
//     this.name = name;
// }

// console.log(typeof(Mammal))

// Mammal.prototype.get_name = function(){
//     return this.name;
// }

// // encapsulation: encapsulate get_name method and name property into myMammal object
// var myMammal = new Mammal('pickel');
// var name = myMammal.get_name();
// console.log('myMammal name is: ' + name)

// var Cat = function(gender){
//     this.gender = gender;    
// }

// // inheritance
// Cat.prototype = new Mammal();
// var mycat = new Cat('male');
// mycat.name = 'Tom';

// console.log(mycat.gender + mycat.name);

// console.log(typeof(Cat))

// console.log("-----------------------")

// function Plant() {
//     this.country = "Mexico";
//     this.isOrganic = true;
// }

// Plant.prototype.showNameAndColor = function(){
//     console.log(this.name + " " + this.color);
// }

// Plant.prototype.amIOrganic = function() {
//     if (this.isOrganic)
//         console.log("yes, I am organic");
// }

// var leave  = new Plant();
// leave.NEWPROPERTY = "NEWPROPERTY";  // if on the object, doesn't get inherited
// console.log("leave items: ")
// for (var item in leave){
//     console.log(item)
// }

// function Fruit (fruitName, fruitColor){
//     this.name = fruitName;
//     this.color = fruitColor;
// }

// Fruit.prototype = new Plant();

// var banana = new Fruit("Banana", "Yellow");

// console.log(banana.name);
// console.log(banana.showNameAndColor());

// console.log("banana.prototype: " + JSON.stringify(banana.prototype));
// console.log("Fruit.prototype: " + JSON.stringify(Fruit.prototype));
// console.log("Plant.prototype: " + JSON.stringify(Plant.prototype));

// console.log("banana items: ")
// for (var item in banana){
//     console.log(item)
// }


// console.log("------------ hoisting -----------")

// function wrapElements(a) {
//     var result = [], i;
//     for (i =0, n=a.length; i<n; ++i) { 

//         // version 1
//        //  (function() {
//        //      // Immediately invoked function expression(IIFE)
//        //      // entering scope at runtime allocates memory for each var in that scope
//        //     var j = i;
//        //     //Closures store their outer variables(allocated memory) by reference, not by value.
//        //     result[i] = function() { return a[j]; };
//        // })();

//         // version 2 
//         // bind local var as parameter to IIFE and pass its value as arg
//         (function(i) {           
//            result[i] = function() { return a[i]; }    
//         })(i);        
//     }
//     return result;
// }

// var wrap = wrapElements([1,2,3,4]);
// var f = wrap[0];
// console.log(f());

console.log("-------------  private static  ------------")
//there is only one counter variable and that its value is increased whenever 
// Gadget is called. The difference in ver1 code is that it is wrapped in an IIFE, 
// so that counter is not accessible from any other function other than the one 
//returned from the IIFE (which is assigned to Gadget), thus making counter "private".

//version 1
var Gadget = (function () {
   var counter = 0;
   return function () {
       console.log(counter += 1);
   };
}());

// version 2
var counter = 0;

var Gadget =  function () {
   console.log(counter += 1);
};

var g1 = new Gadget(); // logs 1
var g2 = new Gadget(); // logs 2


// function Student(name) {
//     this.name = name;
//     this.addStudent(name);
// };

// Student.prototype = {
//     count: 0,
//     students: [],
//     addStudent: function(name) {
//         this.students.push(name);
//         ++(this.count);
//     },
//     numStudents: function() {
//         return this.count;
//         //return this.students.length;
//     },
//     getStudents: function() {
//         return this.students;
//     },
// };

// var bob1 = new Student('bob1');
// var bob2 = new Student('bob2');
// console.log(bob1.getStudents());
// console.log(bob1.numStudents());
// console.log(bob2.getStudents());
// console.log(bob2.numStudents());
// console.log(bob1.students)
// console.log(bob1.count)
// console.log(bob2.students)
// console.log(bob2.count)
