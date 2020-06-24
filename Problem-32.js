//PROBLEM 32
var array = [];
var result = 0;
var pandigitalProblem = function(a, b, result){
  var tmp = '' + a + b + result;
  if (tmp.length !== 9) {
    return false;
  }
  for (var i = 1; i < 10; i++) {
    if (tmp.indexOf(i.toString()) === -1) {
      return false;
    }
  }
  return true;
};

for (var i = 1; i < 100; i++) {
  for (var j = 1; j < 10000; j++) {
    if (pandigitalProblem(i, j, i * j)) {
      if (array.indexOf(i * j) === -1) {
        array.push(i * j);
      }
    }
  }
}

array.forEach(function(item){
  result += item;
});

console.log("Cevap :" + result);