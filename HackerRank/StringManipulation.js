function makeAnagram(a, b) {
  let larger = a.length >= b.length ? a : b;
  let smaller = a.length < b.length ? a : b;

  let dictionary = {};
  for(let i = 0; i < larger.length; i++) {
    dictionary[larger[i]] = dictionary[larger[i]] + 1 || 1;
  }

  let counter = 0;
  for(let i = 0; i < smaller.length; i++) {
    if(dictionary[smaller[i]] > 0) {
      dictionary[smaller[i]]--;
      counter++;
    }
  }

  let removeFromLarger = larger.length - counter;
  let removeFromSmaller = smaller.length - counter;

  return removeFromLarger + removeFromSmaller;
}
// console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));
// console.log(makeAnagram('accfgilmmnrsvwxxyyyz', 'bbdeeghhijjklmmmooppqrrstuvwwx')); // BECAUSE OF THE EXTRA X...WE ARE REMOVING IT

function alternatingCharacters(s) {
  let counter = 0;

  for(let i = 0; i < s.length; i++) {
    if(s[i] === s[i + 1]) {
      counter++;
    }
  }
  return counter;
}
// console.log(alternatingCharacters('AAABBB'));