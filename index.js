// Question 1
function reverseNum(num) {
  return +(num + "").split("").reverse().join("");
}

//Question 2
function isPalindrome(str) {
  let myStr = str.split(" ").join(""); //remove spaces
  return myStr === myStr.split("").reverse().join("");
}

//Question 3
function allCombinations(str) {
  const output = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      output.push(str.substring(i, j + 1));
    }
  }
  return output;
}
// console.log(allCombinations("dog"));

//Question 4
function alphabeticOrderStr(str) {
  //using bubble sort
  let strArr = str.split("");
  for (let i = 0; i < strArr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < strArr.length - i - 1; j++) {
      if (strArr[j] > strArr[j + 1]) {
        swapped = true;
        let temp = strArr[j];
        strArr[j] = strArr[j + 1];
        strArr[j + 1] = temp;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return strArr.join("");
}
// console.log(alphabeticOrderStr("webmaster"));

//question 5
function upperCaseEachWord(str) {
  let wordArray = str.split(" ");
  wordArray = wordArray.map((word) => {
    let wordArr = word.split("");
    let firstLetter = wordArr.shift();
    let result = wordArr.join("");
    firstLetter = firstLetter.toUpperCase();
    return firstLetter + result;
  });
  return wordArray.join(" ");
}
//console.log(upperCaseEachWord("the quick brown fox"));

//question 6
function longestWord(str) {
  let wordArr = str.split(" ");
  let longest = wordArr[0];
  for (let i = 1; i < wordArr.length; i++) {
    if (longest.length < wordArr[i].length) longest = wordArr[i];
  }
  return longest;
}
// console.log(longestWord("Web Development Tutorial"));

//question 7
function numOfVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsFromStr = str.split("").filter((letter) => {
    return vowels.includes(letter);
  });
  return vowelsFromStr.length;
}
// console.log(numOfVowels("The quick brown fox"));

//question 8
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// console.log(isPrime(23));

//question 9
function getType(args) {
  return typeof args;
}
// console.log(getType("string"));
// console.log(getType(2));
// console.log(getType(true));

//question 10
function generateIdentityMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) row.push(1);
      else row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}
// console.log(generateIdentityMatrix(3));

//question 11
function findSecondLowestAndGreatest(arr) {
  let lowest;
  let highest;
  let secondLowest;
  let secondHighest;
  for (const ele of arr) {
    if (lowest === undefined || ele < lowest) {
      lowest = ele;
    }
    if (highest === undefined || ele > highest) {
      highest = ele;
    }
  }

  for (const ele of arr) {
    if (ele != lowest && (secondLowest === undefined || ele < secondLowest)) {
      secondLowest = ele;
    }
    if (
      ele != highest &&
      (secondHighest === undefined || ele > secondHighest)
    ) {
      secondHighest = ele;
    }
  }
  return [secondLowest, secondHighest];
}
// console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5]));

//question 12
function isPerfectNumber(num) {
  let divisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) divisors.push(i);
  }

  let sum = divisors.reduce((prev, curr) => prev + curr);
  return num === sum;
}
// console.log(isPerfectNumber(8128));

//question 13
function getFactor(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }

  return factors;
}
// console.log(getFactor(12));

//question 14
function amountToCoin(num, coins) {
  let amount = num;
  const myCoins = [];
  let index = 0;
  while (amount > 0 && index < coins.length) {
    if (amount - coins[index] >= 0) {
      amount -= coins[index];
      myCoins.push(coins[index]);
    } else index++;
  }
  return myCoins;
}
// console.log(amountToCoin(46, [25, 10, 5, 2, 1]));

//question 15
function compute(b, n) {
  return b ** n;
}
// console.log(compute(2, 3));

//question 16
function extractuniquechars(str) {
  const uniqueChars = {};
  let outputStr = "";
  for (const c of str) {
    if (!uniqueChars[c]) {
      uniqueChars[c] = true;
      outputStr += c;
    }
  }
  return outputStr;
}
// console.log(
//   extractuniquechars("thequickbrownfoxjumpsoverthelazydog") ===
//     "thequickbrownfxjmpsvlazydg"
// );

