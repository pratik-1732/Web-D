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
    // Implement your function here

    for (let i in keys) {
      let val = keys[i];
      if (val === "undefined") console.log("Not available");
      else if (val === "address") {
        let val2 = keys[i + 1];
        console.log(profile.address[val2]);
      } else console.log(profile[val]);
    }
  }

  //console.log(getUserDetail(userProfile, ["address", "city"]));
  console.log(getUserDetail(userProfile, ["name","email"]));
  // Usage: should return "New York"
  //do not modify the return statement
  return getUserDetail;
}
main();
