var $board = document.createElement('div');
$board.className = 'board';

for(var i = 0, $cell; i < 8; i++){
    for(var i2 = 0; i2 < 8; i2++){
        $cell = document.createElement('div');
        $cell.className = 'cell ';
        if(i % 2 == 0){
            $cell.className += 'line1';
        }else{
            $cell.className += 'line2';
        }
        $board.appendChild($cell);
    }
    
}

var $exercise1 = document.getElementById('exercise-1');
$exercise1.appendChild($board);

// Задание 2.
var products = [
    {
        name: 'Смартфон',
        price: 5990,
        quantity: 1,
        productsId: '0'
    },
    {
        name: 'Планшет',
        price: 11990,
        quantity: 1,
        productsId: '1'
    },
    {
        name: 'microSD 16Gb',
        price: 590,
        quantity: 2,
        productsId: '2'
    },
    {
        name: 'АКБ 6000 mAh',
        price: 2000,
        quantity: 2,
        productsId: '3'
    }
];
/*
function totalBasket(products){
    var $exercise2 = document.getElementById('exercise-2');
    var $basket;
    if(products.lentgh > 0){
        for(var i = 0; i < products.lentgh; i++){
            products[i].price * products[i].quantity;
        }
    } else(
        $basket = document.createElement('div');
        $basket.className = 'empty-basket';
        return $basket;
    )
}
*/