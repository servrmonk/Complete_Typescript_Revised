const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

interface ResultObj {
  val: number;
  timestamp: Date;
}

function ad(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

function printResult(resultObj: ResultObj) {
  console.log(resultObj.val);
}

const numResult: Array<Number> = []; //this said that the numResult is the result fulll of numbers . another example of generic type is Promise
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

// for generic type creating the promise
const myPromise = new Promise<string>((resolve, reject) => {
  //by default this code won't work here u have to add a library to tsconfig to basically tell tsconfig which kind of features ts config supports
  setTimeout(() => {
    resolve("It worked!");
  }, 1000);
});

// myPromise.then((result) => console.log("Promise result", result));
myPromise.then((result) => {
  console.log(result.split("w"));
});
