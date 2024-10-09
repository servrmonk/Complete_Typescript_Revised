const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

// and the alternative is interface : allow u to destructure of an oobject
interface ResultObj { val: number; timestamp: Date }

function ad(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

// function printResult(resultObj: Result) { u can use alias or interface
function printResult(resultObj: ResultObj) {
  console.log(resultObj.val);
}

const numResult: number[] = [];
const textResult: string[] = [];

buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = ad(+num1, +num2);
  numResult.push(result as number);

  const stringResult = ad(num1, num2);
  console.log(stringResult);
  textResult.push(stringResult as string);

  printResult({ val: result as number, timestamp: new Date() });
  console.log(numResult, textResult);
});
