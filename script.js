"use strict";
let redirectLink = ``  // Глобальна змінна для збереження посилання
document.getElementById("enterLinkBtn").addEventListener(`click`, function () {
    let link = prompt("Будь ласка, введіть посилання:");
    if (link && link.trim() !== "") {
        redirectLink = link;
    }
})
document.getElementById("goToTheLinkBtn").addEventListener(`click`, function () {
    if (redirectLink) {
        window.location.href = redirectLink;  // властивість об'єкта window, яка містить URL поточної сторінки
    } else {
        alert("Спочатку введіть посилання");
    }
});