function test(a) {
	var result=[];
	for (var i=0, n=a.length; i<n; i++) {
		result[i] = function() {
			console.log("------------" + a[i]);
			return a[i];
		};
	}
	return result;
}

var list = test([1,2,3]);
var f = list[0];
console.log(f())