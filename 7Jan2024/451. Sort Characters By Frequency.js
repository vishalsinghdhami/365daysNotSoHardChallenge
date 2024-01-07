/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const charFrequency = new Map();

    for (let char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
    // console.log(charFrequency)
    // const sortedChars = Array.from(charFrequency.entries()).sort((a, b) => b[1] - a[1]);
    // or
    const sortedChars = [...charFrequency].sort((a, b) => b[1] - a[1]);
    // console.log(sortedChars)
    let ans = '';
    for (let [char, frequency] of sortedChars) {
        ans += char.repeat(frequency);
    }

    return ans;
};

// Example usage
const result = frequencySort("tttttrrrrrrfrroee");
console.log(result); // Output: "eert" or "eetr"
