function URLconstructor() {
  //Implement Your function here.
  //return `https://${domain}${path}?name=${queryParameters.name}?age=${queryParameters.age}`;
  // const queryParams = [];

  // for (const key in queryParameters) {
  //   if (queryParameters.hasOwnProperty(key)) {
  //     queryParams.push(`${key}=${queryParameters[key]}`);
  //   }
  // }

  // const queryString = queryParams.length > 0 ? `?${queryParams.join("?")}` : "";

  // //const url = `https://${domain}${path}${queryString}`;
  // const url = "https://";
  // url += domain;
  // url += path;
  // url += queryString;

  // return url;
  let finalurl = "";
  finalurl += "https://";
  finalurl += domain;
  finalurl += path;
  for (let key in queryParameters) {
    finalurl += "?";
    finalurl += key;
    finalurl += "=";
    finalurl += queryParameters[key];
  }
  return finalurl;
}

const queryParameters = {
  name: "John",
  age: "28",
};
const domain = "google.com";
const path = "/search";
console.log(URLconstructor(queryParameters, domain, path));
//output: https://google.com/search?name=John?age=28
