console.log("hi from calc");
const [num1, operator, num2] = process.argv.slice(2);
let result;

switch (operator) {
    case '+':
         result = parseInt(num1) + parseInt(num2);
        break;
    case '-':
         result = parseInt(num1) - parseInt(num2);
        break;
    case '*':
         result = parseInt(num1) * parseInt(num2);
        break;
    case '/':
         result = parseInt(num1) / parseInt(num2);
         break;
        }
        
        console.log("result", result);