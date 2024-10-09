"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button"); //button element might doesn't present so ifcheck or exlamation mark ! means the statement in frontof this could theroritically be null or isn't
function ad(num1, num2) {
    return num1 + num2;
}
ad(1, 4);
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = ad(+num1, +num2);
    console.log(result);
    return result;
});
console.log(ad(6, 6));
