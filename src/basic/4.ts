// Функція showMessage приймає аргумент message типу string і нічого не повертає 
function showMessage(message: string): void {
    console.log(message);
  }
  
  // Функція calc приймає два числових аргументи і повертає число
  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  // Функція customError не приймає аргументів і ніколи не повертає значення 
  function customError(): never {
    throw new Error('Error');
  }

  showMessage('Calculator');
console.log(`Calculation result: ${calc(5, 10)}`);
try {
    customError();
  } catch (error) {
    console.error('Caught an error:', error);
  }