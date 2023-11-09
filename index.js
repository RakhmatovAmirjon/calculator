let result;
let operator;

let name 

do {
    name = prompt("Как вас зовут?")
} while(name !== "далер")


do {
  let num1 = +prompt("Введите первое число:");
  let num2 = +prompt(`Введите второе число:`);  
  operation = prompt(`Введите операцию (+, -, *, /) или же напишите слово "стоп" для прекращения операции`);

  if (operation === "+") {
      result = num1 + num2;
  } else if (operation === "-") {
      result = num1 - num2;
  } else if (operation === "*") {
      result = num1 * num2;
  } else if (operation === "/") {
      result = num1 / num2;
  } else if (operation === "стоп") {
      break;
  } else {
      alert("Вы что то ввели неправильно");
      continue;
  }
  alert(`Результат: ${result}`);
} while (operation !== "стоп");