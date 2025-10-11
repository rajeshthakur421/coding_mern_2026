function memoizeFactorial() {
    let cache = {}; // Cache object to store computed results
  
    return function factorial(n) {
      if (n in cache) {
        return cache[n]; // Return cached result if available
      } else {
        if (n <= 1) {
          return 1; // Base case: factorial of 0 or 1 is 1
        } else {
          // Compute factorial and store in cache
          cache[n] = n * factorial(n - 1);
          return cache[n];
        }
      }
    };
  }
  
  const factorial = memoizeFactorial();
  
  console.log(factorial(5)); // Output: 120
  console.log(factorial(3)); // Output: 6
  console.log(factorial(5)); // Output: 120 (result fetched from cache)
  