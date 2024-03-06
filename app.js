//10-masala

alert("10-masala");

let tomon1 = +prompt("A tomonni kiriting");
let tomon2 = +prompt("B tomonni kiriting");
function formater(tomonA, tomonB) {
  let result = tomonA + tomonB - 1;
  return result;
}
console.log(formater(tomon1, tomon2));
//11-masala
alert("11-masala");

let son1 = +prompt("1-raqamni kiriting");
let son2 = +prompt("2-raqamni kiriting");
function qoldiq(num1, num2) {
  let result = num1 % num2;
  return result;
}
console.log(qoldiq(son1, son2));
//12-masala
alert("12-masala");

let height = +prompt("Bo'yini kiriting");
let width = +prompt("Bo'yini kiriting");
function s(h, w) {
  let result = h * w;
  return result;
}
console.log(s(height, width));
//13-masala
alert("13-masala");

let age = "18";
let gap = " ";
let ism = +prompt("Ism kiriting");
function string(a, gap, neym) {
  let result = a + gap + neym;
  return result;
}
console.log(string(age, gap, ism));
//14-masala
alert("14-masala");
let son = +prompt("Raqam kiriting");
function formula(kub) {
  let result = kub ** 5;

  return result;
}
console.log(formula(son));
//15-masala
//alert("15-masala");
//let son = +prompt("Raqam kiriting");
//function formater(raqam) {}

//16-masala
alert("16-masala");
let raqam = +prompt("Raqam kiriting");
function ichkiBurchaklar(n) {
  let result = (n - 2) * 180;
}
console.log(ichkiBurchaklar(raqam));
