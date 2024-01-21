function main() {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001",
    },
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: "0101",
      zipCode: "10011",
    },
  };

  function getUserDetail(profile, keys) {
    const n = keys.length;
    let result = "";
    for (let i = 0; i < n; i++) {
      if (keys[i] === "") result = "Not available";
      else if (keys[i] === "address") {
        for (let j = i + 1; j < n; j++) {
          result = `${result} ${profile.address[keys[j]]}`;
        }
        break;
      } else {
        result = `${result} ${profile[keys[i]]}`;
      }
    }

    result.trim();
    return result;
  }
  console.log(getUserDetail(userProfile, ["address", "city"]));
  // Usage: should return "New York"
  //do not modify the return statement
  return getUserDetail;
}
main();

// function getUserDetail(profile, keys) {
//   let value = profile;

//   for (const key of keys) {
//     if (!(key in value)) {
//       return "Not available";
//     }

//     value = value[key];
//   }

//   return value;
// }
