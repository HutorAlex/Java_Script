// bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const priceContainer = document.getElementById('priceContainer');

let lastUpdated = localStorage.getItem('lastUpdated');
let currentPrice = parseInt(localStorage.getItem('currentPrice')) || 100;

const now = new Date().getTime();

if (!lastUpdated || now - lastUpdated > 10000) {
    currentPrice += 10;
    localStorage.setItem('currentPrice', currentPrice);
    localStorage.setItem('lastUpdated', now);
}

priceContainer.textContent = `${currentPrice}грн`;