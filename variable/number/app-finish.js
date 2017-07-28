

let first = 100;
let second = 30;
let result = 0;

console.log('====================================');
console.log('บวก, ลบ, คูณ, หาร');
console.log('====================================');

result = first + second;
console.log('บวก: ', result);

result = first - second;
console.log('ลบ: ', result);

result = first * second;
console.log('คูณ: ', result);

result = first / second;
console.log('หารไม่เอาเศษ: ', result);

result = first % second;
console.log('หารเอาแค่เศษ: ', result);

result = ++first;
console.log('เพ่ิมอีก 1: ', result);

result = --first;
console.log('ลดไป 1: ', result);

result = first++;
console.log(result, first);

result = first--;
console.log(result, first);

console.log('====================================');
console.log('Assignment Operator');
console.log('====================================');

first = 10;
result = 7;

result += first;
console.log(result);

result = 7;
result -= first;
console.log(result);

result = 7;
result *= first;
console.log(result);

result = 7;
result /= first;
console.log(result);

result = 7;
result %= first;
console.log(result);