/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    var preVal;
    nums.sort(function(a,b){
        if(a<b){
            return -1;
        } else {
            return 1;
        }
    });
    for(var i=0; i<nums.length-2; i++){
        if(nums[i] > 0){
            break;
        }
        if(nums[i] === preVal){
            continue;
        } else {
            preVal = nums[i];
        }
        let preVal2;
        for(var j=i+1; j<nums.length-1; j++){
            if(nums[i] + nums[j] > 0 && nums[j] > 0){
                break;
            }
            if(nums[j] === preVal2){
                continue;
            } else {
                preVal2 = nums[j];
            }
            let preVal3;
            for(var k=j+1; k<nums.length; k++){
                if(nums[k] === preVal3){
                    continue;
                } else {
                    preVal3 = nums[k];
                }
                var localSum = nums[i] + nums[j] + nums[k];
                if(localSum > 0){
                    break;
                } else if(localSum === 0){
                    result.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }
    return result;
};