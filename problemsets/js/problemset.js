function getRelationship(x, y) {
  var xIsNumber = false;
  var yIsNumber = false;
  var result;

  // See if both arguments are a number
  if (typeof x === "number") {
    xIsNumber = true;
  }
  if (typeof y === "number") {
    yIsNumber = true;
  }

  // Compare the numbers
  if (xIsNumber && yIsNumber) {
    if (x > y) {
      result = x + " > " + y;
    } else if (x === y) {
      result = x + " = " + y;
    } else {
      result = x + " < " + y;
    }
  } else if (xIsNumber && !yIsNumber) {
    result = "Can't compare relationships, because " + y + " is not a number.";
    console.log(x);
    console.log(y);
  } else if (!xIsNumber && yIsNumber) {
    result = "Can't compare relationships, because " + x + " is not a number.";
    console.log(x);
    console.log(y);
  } else if (!xIsNumber && !yIsNumber) {
    result = "Can't compare relationships, because " + x + " and " + y + " are not numbers.";
  }

  // What happens when one is not a number
  return result;
}

// // Try logging these functions to test your code!
// console.log(getRelationship(1,4));
// console.log(getRelationship(1,1));
// console.log(getRelationship(3,1));
// console.log(getRelationship("that",2));
// console.log(getRelationship("this"," something else"));
// console.log(getRelationship(3));
// console.log(getRelationship("hi"));
// console.log(getRelationship(NaN));
// console.log(getRelationship(NaN, undefined));

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var normalizedMoonWalkers = [];
    names.forEach(function(name) {
      var normalizedName = name.split(' ');
      normalizedMoonWalkers.push(normalizedName[1] + ', ' + normalizedName[0]);
    });

    return normalizedMoonWalkers.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));