window.onload = scriptLaunch;

var settings = {
    templateCatalogNameId: 'template',          // ID блока с шаблонами
    catalogId: 'contayner-products',            // ID Каталога товара
    basketId: 'basket',                         // ID Корзины товаров 
    catalogProductName: '.product-name',        // Селектор Названия товара в карточке товара
    catalogProductImg: '.product-img',          // Селектор Изображения товара в карточке товара
    catalogProductDescription: '.product-description',           // Class Описания товара в карточке товара
    catalogProductPrice: '.product-price',      // Class Цены товара в карточке товара
    basketWindowQuantity: '#total-quantity',    // Селектор общего количества товаров в корзине
    basketWindiwAmount: '#total-amount',        // Селектор общей суммы товаров в корзине
};

var score = {
    productIdClick: false,
    basket: [],
    products: false,
    loading: function(products){
        score.templateCatalog = document.getElementById(settings.templateCatalogNameId).children[0].cloneNode(true);
        score.basketEmpty = document.getElementById(settings.templateCatalogNameId).children[1].cloneNode(true);
        score.shoppingBasket = document.getElementById(settings.templateCatalogNameId).children[2].cloneNode(true);
        score.basketDropDown = document.getElementById(settings.templateCatalogNameId).children[3].cloneNode(true);
        score.bascketDropDownCard = document.getElementById(settings.templateCatalogNameId).children[4].cloneNode(true);
        score.catalog = document.getElementById(settings.catalogId);
        score.windowBasket = document.getElementById(settings.basketId);
        score.products = products;
        score.formCatalog();
        score.formBasket();
        score.catalog.addEventListener('click', score.handlerClickAddCart);
        score.windowBasket.addEventListener('click', score.handlerClickBasket);
    },
    formCatalog: function(){
        for(var i = 0; i < score.products.length; i++){
            score.products[i].id = i;
            var $template = score.templateCatalog.cloneNode(true);
            $template.querySelector(settings.catalogProductName).textContent = score.products[i].name;
            $template.querySelector(settings.catalogProductImg).style.backgroundImage = 'url(\"' + score.products[i].img + '\")';
            //$template.querySelector(settings.catalogProductDescription).textContent = score.products[i].description;
            $template.querySelector(settings.catalogProductPrice).textContent = score.products[i].price;
            $template.getElementsByTagName('input')[0].setAttribute('value', i);
            score.catalog.appendChild($template);
        }
    },
    formBasket: function(){
        var control = score.basketСheck();
        score.windowBasket.textContent = '';
        score.basketDropDown.textContent = '';
        if(control === true){               // Корзина пуста   
            score.windowBasket.appendChild(score.basketEmpty);
        }else{
            score.shoppingBasket.querySelector(settings.basketWindowQuantity).textContent = score.basketQuantity;
            score.shoppingBasket.querySelector(settings.basketWindiwAmount).textContent = score.basketSum;
            score.shoppingBasket.getElementsByTagName('button')[0].setAttribute('name', 'clear');
            score.windowBasket.appendChild(score.shoppingBasket);
            for(var i = 0; i < score.basket.length; i++){
                var $template = score.bascketDropDownCard.cloneNode(true);
                $template.querySelector('.drop-down__img').style.backgroundImage = 'url(\"' + score.basket[i].img + '\")';
                $template.querySelector('.drop-down__name').textContent = score.basket[i].name;
                $template.querySelector('#drop-down__price').textContent = score.basket[i].price;
                $template.getElementsByTagName('button')[0].setAttribute('value', i);
                $template.getElementsByTagName('button')[0].setAttribute('name', 'reduce');
                $template.querySelector('#drop-down__quantity').textContent = score.basket[i].quantity;
                $template.getElementsByTagName('button')[1].setAttribute('value', i);
                $template.getElementsByTagName('button')[1].setAttribute('name', 'toAdd');
                $template.querySelector('#drop-down__sum').textContent = score.basket[i].sum;
                $template.getElementsByTagName('button')[2].setAttribute('value', i);
                $template.getElementsByTagName('button')[2].setAttribute('name', 'remove');
                score.basketDropDown.appendChild($template);
                score.windowBasket.appendChild(score.basketDropDown);
            }   
        }
    },
    basketСheck: function(){
        return score.basket.length > 0 ? false : true;
    },
    shoppingСartСheck: function(){
        return score.products[score.productIdClick].basketKey != 1 ? false : true;
    },
    addToCart(){
        var control = score.shoppingСartСheck();
        if(control == true){                //Товар уже добавлен в корзину.
            score.products[score.productIdClick].quantity += 1; 
            score.products[score.productIdClick].sum = score.products[score.productIdClick].price * score.products[score.productIdClick].quantity;
        }else{                              //Добавление товара в корзину.
            score.basket.push(score.products[score.productIdClick]);
            var basketId = score.basket.length - 1;
            score.basket[basketId].basketId = basketId;
            score.basket[basketId].quantity += 1;
            score.basket[basketId].basketKey = 1;
            score.basket[basketId].sum = score.basket[basketId].price * score.basket[basketId].quantity;
        }
        score.basketCalc();
    },
    basketCalc: function(){
        score.basketQuantity = 0;
        score.basketSum = 0;
        for(var i = 0; i < score.basket.length; i++){
            score.basketQuantity += score.basket[i].quantity
            score.basketSum += score.basket[i].sum;
        }
        score.formBasket();
    },
    handlerClickAddCart: function(event){
        if(event.target.tagName === 'BUTTON'){ 
            score.productIdClick = +event.target.previousSibling.previousSibling.value;
            score.addToCart();
        }
    },
    handlerClickBasket: function(event){
        if(event.target.tagName === 'BUTTON'){
            switch(event.target.name){
                case 'reduce':
                    if(score.basket[event.target.value].quantity > 1){
                        score.basket[event.target.value].quantity -= 1;
                        score.basket[event.target.value].sum = score.basket[event.target.value].quantity * score.basket[event.target.value].price;
                        score.basketCalc();
                    };
                    break;
                case 'toAdd':
                    score.basket[event.target.value].quantity += 1;
                    score.basket[event.target.value].sum = score.basket[event.target.value].quantity * score.basket[event.target.value].price;
                    score.basketCalc();
                    break;
                case 'remove':
                    score.basket[event.target.value].basketKey = false;
                    score.basket[event.target.value].quantity = 0;
                    score.basket.splice([event.target.value], 1);    
                    score.basketCalc();
                    break;
                case 'clear':
                    for(var i = 0; i < score.basket.length; i++){
                        score.basket[i].basketKey = false;
                        score.basket[i].quantity = 0;
                    }
                    score.basket = [];
                    score.basketCalc();
                    break;
            }
        }
    }
}

function scriptLaunch(){
    score.loading(products);
}