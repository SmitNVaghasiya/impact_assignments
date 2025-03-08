// Task 5: Write Code for Electricity Bill Calculation
// The electricity bill is calculated based on units consumed.

function calculateBill(units) {
  let rate;
  if (units <= 100) {
    rate = 2;
  } else if (units <= 200) {
    rate = 4;
  } else {
    rate = 6;
  }
  return units * rate;
}

// Example usage
let unitsConsumed = 515;
console.log("Electricity Bill:", calculateBill(unitsConsumed) + " INR");
