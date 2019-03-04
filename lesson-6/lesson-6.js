window.onload = scriptLaunch;

var basket = Array;
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

function scriptLaunch(){
    console.log('Загрузка скрипта завершена');
    container.addEventListener('load', formCard(products));
    container.addEventListener('click', handlerButton);
    handlerButton(event, products);
}

function formCard(products){
    var $container = document.getElementById('container');
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

                $container.appendChild($cardProduct)
        } 
    }else{
        $container.innerText = 'Товары отсутствуют.';
    } 
}

/*
function console1(event){
    console.log(event.target.tagName);
    console.log(document.getElementsByClassName('card__quantity-input'));
}*/

function handlerButton(event, products){
    console.log(event.target.tagName);
    console.log(products);
    if(event.target.tagName == 'BUTTON'){
        console.log('Кнопка нажата');
        console.log(event.target.getAttribute('for'));
        var productIdF = event.target.getAttribute('for');
        return productIdF;

    }else{
        console.log('Ошибка нажатия');
    }
}
/*
function basketTest(){
    var productId = event.target.getAttribute('for');
        for(var i = 0; i < products.length; i++){
            if(products[i].id == productId){
                console.log(products[i]);
            }
        }
}*/