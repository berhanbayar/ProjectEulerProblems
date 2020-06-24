var out = require("./timer");
var names = ["BURADA OLDUKÇA FAZLA SAYIDA İSİM VAR"];
names.sort()
var sum=0;
function nameSum(name){
	var tmp = 0;
	for (var i in name){
		tmp += name.charCodeAt(i)-64;
	}
	return tmp;
}
for (var i in names){
	sum += nameSum(names[i]) * (parseInt(i)+1);
}
out.print(sum);