//question 17
function countLetters(str) {
  const letterCount = {};
  let myStr = str.toLowerCase().split(" ").join("");
  for (const c of myStr) {
    if (letterCount[c] === undefined) letterCount[c] = 1;
    else letterCount[c]++;
  }
  return letterCount;
}
// console.log(countLetters("I TOOK the book"));

//question 18 (assuming arr is sorted)
function binarySearch(value, arr, left, right) {
  if (left > right) return null;

  let mid = Math.floor((left + right) / 2);
  //finds index of value
  if (arr[mid] === value) return mid;
  else if (value < arr[mid]) return binarySearch(value, arr, left, mid - 1);
  else if (value > arr[mid]) return binarySearch(value, arr, mid + 1, right);
}
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(binarySearch(4, arr, 0, arr.length - 1) === 3);

//question 19
function largerThanNum(num, arr) {
  return arr.filter((ele) => {
    return ele > num;
  });
}
// console.log(largerThanNum(3, [1, 2, 3, 4, 5, 6]));

//question 20
function generateRandomString(length) {
  const charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let output = "";
  for (let i = 0; i < length; i++) {
    output += charList[Math.floor(Math.random() * charList.length)];
  }
  return output;
}
// console.log(generateRandomString(10));

//question 21
function generateAllPossibleSubsets(subsetLength, arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - (subsetLength - 1); j++) {
      let subset = [];
      subset.push(arr[i]);
      for (let k = 1; k < subsetLength; k++) {
        subset.push(arr[j + k]);
      }
      output.push(subset);
    }
  }
  return output;
}
// console.log(generateAllPossibleSubsets(2, [1, 2, 3]));
// console.log(generateAllPossibleSubsets(2, [1, 2, 3, 4]));

//question 22
function letterCount(letter, str) {
  let count = 0;
  for (const c of str) {
    if (c === letter) count++;
  }
  return count;
}
// console.log(letterCount("o", "mircosoft.com"));

//question 23
function firstNotRepeatedChar(str) {
  const charCounts = {};
  for (const c of str) {
    if (charCounts[c] === undefined) charCounts[c] = 1;
    else charCounts[c] += 1;
  }
  for (const c of str) {
    if (charCounts[c] === 1) return c;
  }
  return null;
}
// console.log(firstNotRepeatedChar("abacddbec") === "e");

//question 24
function bubblesort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(
//   bubblesort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );

//question 25
function longestCountryName(countries) {
  let longest = countries[0];
  for (const country of countries) {
    if (longest.length < country.length) longest = country;
  }
  return longest;
}
// console.log(
//   longestCountryName(["Australia", "Germany", "United States of America"])
// );

//question 26
function longestStringOfNotRepeatingChars(str) {
  const charCounts = {};
  let output = "";
  let tempStr = "";
  let prevLetter = "";
  for (const c of str) {
    if (charCounts[c] === undefined) charCounts[c] = 1;
    else charCounts[c] += 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (charCounts[str[i]] === 1) {
      tempStr = prevLetter === str[i - 1] ? tempStr + str[i] : str[i];
      prevLetter = str[i];
    }
    if (output.length < tempStr.length) output = tempStr;
    // console.log(tempStr);
  }
  return output;
}
// console.log(longestStringOfNotRepeatingChars("zzabc-_-edfgzz") === "edfg");

//question 27
function findLongestPalindrome(str) {
  let longestPalindrome = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length - i; j++) {
      let substr = str.substring(j, str.length - i);
      if (isPalindrome(substr) && substr.length > longestPalindrome.length) {
        longestPalindrome = substr;
      }
      // console.log(longestPalindrome);
    }
  }
  return longestPalindrome;
}
// console.log(findLongestPalindrome("zztacocat__nun-"));

//question 28
function myMap(cb, arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    myArr.push(cb(arr[i]));
  }
  return myArr;
}
// console.log(
//   myMap(
//     (ele) => {
//       return 2 * ele;
//     },
//     [1, 2, 3]
//   )
// );

//question 29
function getFunctionName(cb) {
  return cb.name;
}

// console.log(getFunctionName(longestWord));
