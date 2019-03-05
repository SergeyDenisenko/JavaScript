window.onload = scriptLaunch;

var products = [
    {
        name: 'Холодильник',
        price: 69990,
        img: false,
        description: false
    },
    {
        name: 'Эл.Плита',
        price: 11690,
        img: false,
        description: false
    },
    {
        name: 'Смартфон',
        price: 13990,
        img: false,
        description: false
    },
    {
        name: 'microSD 32GB',
        price: 1190,
        img: false,
        description: false
    },
    {
        name: 'Защитное стекло',
        price: 49,
        img: false,
        description: false
    },
    {
        name: 'Чехол',
        price: 490,
        img: false,
        description: false
    }
];

var scoreSettings = {
    catalogIdName: 'container',
    basketID: false,
    basket: false,
    click: false,
    pressedButton: false,
    catalogId: function(){
        var catalogObj = document.getElementById(this.catalogIdName);
        score.id = catalogObj;
    },
};

var score = {
    catalogForm: function(products){
        scoreSettings.catalogId();
        if(products.length > 0){
            for(var i = 0; i < products.length; i++){
                var $cardProduct = document.createElement('div');
                $cardProduct.className = 'card';
                var $cardName = document.createElement('div');
                $cardName.className = 'card__name';
                $cardName.innerText = products[i].name;

                var $cardImgDiv = document.createElement('div');
                $cardImgDiv.className = 'card__img';
                var $cardImg = document.createElement('img');
                $cardImg.setAttribute('alt', 'Картинка отсутствует');
                $cardImgDiv.appendChild($cardImg);

                var $description = document.createElement('div');
                $description.className = 'card__description'; 

                var $cardPrice = document.createElement('div');
                $cardPrice.className = 'card__price';
                $cardPrice.innerText = 'Цена: ';
                var $cardPriceSpan = document.createElement('span');
                $cardPriceSpan.innerText = products[i].price;
                $cardPrice.appendChild($cardPriceSpan);

                var $cardQuantity = document.createElement('div');
                $cardQuantity.className = 'card__quantity';
                $cardQuantity.innerText = 'Количество: ';
                var $inputQuantity = document.createElement('input');
                $inputQuantity.id = 'products-' + (i + 1);
                $inputQuantity.setAttribute('value', '1');
                $cardQuantity.appendChild($inputQuantity);

                var $button = document.createElement('button');
                $button.className = 'card__button';
                $button.innerText = 'Купить';
                $button.setAttribute('for', 'products-' + (i + 1));
                products[i].id = 'products-' + (i + 1);

                $cardProduct.appendChild($cardName);
                $cardProduct.appendChild($cardImgDiv);
                $cardProduct.appendChild($description);
                $cardProduct.appendChild($cardPrice);
                $cardProduct.appendChild($cardQuantity);
                $cardProduct.appendChild($button);

                score.id.appendChild($cardProduct);
            } 
        }else{
            score.id.innerText = 'Товары отсутствуют.';
        } 
    },
}

function scriptLaunch(){
    score.catalogForm(products);
    score.id.addEventListener('click',basket.addСart);
    basket.window();
}

var basket = {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
    addСart: function(event){
        if(event.target.tagName == 'BUTTON'){
            basket.click = event.target.getAttribute('for')
            for(var i = 0; i < products.length; i++){
                if(basket.click == products[i].id){
                    var quantity = +document.getElementById(basket.click).value;
                    basket.products.push(products[i]);
                    var id = basket.products.length - 1;
                    basket.products[id].quantity = quantity;
                    basket.products[id].sum = basket.products[id].quantity * basket.products[id].price;
                    basket.calc();
                    basket.window();
                }
            }
        }
    },
    calc: function(){
        basket.totalQuantity = 0;
        basket.totalAmount = 0;
        for(var i = 0; i < basket.products.length; i++){   
            basket.totalQuantity += basket.products[i].quantity;
            basket.totalAmount += basket.products[i].sum;
        }
    },
    window: function(){
        var $basket = document.getElementById('basket');
        $basket.innerText = '';
        if(basket.products.length == 0){
            $basket.innerText = 'Корзина пуста.';
        }else{
            var $basketName = document.createElement('div');
            $basketName.className = 'basket__name';
            $basketName.innerText = 'Корзина';

            var $basketWindowQuantity = document.createElement('div');
            $basketWindowQuantity.className = 'basket__total-quantity';
            $basketWindowQuantity.innerText = 'Всего товаров: ' + basket.totalQuantity;

            var $basketWindowAmount = document.createElement('div');
            $basketWindowAmount.className = 'totalAmount';
            $basketWindowAmount.innerText = 'Общая сумма: ' + basket.totalAmount;

            var $drop = document.createElement('div');
            $drop.className = 'basket__drop-down';

            for(var i = 0; i < basket.products.length; i++){
                var $dropCard = document.createElement('div');
                $dropCard.className = 'drop-down__card';
    
                var $dropName = document.createElement('div');
                $dropName.cassName = 'drop-down__name';
                $dropName.innerText = basket.products[i].name;
    
                var $dropQuantity = document.createElement('div');
                $dropQuantity.className = 'drop-down__quantity';
                $dropQuantity.innerText = 'Количество: ' + basket.products[i].quantity;
    
                var $dropAmount = document.createElement('div');
                $dropAmount.className = 'drop-down__amount';
                $dropAmount.innerText = 'Сумма: ' + basket.products[i].sum;
    
                $dropCard.appendChild($dropName);
                $dropCard.appendChild($dropQuantity);
                $dropCard.appendChild($dropAmount);
    
                $drop.appendChild($dropCard); 
            } 
            $basket.appendChild($basketName);
            $basket.appendChild($basketWindowQuantity);
            $basket.appendChild($basketWindowAmount);
            $basket.appendChild($drop);
        }
    }
}
