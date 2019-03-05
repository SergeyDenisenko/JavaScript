// Урок 4.
// Задание 1.
var numberObject = {
    hundreds: '',
    tens: '',
    units: '',
    state: '',
    decomposition: function(number){
        number = number.split('');
        console.log(number.length);
        if(number.length < 4){
            var i = 0;
            switch(number.length){
                case 3:
                    this.hundreds = number[i];
                    i++;
                case 2:
                    this.tens = number[i];
                    i++;
                case 1:
                    this.units = number[i];
                    this.state = true;
                    break;
            }
        } else{
            this.hundreds = '';
            this.tens = '';
            this.units = '';
            this.state = false;
        }    
    },
    message: function(){
        if(this.state == true){
            var str = 'Сотни: ' + this.hundreds + '\r';
            str += 'Десятки: ' + this.tens + '\r';
            str += 'Еденицы: ' + this.units + '\r';
            alert(str);
        } else{
            var str = 'Вы ввели недопустимое значение! \r';
            str += 'Введеное значение должно быть от 0 до 999!';
            console.log(str);
        }
    },
};

numberObject.decomposition(prompt('Введите число от 0 до 999.'));
numberObject.message();


// Задание 2.
var products = [
    {
        name: 'Смартфон',
        price: '5990',
        productsId: '0'
    },
    {
        name: 'Планшет',
        price: '11990',
        productsId: '1'
    },
    {
        name: 'microSD 16Gb',
        price: '590',
        productsId: '2'
    },
    {
        name: 'АКБ 6000 mAh',
        price: '2000',
        productsId: '3'
    }
];

var score = {
    catalog: false,
    basket: [],
    output: 0,
    quantityCatalog: false,
    quantityBasket: false,
    entranceBasket: false,
    entranceScore: false,
    totalAmount: 0,
    totalQuantity: 0,
    catalogFormation: function(products){
        var str = 'Каталог. \r';
        for(var i = 0; i < products.length; i++){
            str += (i + 1) + ') ' + products[i].name + ' ';
            str += products[i].price + ' руб.\r';
        }
        str += '\r Введите номер товара. \r';
        str += 'Для выхода введите ' + this.output + '\r';
        this.entranceBasket = products.length + 1;
        str += 'Для входа в корзину введите ' + this.entranceBasket;
        this.catalog = str;
        this.quantityCatalog = products.length;
    },
    basketFormation: function(){
        if(this.basket == false){
            return false;
        } else{
            this.basketCalc();
            var str = 'Корзина товаров. \r';
            for(var i = 0; i < this.basket.length; i++){
                str += (i + 1) + ') ' + this.basket[i].name + ' ';
                str += this.basket[i].price + '\r';
                str += 'Количество: ' + this.basket[i].quantityBasket + ' ';
                str += 'Сумма: ' + this.basket[i].basketSumm + '\r';
            }
            str += '\r Всего товаров: ' + this.totalQuantity + '\r';
            str += 'Общая сумма: ' + this.totalAmount + '\r';
            this.quantityBasket = this.basket.length;
            //str += '\r Введите номер товара. \r';
            str += 'Для выхода введите ' + this.output + '\r';
            this.entranceScore = this.basket.length + 1;
            str += 'Для возврата в каталог введите ' + this.entranceScore;
            return str;
        }
    },
    addCart: function(products, idProduct, quantity){
        idProduct = idProduct - 1
        var basketProduct = products[idProduct];
        this.basket.push(basketProduct);
        basketID = this.basket.length - 1;
        this.basket[basketID].basketID = basketID;
        this.basket[basketID].quantityBasket = quantity;
    },
    basketCalc: function(){
        for(var i = 0; i < this.basket.length; i++){
            this.basket[i].basketSumm = this.basket[i].quantityBasket * this.basket[i].price;
            this.totalAmount += this.basket[i].basketSumm;
            this.totalQuantity += this.basket[i].quantityBasket;
        }
    },
    storeManagement: function(control, key){
        if(key == this.output){
            var output = prompt('Вы точно хотите выйти из магазина?\r\n Для подтверждения введите \'y\'');
            if(output == 'y' || output == 'н'){
                alert('Ждем Вас снова!');
            } else{
                return false;
            }
        }else if(control == 'score'){
            if(key == this.entranceBasket){
                var message = this.basketFormation();
                if(message == false){
                    alert('Корзина пуста!');
                    return false;
                } else{
                    message = +prompt(message);
                    this.storeManagement(control, message);
                }
            }

        } else if(control == 'basket'){

        }
        if(control == 'score'){
            switch(key){
                case this.output:
                    var output = prompt('Вы точно хотите выйти из магазина?\r\n Для подтверждения введите \'y\'');
                    if(output == 'y' || output == 'н'){
                        alert('Ждем Вас снова!');
                    } else{
                        return false;
                    }
                    break;
                case this.entranceBasket:
                    var message = this.basketFormation();
                    if(message == false){
                        alert('Корзина пуста!');
                        return false;
                    } else{
                        message = +prompt(message);
                        this.storeManagement(control, message);
                    }
                    break;    
                case this.entranceScore:
                    return false; 
                case (1 <= this.quantityCatalog):
                    alert('Введите количество!')
                    return false
                    //this.addCart(products, key, quantity);
                    //break; 
                case this.quantityBasket:
                    break;    
            }
        }
    },
    scoreWindow: function(products){
        if(this.catalog == false){
            this.catalogFormation(products);
        }
        var control = 'score';
        var key = +prompt(this.catalog);
        var key = this.storeManagement(control, key);
        if(key == false){
            this.scoreWindow(products);
        }

    }
}
score.scoreWindow(products);
