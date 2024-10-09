const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;
function ad(num1: number | string, num2: number | string) {
  // return num1 + num2; //strange error
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

ad(1, 4);

buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = ad(+num1, +num2);
  console.log(result);

  const stringResult = ad(num1, num2);
  console.log(stringResult);
});
console.log(ad(6, 6));
