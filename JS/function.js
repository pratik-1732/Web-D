function isValidFunctionName(name) {
  // Check if the name is a non-empty string
  if (typeof name !== "string" || name.length === 0) {
    return false;
  }

  // Check if the first character is a letter or an underscore
  const firstChar = name.charAt(0);
  if (!/^[a-zA-Z_]/.test(firstChar)) {
    return false;
  }

  // Check the rest of the characters
  for (let i = 1; i < name.length; i++) {
    const char = name.charAt(i);
    if (!/^[a-zA-Z0-9_]/.test(char)) {
      return false;
    }
  }

  return true;
}

function isValidIdentifier(input) {
  let ans = isValidFunctionName(input);
  // Define a regular expression pattern for a valid function name

  if (ans === true) console.log(`${input} is a valid Identifier.`);
  else console.log(`${input} is not a valid Identifier.`);
}

isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.
