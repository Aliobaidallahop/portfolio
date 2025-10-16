function add(x, y) {
  return x + y;
}

const mult = (a, b) => a * b;

function isPalindrome(str1) {
  length1 = Math.floor(str1.length / 2);
  for (let i = 0; i < length1; i++) {
    if (str1[i] !== str1[str1.length - i - 1]) {
      return false;
    }
  }
  return true;
}
