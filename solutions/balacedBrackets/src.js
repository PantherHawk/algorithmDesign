//O: bool
//I: str
//C: stack
//E: Iterate through the string. Character is either an open, a close, or not a bracket. Make an object of open-closed pairs. If open bracket, push to top of stack. If closed bracket, pop topmost item from stack

const isBalanced = (str) => {
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "]"};
  const currentOpen = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (brackets[char]) {
      currentOpen.push(brackets[char])
    } else if (
      char === brackets["("] ||
      char === brackets["["] ||
      char === brackets["{"]
    ) {
      let expectedClose = currentOpen.pop();
      if (char !== brackets[expectedClose]) {
        return false;
      }
    }
    if (currentOpen.length > 0) { return false; }
  }
  return true;
};
