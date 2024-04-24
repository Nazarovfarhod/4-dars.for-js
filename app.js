// let num = parseInt(prompt("Sonni kiriting:"));
// let i = 0;
// let sum = 0;
// while (i <= num) {
//   console.log(i);
//   sum += i;
//   i++;
// }
// console.log(sum);

// const num = parseInt(+prompt("1 dan 10 gacha raqam kiriting"))

// for (let i = 1; i<=10; i++)  {
// console.log (`${num}*${i}=${num*i}`)
// }

// let text =
//   "Loem ipsum dolo sit amet consectetu adipisicing elit. Ducimus ipsa cupti consectetu aut  velit iusto nihil! Sit, alias molestiae!";
// let sum = 0;

// for (let i = 0; i < text.length; i++) {
//   if (text[i].toLowerCase() == "r") {
//     sum++
//     break;
//   }
// }
// if (sum) {
//   console.log (true)
// }else {
//   console.log(false)
// }
// let num1 = +prompt("birinchi sonni kiriting:");
// let belgi = prompt("+,-,*./ shulardan keregini tanlang");
// let num2 = +prompt("ikkinchi sonni kiriting:");

// switch (belgi) {
//   case "+":
//     alert(num1 + num2);
//     break;

//   case "-":
//     alert(num1 - num2);
//     break;
//   case "*":
//     alert(num1 * num2);
//     break;
//   case "/":
//     alert(num1 / num2);
//     break;
// }

// let text =
//   "Lorem ipsum! dolor sit amet consectetur adipi!sicing elit. Nam reprehe!nderit exercitationem repudiandae sequi, soluta officia unde amet alias explicabo culpa. Obcaecati, illo non. Optio, soluta sunt cupidit!ate ex architecto distinct!io!";
// let newText = "";
// for (let i = 0; i < text.length; i++) {
//   if (text[i] != "!") {
//     newText += text[i];
//   }
// }
// console.log(newText);

// VAZIFALAR

// 1-masala

// alert("k sonini n marta ko'rsatib beruvchi darstur");
// let k = prompt("k sonini kiriting:");
// let n = prompt("n sonini kiriting:");

// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

// 2-masala

// alert(
//   "a va b sonlarini kiriting, va a va b gacha bo'lgan sonlarni va a va b gacha nechta son borligini ko'rsatib beruvchi dastur:"
// );
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let count = 0;

// for (let i = a; i <= b; i++) {
//   console.log(i);
//   count++;
// }
// console.log(`a dan b gacha ${count} ta son bor.`);

// 3-masala

// alert(
//   "a va b sonlarini kiriting, va a va b gacha bo'lgan sonlarni va a va b gacha nechta son borligini ko'rsatib beruvchi dastur (a va b dan tashqari):"
// );
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let count = 0;

// for (let i = b - 1; i > a; i--) {
//   console.log(i);
//   count++;
// }
// console.log(`a dan b gacha ${count} ta son bor.`);

// 4-masala

// let price = +prompt(
//   "Narxni kiriting va 10 kg gacha bo'lgan narxlar ro'yhatiga ega bo'ling:"
// );
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   let totalPrice = i * price;
//   console.log(`${i} kg uchun narx: ${totalPrice}`);
//   sum += totalPrice;
// }

// console.log(`Jami narx: ${sum}`);

// 5- masala

// let price = parseFloat(
//   prompt(
//     "Narxni kiriting va 0.1 kg dan 1 kg gacha bo'lgan narxlar ro'yhatiga ega bo'ling:"
//   )
// );
// let sum = 0;

// for (let i = 0.1; i <= 1; i += 0.1) {
//   let totalPrice = i.toFixed(1) * price;
//   console.log(`${i.toFixed(1)} kg uchun narx: ${totalPrice}`);
// }

// 6- masala

// let price = parseFloat(
//   prompt(
//     "Narxni kiriting va 0.1 kg dan 1 kg gacha bo'lgan narxlar ro'yhatiga ega bo'ling:"
//   )
// );
// let sum = 0;

// for (let i = 1; i <= 2; i += 0.2) {
//   let totalPrice = i.toFixed(1) * price;
//   console.log(`${i.toFixed(1)} kg uchun narx: ${totalPrice}`);
// }

// 7-masala
// alert(
//   "a va b son kiriting. Shunda a va b sonlari oralig'idagi sonlar yeg'indisini olasiz(a soni b sonidan kichik bo'lsin)"
// );
// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let sum = 0;
// if (a < b) {
//   for (let i = a + 1; i < b; i++) {
//     sum += i;
//   }
//   console.log(sum);
// } else {
//   console.log("a soni b sonidan kichik bo'lishi kerak.");
// }

// 8-masala

// alert(
//   "a va b son kiriting. Shunda a va b sonlari oralig'idagi sonlar ko'paytmsini olasiz(a soni b sonidan kichik bo'lsin)"
// );
// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let sum = 1;
// if (a < b) {
//   for (let i = a + 1; i < b; i++) {

//     sum *= i;
//   }
//   console.log(sum);
// } else {
//   console.log("a soni b sonidan kichik bo'lishi kerak.");
// }

// 9-masala

// alert(
//   "a va b son kiriting. Shunda a va b sonlari oralig'idagi sonlar kvadratining yeg'indisini olasiz(a soni b sonidan kichik bo'lsin)"
// );
// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let sum = 0;
// if (a < b) {
//   for (let i = a + 1; i < b; i++) {
//     sum += i ** 2;
//   }
//   console.log(sum);
// } else {
//   console.log("a soni b sonidan kichik bo'lishi kerak.");
// }

// 10-masala

// let n = +prompt("n sonini kiriting:");
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += 1 / i;
//   console.log(`1 / ${i}`);
// }
// console.log(sum);

// 11-masala

// let n = +prompt("n sonini kiriting:");
// let sum = 0;

// for (let i = 0; i<=n; i++){
//   sum+=(n+i)**2
// }
// console.log(sum)

// 12-masala

// let n = +prompt("n sonini kiriting:");
// let sum = 1;

// for (let i = 1; i <= n; i++) {
//   sum *= 1 + i / 10;
// }
// console.log(`${sum.toFixed(3)}`);
