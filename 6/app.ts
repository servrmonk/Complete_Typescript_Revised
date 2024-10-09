const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;
function ad(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

// function printResult(resultObj:any){ // or u can declare object type instead of any
function printResult(resultObj: { val: number; timestamp: Date }) {
  //date object is reffered to js
  console.log(resultObj.val);
}

//uses of object here
/*buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = ad(+num1, +num2);
  console.log(result);

  const stringResult = ad(num1, num2);
  console.log(stringResult);

  printResult({ val: result as number, timestamp: new Date() }); //val doesnt know that the result is number so i casted it as a number
});
*/

//sometimes we also use array

const numResult:number[] = []; //number[] this means that the type of the data is  number and full of the number
const textResult:string[] = [];

buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = ad(+num1, +num2);
  numResult.push(result as number);

  const stringResult = ad(num1, num2);
  console.log(stringResult);
  textResult.push(stringResult as string);

  printResult({ val: result as number, timestamp: new Date() }); //val doesnt know that the result is number so i casted it as a number
  console.log(numResult, textResult);//if u don't pass the types of the array while declareing so it will give u error that the type of numresult is any
});
