/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // Two maps for s, t strings
    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < s.length; i++) {
        // Insert each character of strings s and t into separate maps
        map1.set(s[i], i + 1);
        map2.set(t[i], i + 1);
    }

    for (let i = 0; i < s.length; i++) {
        // Compare the maps; if not equal, return false
        if (map1.get(s[i]) !== map2.get(t[i])) {
            return false;
        }
    }

    return true;
};
