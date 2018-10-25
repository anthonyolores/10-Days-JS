/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let max = Math.max(...nums);
    let nums2 = [];
    nums.forEach((num)=>{
        if(num !== max)
            nums2.push(num);
    });
    return Math.max(...nums2);
}