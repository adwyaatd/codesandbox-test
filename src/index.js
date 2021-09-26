let val1 = "let変数";
console.log(val1);

val1 = "上書き";
console.log(val1);

// let val1 = 'let変数再宣言';
// console.log(val1);

const val2 = "const変数";
console.log(val2);

// val2 = '上書き';
// const val2 = "再宣言";

const val4 = {
  name: "来夢",
  age: 29
};
val4.name = "raimu";
val4.address = "tokyo";

console.log(val4);

const val5 = ["cat", "dog"];
console.log(val5);

val5[0] = "bird";
val5.push("monkey");

const message1 = `私の名前は${val4.name}です。年齢は${val4.age}歳です。`;
console.log(message1);

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

const func2 = (str) => str;
console.log(func2("func2です"));

const func2_2 = (str) => {
  return str;
};

console.log(func2_2("2-2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(2, 3));

const myp1 = { name: "来夢", age: 29 };
const { name, age } = myp1;
const msg = `name:${name},age:${age}`;
console.log(msg);

const myp2 = ["raimu", 29];
const [n, a] = myp2;
const msg2 = `name:${n},age:${a}`;
console.log(msg2);
