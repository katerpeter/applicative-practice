/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  var counts = {}, highest = 0, result;
  var asteroidDiscoveryYears = data.asteroids.map((asteroid) => asteroid.discoveryYear);
  asteroidDiscoveryYears.forEach(element => {
    if (counts[element]){
      counts[element] += 1;
    } else {
      counts[element] = 1;
    }
  });  
  Object.entries(counts).forEach(([year, count]) => {
    if (count > highest){
      highest = count;
      result = year;
    }
  });
  return Number(result);
};


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
