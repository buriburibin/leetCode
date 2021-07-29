/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var nowStep = 0;
    var result = true;
    for(var i=nums.length-2; i>=0; i--){
        nowStep++;
        if(nums[i] >= nowStep){
            nowStep = 0;
        }
        if(i===0 && nowStep > 0){
            result = false;
        }
    }
    return result;
};