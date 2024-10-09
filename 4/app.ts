const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!; //button element might doesn't present so ifcheck or exlamation mark ! means the statement in frontof this could theroritically be null or isn't

function ad(num1: any, num2: number) {
  return num1 + num2;
}

ad(1, 4);

buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = ad(+num1, +num2);
  console.log(result);
  return result;
});
console.log(ad(6, 6));
