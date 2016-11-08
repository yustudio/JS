// bind

// function resource(a,b) {
// 	return console.log(a + b);
// }

// var a = [1,2,3];

// a.map(resource.bind(null, "test "));


// mark johnson  waffle iron 80 2
// mark johnson  blender 80 2
// nikita smith  waffle iron 80 1

var a  = ["a b c", "d e f"];
console.log(a[0])
console.log(a[1])
var b = a.map(line => line.split(" "))
		 .reduce((items, ln) => {
		 	console.log(ln[0] + ln[1] + ln[2])
		 	console.log("items: " + JSON.stringify(items, null, 2))
		 	console.log("items[ln[0]]: " + items[ln[0]])
		 	items[ln[0]] = items[ln[0]] || [];
		 	items[ln[0]].push({
		 		f1: ln[1],
		 		f2: ln[2]
		 	})
		 	return items;
		 },{})
console.log(b)



var obj = {value1: 'prop1', value2: 'prop2', value3: 'prop3'};
var arr = [];
for (var key in obj) {
		
    if (obj.hasOwnProperty(key)) {  // don't get Object.prototype properties
        arr.push(key + '=' + obj[key]);
    }
};
var result = arr.join(',');
console.log(result);

// doesn't work for objects
for (var i=0; i<obj.length; i++) {
	console.log("------" + obj[i] + obj[i].value1)
}



// -----------  currying ------------
var outer = function (a) {
	console.log("in outer")

	var inner = function (b) {
		console.log("in inner")
		outer(b);
		return a+b;
	}

	return inner;
}

console.log(outer(1)(2));



