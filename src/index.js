// let val1 = "let変数";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// // let val1 = 'let変数再宣言';
// // console.log(val1);

// const val2 = "const変数";
// console.log(val2);

// // val2 = '上書き';
// // const val2 = "再宣言";

// const val4 = {
//   name: "来夢",
//   age: 29
// };
// val4.name = "raimu";
// val4.address = "tokyo";

// console.log(val4);

// const val5 = ["cat", "dog"];
// console.log(val5);

// val5[0] = "bird";
// val5.push("monkey");

// const message1 = `私の名前は${val4.name}です。年齢は${val4.age}歳です。`;
// console.log(message1);

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func2_2 = (str) => {
//   return str;
// };

// console.log(func2_2("2-2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(2, 3));

// const myp1 = { name: "来夢", age: 29 };
// const { name, age } = myp1;
// const msg = `name:${name},age:${age}`;
// console.log(msg);

// const myp2 = ["raimu", 29];
// const [n, a] = myp2;
// const msg2 = `name:${n},age:${a}`;
// console.log(msg2);

// const sayhello = (name = "ゲスト") =>
//   console.log(`こんにちは！　${name}さん！！`);

// sayhello("田中");

// const arr1 = [3, 9, 100];
// const sumfunc = (num1, num2) => console.log(num1 + num2);
// // sumfunc(arr1[0],arr1[1]);
// sumfunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

const namearr1 = ["田中", "細田", "スズキ"];
namearr1.map((name, i) => console.log(`${i + 1}番目は${name}さんです`));

const newnamearr = namearr1.map((name) => {
  if (name === "細田") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newnamearr);

const num = "1330";
const formattednum =
  typeof num === "number"
    ? num.toLocaleString()
    : "すうちをにゅうりょくしてください";
console.log(formattednum);

const checkUnder100 = (num1, num2) =>
  num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
console.log(checkUnder100(1, 200));
