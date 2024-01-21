// function main() {
//   const userAuth = //Implement your IIFE here
//     //It should return the registerUser function
//     (function registerUser(username, password) {
//       const users = [];
//       if (checkCredentials(username, password)) {
//         console.log("The user is already registered");
//       } else {
//         users.push({ username, password });
//         console.log("The user has been added to the registered users array");
//       }
//       function checkCredentials(username, password) {
//         return users.some(
//           (user) => user.username === username && user.password === password
//         );
//       }
//       return registerUser;
//     })();

//   console.log(userAuth.registerUser("user1", "password123"));
//   //Output: The user have been added to the registeredUser array
//   console.log(userAuth.registerUser("user1", "password123"));
//   //Output : The user is already registered
//   return userAuth;
// }
// main();

function main() {
  const userAuth = (() => {
    const users = [];

    function registerUser(username, password) {
      if (checkCredentials(username, password)) {
        return "The user is already registered";
      } else {
        users.push({ username, password });
        return "The user has been added to the registered users array";
      }
    }

    function checkCredentials(username, password) {
      return users.some(
        (user) => user.username === username && user.password === password
      );
    }

    return {
      registerUser,
    };
  })();

  console.log(userAuth.registerUser("user1", "password123")); // Output: The user has been added to the registered users array
  console.log(userAuth.registerUser("user1", "password123")); // Output: The user is already registered
  console.log(userAuth.registerUser("user2", "pass456")); // Output: The user has been added to the registered users array

  return userAuth;
}

// Example usage:
main();
