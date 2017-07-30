

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

console.log('====================================');
console.log('Increment/Decrement Operator');
console.log('====================================');

first = 100;
console.log('Start value, fisrt:', first );

result = ++first;
console.log('Increase "before" assign, first:', first, ', result:', result);

first = 100;
result = --first;
console.log('Decrease "before" assign, first:', first, ', result:', result);

first = 100;
result = first++;
console.log('Assign before increase, first:', first, ', result:', result);

first = 100;
result = first--;
console.log('Assign before decrease, first:', first, ', result:', result);



console.log('====================================');
console.log('Assignment Operator');
console.log('====================================');

first = 30;
result = 100;

result += first;
console.log(result);

result = 100;
result -= first;
console.log(result);

result = 100;
result *= first;
console.log(result);

result = 100;
result /= first;
console.log(result);

result = 100;
result %= first;
console.log(result);