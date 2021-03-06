/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
    
   
    problem3:this function[Bigo(1)]because[the out just true or false we didn't change anything in output]
*/

/* */
// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table. knowing that the key never get very large

/*
 Complexity:Problem 1:this function [o(1)]because [key.length] means [it iterate in not large items]
 */

var retrieve = function(key) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash = (hash + Math.pow(i, hash)) % array.length;
  }
  return array[hash];
};


// Problem 2: sortedArrayContainsItem with regard to the length of the passed-in array

/*
 Complexity:Problem 2:this function [o(log(n))]because [(array.length / 2)] means [it iterate in half item not all the array and ignore the  other element]
 */


var sortedArrayContainsItem = function(array, item) {
  var center = Math.floor(array.length / 2);
  if (array[center] === item) {
    return true;
  }
  var halfOfArray = item < array[center] ? array.slice(0, center) : array.slice(center);
  return sortedArrayContainsItem(halfOfArray, item);
};


// Problem 3:this function [o(b^2)]because [for (var i = 0; i < array.length; i++),indexOf(item) ] means [it means we have nested loop for and indexOf]

/*
 Complexity:
 */

var hasDuplicates = function(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
};
