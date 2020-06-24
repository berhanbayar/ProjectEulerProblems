// PROBLEM 2
function fibonacci(limit) {
    var temp, a = 0, b = 1, sum = 0;
    while(b < limit) {
        temp = a;
        a = b;
        b += temp;
        if((b & 1) === 0){
            sum += b;
        }
    }
    return sum;
}
console.log("Cevap: " + fibonacci(4e6))