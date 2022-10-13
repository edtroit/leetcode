//https://leetcode.com/problems/two-sum/
// arr of nums, target num, return indicies of nums that add up to target
// [1,2,3,4,5] - 9 => 3,4

// arr of nums - not empty, allways nums, whole, positive, at least 2, 
//num + self will never = target, only two will equal the target and they will not be equal
// return indices of the nums that add up to target -> []

//[1,2,3,4,5], 9 => [3,4]
//[5,6,9], 11 => [0,1]
//[22,7,100,5], 12 => [1,3]


function findIndices(arr, target) {
    //grab a num
    for (let i = 0; i < arr.length; i++) {
      //comparing outside num to internal nums
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] + arr[k] === target && i !== k) {
          return [i, k]
  
        }
      }
    }  
  }
  //brute force methode need to refactor with hashmap
  
  console.log(findIndices([1, 2, 3, 4, 5], 9), '[3,4]')
  // console.log(findIndices([5, 6, 9], 11), '[0,1]')
  // console.log(findIndices([22, 7, 100, 5], 12), '[1,3]')