module.exports = function reverse (n) {
    let result = 0;
    result = Math.abs(parseInt(String(n).split("").reverse().join(""), 10));
    return result;
}
