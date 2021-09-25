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
