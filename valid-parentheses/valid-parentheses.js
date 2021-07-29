/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = [];
    for(var i=0; i<s.length; i++){
        if('([{'.includes(s[i])){
            arr.push(s[i]);
        }
        if(')}]'.includes(s[i])){
            var nowBracket = arr.pop();
            var targetBracket;
            if(s[i] === '}'){
                targetBracket = '{';
            } else if(s[i] === ')'){
                targetBracket = '(';
            } else if(s[i] === ']'){
                targetBracket = '[';
            } 
            if(nowBracket != targetBracket){
                return false;
            }
        }
    }
    if(arr.length === 0){
        return true;
    } else {
        return false;
    }
};