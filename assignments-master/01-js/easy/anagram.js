/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  // str2 in an array
  const used = [];
  for (i = 0; i < str2.length; i++) {
    used[i] = false;
  }

  // matching str1 & str2
  for (i = 0; i < str1.length; i++) {
    let found = false;

    for (j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j] && !used[j]) {
        used[j] = true;
        found = true;
        break;
      }
    }

    if (!found) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
