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

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship(3,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

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




/////////////// LAST CHALLENGE /////////////////
// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
  // Your code goes here!
  var ruleListArray = [];
  for (var rule in psinsights.formattedResults.ruleResults) {
    if (psinsights.formattedResults.ruleResults.hasOwnProperty(rule)) {
      ruleListArray.push(psinsights.formattedResults.ruleResults[rule].localizedRuleName);
    }
  }
  return ruleListArray;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
  // Your code goes here!
  var totalBytesCalc = 0;
  for (var pageStat in psinsights.pageStats) {
    if (psinsights.pageStats.hasOwnProperty(pageStat)) {
      totalBytesCalc = totalBytesCalc + parseInt(psinsights.pageStats[pageStat], 10);
    }
  }
  return totalBytesCalc;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));