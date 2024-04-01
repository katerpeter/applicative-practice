import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  var planetNames = data.planets
  .filter(function(lessThan10Moons){
    if(lessThan10Moons.moonsCount){
      return lessThan10Moons.moonsCount < 10;
    } else {
      return lessThan10Moons;
    }
  })
  .map(function(justNames){
    return justNames.name;
  });
  return planetNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
