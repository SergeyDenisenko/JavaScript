//Урок 3

//Задание 1
//С помощью цикла while вывести все простые 
//числа в промежутке от 0 до 100
console.log('Задание 1');
var primeNumbers = new Array(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97);
var quantityNumbers = primeNumbers.length;
var i = 0;

while(i < quantityNumbers){
    console.log(primeNumbers[i]);
    i++
}

//Задание 2;3.
//Gодсчета стоимости корзины в зависимости от находящихся в ней товаров
console.log('Задание 2-3');
var basket = new Array();
var products = new Array([1, 'Телевизор', 63990], [2, 'Холодильник', 43890], [3, 'Утюг', 4590], [4, 'Пылесос', 7350]);

function catalogFormation(products){
    var catalog = 'Каталог \r\n';
    for(var i=0; i<products.length; i++){
        catalog += products[i][0] + ' ' + products[i][1] + ' ' + products[i][2] + '\r\n';
    }
    catalog += '\r\n Укажите номер товара: \r\n Для выхода введите 0 \r\n Для входа в корзину введите ' + (products.length + 1);
    return catalog;
}

function shoppingBasket(productID, quantity, products, basketOperation, basket){
    if(basketOperation == 'addProduct'){
        var summ = products[productID][2] * quantity;

        console.log(basket);
        if(basket != 0){
            for(var i=0; i< basket.length; i++){
                if(basket[i][0] == productID){
                    var control = 1;
                    var basketID = i;
                }
            }
        }
        
        if(control == 1){
            basket[basketID][0] = productID;
            basket[basketID][1] = products[productID][1];
            basket[basketID][2] = products[productID][2];
            basket[basketID][3] = quantity;
            basket[basketID][4] = summ;
        }else{
            basket.push([]);
            var numberArray = basket.length - 1;
            basket[numberArray].push(productID);
            // Название продукта
            basket[numberArray].push(products[productID][1]);
            // Цена продукта
            basket[numberArray].push(products[productID][2]);
            // Количество товара в корзине
            // 4й элемент вложенного массива
            basket[numberArray].push(quantity); 
            // Сумма товара в корзине
            // 5й элемент вложенного массива
            basket[numberArray].push(summ); 
        }
    } else{
        if(basket != 0){
            var totalQuantity = 0;
            var totalAmount = 0;
            var basketWindow = 'Корзина товаров \r\n \r\n';
            var basketID = 0;
            
            for(var i=0; i<basket.length; i++){
                totalQuantity += basket[i][3];
                totalAmount += basket[i][4];
                basketWindow += (basketID + 1) + ' ' + basket[i][1] + ' ' + basket[i][2] + '\r\n';
                basketWindow += '  Количество: ' + basket[i][3] + ' Сумма: ' + basket[i][4] + '  \r\n';
                basketID++;
            }
            basketWindow += '\r\n \r\n Всего товаров: ' + totalQuantity + '\r\n Сумма товаров: ' + totalAmount;
            alert(basketWindow);
            return basket;
        }else{
            alert('Корзина пуста!');
            console.log(basket.length); 
            return 0;
        }
    }
}

function magazin(catalog, products, basket){
    var productName = +prompt(catalog);
    var basketOperation = '';
    console.log(productName);
    
    if(productName <= (products.length + 1)){
        console.log(productName);
        if(productName == 0){
            var exit = prompt('Вы точно хотите выйти из магазина?\r\n Для подтверждения введите \'y\'');
            if(exit == 'y' || exit == 'н'){
                alert('Ждем Вас снова!');
                return exit;
            } else{
                magazin(catalog, products, basket);
            }
        }else if(productName == 5){
            basketOperation = 'basketDisplay';
            shoppingBasket(5, 5, products, basketOperation, basket);
            magazin(catalog, products, basket);
        }else{
            basketOperation = 'addProduct';
            var productID = productName - 1;
            var quantity = +prompt('Введите количество');
            if(quantity != 0){
                shoppingBasket(productID, quantity, products, basketOperation, basket);
                console.log(products[productID][1] + " добавлен в корзину");
            }
            magazin(catalog, products, basket);
        }
    } else{
        alert('Выбранный товар отсутствует!');
        magazin(catalog, products);
    }
}

var catalog = catalogFormation(products);
magazin(catalog, products, basket);


//Задание 4
//Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла
console.log('Задание 4');
for(var i=0; i<10; console.log(i++)){}

//Задание 5
//Нарисовать пирамиду с помощью console.log
console.log('Задание 5');
var snowflake = '*';
i=0;

while(i<20){
    console.log(snowflake);
    snowflake += '*';
    i++;
}