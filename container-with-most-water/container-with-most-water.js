/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxArea = 0;
    for(var i=0; i<height.length; i++){
        var j = Math.ceil(maxArea/height[i]);
        if(j > height.length -1){
            continue;
        }
        while(j < height.length){
            var localArea = (j-i) * Math.min(height[j],height[i]);
            if(localArea > maxArea){
                maxArea = localArea;
            }
            j++;
        }
    }
    return maxArea;
};