// task-2.js

// Оголошення функції makeArray, яка приймає параметри firstArray, secondArray, maxLength
function makeArray(firstArray, secondArray, maxLength) {
    // Створення нового масиву, що складається з елементів firstArray та secondArray
    const newArray = firstArray.concat(secondArray);
    
    // Перевірка довжини нового масиву та повернення відповідного результату
    return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
  }
  
  // Перевірка роботи функції
  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
  console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
  console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
  