/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var bunja = m-1+n-1;
    var bigger = Math.max(m-1,n-1);
    var lower = Math.min(m-1,n-1);
    var bunmo = 1;
    var result = 1;
    for(var i=bunja; i > bigger; i--){
        result *= i;
    }
    for(var i=lower; i>1; i--){
        bunmo *= i;
    }
    return result/bunmo;
};