/***********************************************************************
Write a recursive function called `sum` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!
Examples:
sum([1, 2, 3]); // => 6
sum([0, 1, -3]); // => -2
sum([1, 2, 3, 4, 5]); //=> 15
***********************************************************************/

function sum(arr) {
    //!START SILENT FT PT
    if (arr.length === 0) {
      return 0;
    }
    //!!END
    if (arr.size === 0) {
      return 0;
    }

    return arr[0] + sum(arr.slice(1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = sum;
} catch {
    module.exports = null;
}
