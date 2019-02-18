/*
1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
С начала происходит инкреметирование, 
потом возврат значения с присвоением
(c = 1 + 1; a = 1 + 1) //2

d = b++; alert(d);           // 1
С начала происходит возврат значения,
а потом инкреметирование
(d = 1; b = 1 + 1)

c = (2+ ++a); alert(c);      // 5
С начала происходит инкреметирование, 
затем сложение и присоение значения.
(c = 2 + (1 + 2); a = 2 + 1)

d = (2+ b++); alert(d);      // 4
С начала сложение 2 + b(2),
затем присвоение значения d = 2 + 2
и после инкрементирование b = 2 + 1;

В постфиксной форме получается, что увеличивается 
только та переменная, где указан унарный оператор.

alert(a);                    // 3
alert(b);                    // 3

Почему код даёт именно такие результаты?


2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);

x = 5

так как оператор *= является комбинированным оператором
умножения и присвоения.
В итоге получается:
x = 1 + (2 * 2)
a = 4;
x = 5 

*/

alert("Задание 3");
var a, b;
a = +prompt("Введите первое число");
b = +prompt("Введите второе число");
if(isNaN(a) || isNaN(b)){
    alert("Вы ввели не верное значение!")
} else{
    if(a >= 0 && b >= 0){
        alert(a - b);
    } else if(a < 0 && b <0){
        alert(a * b);
    } else{
        alert(a + b);
    }
}


alert("Задание 4");
b = "";
function randomNumber(){
    return Math.round(Math.random() * 15);
}
a = randomNumber();
switch(a){
    case 0:
        b += " 0,";
    case 1:
        b += " 1,";
    case 2:
        b += " 2,";
    case 3:
        b += " 3,";
    case 4:
        b += " 4,";
    case 5:
        b += " 5,";
    case 6:
        b += " 6,";
    case 7:
        b += " 7,";
    case 8:
        b += " 8,";
    case 9:
        b += " 9,";
    case 10:
        b += " 10,";
    case 11:
        b += " 11,";
    case 12:
        b += " 12,";
    case 13:
        b += " 13,";
    case 14:
        b += " 14,";
    case 15:
        b += " 15,";
        alert(b);
}

alert("Задание 5");
a = randomNumber();
b = randomNumber();

function mathOperations(a, b, operation){
    var stringMath, total;

    switch(operation){
        case "сложение":
            stringMath = a + " + " + b + " = ";
            total = a + b;
            stringMath += total;
            return stringMath;
        case "умножение":
            stringMath = a + " * " + b + " = ";
            total = a * b;
            stringMath += total;
            return stringMath;
        case "вычитание":
            stringMath = a + " - " + b + " = ";
            total = a - b;
            stringMath += total;
            return stringMath;
        case "деление":
            stringMath = a + " / " + b + " = ";
            total = a / b;
            stringMath += total;
            return stringMath;
        default:
            stringMath = a + " + " + b + " = ";
            total = a + b;
            stringMath += total + ", ";

            stringMath += a + " * " + b + " = ";
            total = a * b;
            stringMath += total + ", ";

            stringMath += a + " - " + b + " = ";
            total = a - b;
            stringMath += total + ", ";

            stringMath += a + " / " + b + " = ";
            total = a / b;
            stringMath += total + ", ";  
            
            alert("default");
            return stringMath;
    }
}
var total = mathOperations(a, b, 0);
alert(total);

alert("Задание 6");
a = +prompt("Введите первое число");
b = +prompt("Введите второе число");
var operation = prompt("Введите название операции: \"сложение\" \"умножение\" \"вычитание\" \"деление\" ")
total = mathOperations(a, b, operation);
alert(total);

