/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let maxi = 0;

    for (let i = 0; i < s.length; i++) {
        // If the element is an open parenthesis, add its index to the stack
        if (s[i] === '(') {
            stack.push(i);
        }
        // If the element is a closing parenthesis, calculate the current depth
        // and pop the last open parenthesis index from the stack
        else if (s[i] === ')') {
            let depth = stack.length;
            maxi = Math.max(maxi, depth);
            stack.pop();
        }
    }

    return maxi;
};

