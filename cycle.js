//1
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//2
const arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//3
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

//4
const numbers [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

//5
const obj { a: 1, b: 2, c: 3};
for (const key in obj) {
    console.log(`${key}: ${obj[key]})
}

//6
for (let i = 10; i > 0; i--) {
    console.log(i)
}

//7
for (let i = 0, i < 3, i++) {
  for (let j = 0; j < 3; j++) {
      console.log(`i=${i}, j=${j}`);
  }
}

//8
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

//9
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

//10
for (;;) {
  console.log('Бесконечный цикл');
  break; // Убираем зависание
}
git commit -m 