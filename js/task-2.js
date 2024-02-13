/*Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня.
Функція очікує один параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, 
у цей день.*/

function calcAverageCalories(days) {
    const week = [];
    for (day of days) {
        week.push(day.calories);
    }
    let sum = 0;
    for (let i = 0; i < week.length; i += 1){
        sum += week[i];
    }
    let average = sum / 7;
    return average;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0