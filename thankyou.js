// URL Params. Grabs url get values and parses into usable js
const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);
const paramName = urlParams.get("name");
const paramEmail = urlParams.get("email");
const paramAddress = urlParams.get("address");
const paramCity = urlParams.get("city");
const paramState = urlParams.get("state");
const paramZip = urlParams.get("zip");
console.log(
  `
  Name: ${paramName}, 
  Email: ${paramEmail}, 
  Address: ${paramAddress}, 
  City: ${paramCity}, 
  State: ${paramState}, 
  Zip: ${paramZip}
  `
);
