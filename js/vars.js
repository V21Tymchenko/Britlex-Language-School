//  переменные 
// const age = 18;
// const price = 42.24;
// const name = 'Marta';
// const messadge = 'Привет!!!!'
// const isOpen = true;
// const shouldConfirm = false;
 

// вывод данных
// const type = typeof (shouldConfirm);
// console.log(type);

// console.log('ого')
// alert('jrhfjhfjrhfjr')
// console.log('ВАУ')

// alert(messadge);
// alert(shouldConfirm);



// получение данных
// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// const wantDollars = confirm('Хотите бабки?');
// console.log(wantDollars);



// const quantity = prompt("Веддите количество товара");
// console.log(quantity);
// console.log(typeof quantity);
 


// let quantity = prompt("Веддите количество товара");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let years = prompt('Введите свой возраст');
// years = Number(years);
// console.log(years);
// console.log(typeof years);


// числа

//  const x = 70;
//  const y = 1450;

// console.log(x * y);

// let value = 77;

// value = 152;
// console.log(value);

// const a = 6;
// const z = 6;

// console.log('a > z', a > z);
// console.log('a === z', a === z);
// console.log('a !== z', a !== z);

// let wordNumber = 276.89;
// wordNumber = Number.parseFloat(wordNumber);
// console.log(wordNumber);

// let elementNumber = 76;
// elementNumber = Number.parseInt(elementNumber);
// console.log(elementNumber);

// let myCash = 159.6565887875878668687;
// myCash = (Number(myCash.toFixed(3)));
// console.log(myCash);

// let frase = 'абабагаламага';
// let cost = 15;

// console.log(Number(cost));

// const y = 0.1;
// const u = 0.2;
// console.log((y * 100 + u * 100) / 100);




// Math
// const base = 7;
// const power = 5;

// const result = (Math.pow(base, power));
// console.log(result);

// console.log(base ** power);


// const a = 1.8;

// const result = (Math.floor(a));
// console.log(result);

// console.log(Math.ceil(1.1));

// console.log(Math.max(20, 100, 5, 10, 9, 112, 13, 18, 55, 98, 34));

// console.log(Math.min(20, 100, 5, 10, 9, 112, 13, 18, 55, 98, 34));

// ЗАДАЧА

// let base = prompt('напиши число');
// base = (Number(base));

// console.log(base);

// let power = prompt('напиши степень');
// power = (Number(power));

// console.log(power);

// const result = base ** power;
    
 
// console.log(result);

//  const min = 10;
// const  max = 1567;

// const result = (Math.round(Math.random() * (max - min) + min));

// console.log(result);


// пример с  background-color

// const colors = ['tomato', 'teal', 'black', 'orange', 'skyblue', 'deeppink', 'red', 'white', 'blue', 'pink', 'yellow'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);

// document.body.style.backgroundColor = color;



// строки

// const messedge = 'Я такая одна, других в этом мире нет!'

// console.log(messedge.length);

// const firstName = 'Valeriia';
// const lastName = 'Tymchenko';
// const fullName = firstName + lastName;

// console.log(fullName);
// console.log(firstName + ' ' + lastName);

// ЗАДАЧА

// const room = 765;
// const type = 'vip';
// console.log('this man' + ' ' + type + ' ' + 'get in room' + ' ' + room);

// НО ЛУЧШЕ ПИСАТЬ ТАК!!!!
// const room = 765;
// const type = 'vip';
// const firstName = 'Lera';
// console.log(`this woomen  ${firstName} very ${type} client, please get in room ${room}`);



// Нормализация 

// let brand = prompt('SumSuNG');
// brand = brand.toLowerCase();
// let brand = 'SUmsUnG';
// // console.log(brand.slice(1).toLowerCase());


// brand = brand[0] + slice(1).toLowerCase();

// console.log(brand);    ?????????


// is else

// const salary = 5000;
// if  (salary <= 500){
//     console.log('уровень 1');
// } else if (salary > 500 && salary < 1000) {
//     console.log('уровень 2')
// } else if (salary > 1000 && salary < 3000) {
//     console.log  ('уровень 3')
// } else {
//  console.log ('уровень 4')
// }

// const balance = 1000;

// const message = balance >= 0 ? 'Позитивный баланс' : "Негативный баланс";

// console.log(message);

// const totalSpent = 15600ч;
// let payment = 500;
// let discount = 0;

