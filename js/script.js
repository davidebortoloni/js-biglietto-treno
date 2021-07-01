var kilometres = prompt('Inserisca quanti km dovranno essere percorsi');
var userAge = prompt('Inserisca la sua età');
var priceConstant = 0.21;

var price = kilometres * priceConstant;

if (userAge < 18) {
    price = price - (price / 100 * 20);
    price = Math.round(price * 100) / 100;
}
if (userAge >= 65) {
    price = price - (price / 100 * 40);
    price = Math.round(price * 100) / 100;
}

messageId = document.getElementById('ticket-price');
messageId.innerText = "Ecco il costo del suo biglietto: " + price + "€";
