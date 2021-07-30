/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var rob = 0,notRob = 0;
    for(var i=0; i<nums.length; i++){
        var nowRob = notRob + nums[i];
        
        var nowNotRob = Math.max(rob,notRob);
        
        rob = nowRob;
        notRob = nowNotRob;
    }
    return Math.max(rob,notRob);
};