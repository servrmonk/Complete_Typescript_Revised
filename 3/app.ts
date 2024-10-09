
const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector("button");


function ad(num1: number, num2: number) {
  return num1 + num2;
}

ad(1, 4);


buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value; //not every html element has a value property input element has value properties paragraph don't have so we need to convince typescript that what we get access to herewill be an input so we can use typecasting  using as keyword we use in input element because document.gid don't know that they are input tag but query selector know . and after HTMLInputElement this the value error will be gone
  const num2 = num2Element.value;
  const result = ad(+num1, +num2); // value always returns a string check u take the num1element.value so .value always takes string or expect string but add fun except number. we are forced to write the cleaner code 

  console.log(result)
  return result;
});
console.log(ad(6, 6));