// if (totalSpent > 100 && totalSpent < 1000) {
//     console.log('бронзовый призер, скидка 2%')
// } else if (totalSpent >= 1000 && totalSpent < 5000){
//   console.log('серебряный призер, скидка 5%')
// } else if (totalSpent > 5000) {
//      console.log("золотой призер, скидка 10%");
// } else {
//      console.log("у вас нету партерской скидки");
// }
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }




// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// const star = 15;
// let price;

// switch (star) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//         break;
//       case 3:
//     price = 40;
//     break;
//   case 4:
//     price = 50;
//         break;
//       case 6:
//     price = 100;
//     break;
//   case 7:
//     price = 150;
//         break;
//       case 8:
//     price = 500;
//     break;
//   case 9:
//     price = 720;
//         break;
    
//     default:
//         console.log('Такого количества звезд нет!')
// }
// console.log(price);

// const star = 7;
// let price;

// if (star === 1 || star === 2 ){
//     price = 10;
// } else if (star === 3 || star === 4){
//     price = 20;
// } else if (star === 5 || star === 6) {
//     price = 30;
// } else {
//     console.log('такой гостинницы нет');
// }
// console.log(price);

//  const star = 5;
// let price;
 
// switch (star) {
//     case 1:
//     case 2:
//         price = 10;
//         break;
//     case 3:
//     case 4:
//         price = 20;
//         break;
//     case 5:
//     case 6:
//         price = 30;
//         break;
    
//     default:
//         console.log('такой гостинницы нет');
// }
// console.log(price);

// const option = 1;
// let messege = ' ';

// switch (option) {
//     case 1:
//         messege = 'можете забрать после 12.00 по адрессу';
//         break;
//     case 2:
//         messege = 'Мы привезем черезь 5 мин';
//         break;

//     case 3:
//         messege = 'решим позже';
//         break;
    
//     default:
//         console.log("Вы никогда не увидете товар");
        
// }
// console.log(messege);




// Андрей 


// const bad = 1;
// const good = 2;


// const andrey = 1;
// let messedge = ' ';

// switch (andrey){
//     case 1:
//     messedge = " YES!!!!!";
//     break;

//      case 2:
//      messedge = "HERA Z DVA";
//     break;

//         default:
//       console.log("Сначала ты мне помни ножки");
// }
//  console.log(messedge);

// цыклы 

// for (let i = 50; i >= 0; i -= 5) {
//     console.log(i);
// }
// const minSalary = 10;
// const maxSalary = 700;
// const employees = 4;
// let totalPrice = 0;

// for (let i = 1; i <= employees; i += 1){
//    const  salary = Math.round (Math.random () * (maxSalary - minSalary) + minSalary);
//     console.log(`вот зп ${i} - ${salary}`);

//     totalPrice += salary
// }
// console.log(`totalPrice:`, totalPrice );

// for (let i = 1; i <= employees; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) - minSalary);
//     console.log(`вот ваша ${i} зарплата ${salary}`);

//     totalPrice += salary;
// }
// console.log(`totalPrice:`, totalPrice);

// const min = 5;
// const max = 9;

// let total = 0;

// for( let i = min; i <= max; i += 1) {
//     console.log(i);

//     if (i % 2 !== 0) {
//         console.log('нечетное:  ', i);
//         continue;
       
      
//     }
//      console.log("четное: ", i);
//   total += i;

// }
// console.log('total: ', total)

// let balance = 2000;
// const payment = 2000;


// console.log(`общая стоимость товара ${payment}, проверяем шо там осталось`);
// if (payment <= balance) {
//     balance -= payment;

//     console.log('все окей, денег хватит');
//     console.log(`но на счету осталось ${balance}, дурачек`);
// } else {
//     console.log('так а денег то нет, пффффф');
// }
// console.log('операция завершена, ВСЕГО ХОРОШЕГО');

// let totalSpend = 1000000;
// let payment = 80000;
// let discount = 0;

// if (totalSpend < 100) {
//     console.log("не призер , со скидкой 0%");
// }

// else if (totalSpend > 100 && totalSpend <= 500) {
//     console.log('бронзовый призер, со скидкой 2%');
//     discount = 0.02;
// } else if (totalSpend > 500 && totalSpend < 2000) {
//     console.log('серебряный призер, скидка 5%')
//     discount = 0.05;
// } else  {
//     console.log('золотой призер , скидка 10%')
   
//     discount = 0.1;
// }
//  payment = payment - payment * discount;
 
//   console.log(
//       `оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
    
// totalSpend += payment;

