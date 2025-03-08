// Task 2: Print Odd Multiplication Tables (1 to 20)

for (let n = 1; n <= 20; n += 2) {
  // Odd nbers from 1 to 20
  console.log(`\nMultiplication Table for ${n}:`);
  for (let i = 1; i <= 10; i++) {
    // Multiples from 1 to 10
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
