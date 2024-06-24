// task-3.js

// Оголошення функції filterArray, яка приймає параметри numbers, value
function filterArray(numbers, value) {
    // Створення порожнього масиву для зберігання чисел, більших за value
    const filteredNumbers = [];
    
    // Перебір кожного числа у масиві numbers
    for (const number of numbers) {
      // Додавання числа до filteredNumbers, якщо воно більше за value
      if (number > value) {
        filteredNumbers.push(number);
      }
    }
    
    // Повернення нового масиву
    return filteredNumbers;
  }
  
  // Перевірка роботи функції
  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
  