// console.log(`общая потраченная сумма ${totalSpend}`);

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available < ordered) {
//     let message = "Not enough goods in stock!";
//     console.log(message);
//   } else {
//     let message = "Order is processed, our manager will contact you.";
//     console.log(message);
//   }
//   // Change code above this line
//   return message;
// }
// checkStorage(150, 180);


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = (pricePerDroid * orderedQuantity);
//   // Change code above this line
//   if (totalPrice > customerCredits) {
//       message = "Insufficient funds!";
//       console.log(message);
//   } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//       console.log(message);
//   }

//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);


// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//  console.log(isInRange);
//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case  null:
//      message = "Canceled by user!";
//       console.log(message);
//       break;

//     case  ADMIN_PASSWORD:
//     message = "Welcome!";
//       console.log(message);
//       break;

//     default:
//       message = "Access denied, wrong password!";
//       console.log(message);
//   }

//   // Change code above this line
//   return message;
// }
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");


//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }


// function getShippingCost(country) {
//     let message;
//     let price;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//      price = 100;
//       message = `"Shipping to ${country} will cost ${price} credits"`;
//       console.log(message);
//       break;

//     case 'Chile':
//        price = 250;
//       message = `"Shipping to ${country} will cost ${price} credits"`;
//       console.log(message);
//       break;

//     case 'Australia':
//        price = 170;
//       message = `"Shipping to ${country} will cost ${price} credits"`;
//       console.log(message);
//       break;

//     case 'Jamaica':
//        price = 120;
//       message = `"Shipping to ${country} will cost ${price} credits"`;
//       console.log(message);
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//       console.log(message);
//   }
//   // Change code above this line
//   return message;
// }
// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");


// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   console.log(message);
//   return message;
// }
// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic.length - 1;

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   console.log(substring);
//   return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);

// function formatMessage(message, maxLength) {
//   let result;
  // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//     console.log(result);
//   } else {
//    result = message.slice(0, maxLength) + "...";
//       console.log(result);
//   }
//   /// Change code above this line
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//     console.log(result);
//   return result;
// }
// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//     if (message.toLowerCase().includes('spam')) {
//         result = true;
//     } else { 
//         if (message.toLowerCase().includes("sale")) {
//           result = true;
//         } else {
//           result = false;
//         }
        
// }
//     console.log(result);
//   // Change code above this line
//   return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");

// const gifts = [3, 15, 77, 9, 43, 85, 1];
// let smallGifts = gifts[0];

// for (const gift of gifts) {
//     if (smallGifts > gift) {
//         smallGifts = gift;
//     }
// }
// console.log(smallGifts);
// const friends = ["lera", "svweta", "olya", "sasha", "natasha"];
// for (const friend of friends) {
//     console.log(friend);
// }
// for (let i = 0; i < friends.length; i += 1){
//   console.log(friends[i]);
// }
// const cards = [45, 67, 89, 98, 32, 45, 109, 56, 44];
// let total = 0;

// for (let i = 0; i < cards.length; i += 1){
//     total += cards[i];
// }
// console.log(total);

// // или
// let total = 0;
// for (const card of cards) {
//     total += card;
// }
// console.log(total);
//подчитать все четные

// let total = 0;

// for (const card of cards) {
//     if (card % 2 !== 0) {
//        total += card; 
//     }
    
// }
// console.log(total);

// const logins = ["wow", "ola", "ababagalamaga"];
// const loginFind = "ababagalamaga";
// let message = 'пользователь не наден';

// for (const login of logins) {
//     if (login === loginFind) {
//         message = 'логин найден';
//         break;
//     }
// }
// console.log(message);
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   if (message.toLowerCase().includes("spam")) {
//     result = true;
//   } else {
//     result = message.toLowerCase().includes("sale");
//   }
//   console.log(result);
//   // Change code above this line
//   return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");


// ищем самое большое число
// const numbers = [101, 505, 6, 7, 89, 1000, 57, 99, 63];
// let bigCoinst = numbers[0];

// for (const number of numbers) {
//     if (number > bigCoinst) {
//         bigCoinst = number;
//     }
// }
// console.log(`самое большое числот это ${bigCoinst}`);

// const olas = ['were', 'are', 'you', 'are'];
// let string = ' ';

// for (const ola of olas) {
//     string += ola + ', ';
// }
//  string = string.slice(0, string.length - 1);
// console.log(string);

// НО ЛУЧШЕ 
// const olas = ["were", "are", "you", "are"];
// let string = ' ';


// string = olas.join(', ');
// console.log(string);
