var kilometres = prompt('Inserire quanti km dovranno essere percorsi');
if (isNaN(kilometres) || kilometres <= 0) {
    alert('Inserire un numero di km valido');
    window.location.reload();
} else {
    var userAge = prompt('Inserire l\'età');
    if (isNaN(userAge) || userAge <= 0) {
        alert('Inserire un\'età valida');
        window.location.reload();
    }
}

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
