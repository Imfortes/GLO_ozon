import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import addCart from './modules/addCart';
import actionPage from './modules/actionPage';

(async function () {
    const db = await getData();
    renderCards(db);
    renderCatalog();
    toggleCheckbox();
    toggleCart();
    addCart();
    actionPage();
}());




// checkbox

// checkbox.forEach((elem) => {
//     elem.addEventListener('change',function (){
//         if (this.checked){
//             this.nextElementSibling.classList.add('checked');
//         }
//         else {
//             this.nextElementSibling.classList.remove('checked');
//         }
//     });
// });

// end checkbox


// Корзина


// end корзина


// работа с корзиной


// end работа с корзиной


// фильтр акции, фильтр цена, фильтр по чек боксу


// end фильтр акции


// получение данных с бд


// выводим карточки товара


// end получение данных с бд


// фильтр по акции-чекбоксу

// фильтр по цене
// function filterPrice() {
//     cards.forEach((card) => {
//         const cardPrice = card.querySelector('.card-price');
//         const price = parseFloat(cardPrice.textContent);
//         console.log(cardPrice);
//         console.log(price);
//         console.log(min.textContent);
//         console.log(max.textContent);
//
//         if ((min.value && price < min.value) || (price > max.value && max.value)){
//             card.parentNode.style.display = 'none';
//         } else {
//             goods.appendChild(card.parentNode);
//         }
//     })
// }



