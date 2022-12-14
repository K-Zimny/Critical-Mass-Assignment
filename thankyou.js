// URL Params. Grabs url get values and parses into usable js
const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);
const paramName = urlParams.get("name");
const paramEmail = urlParams.get("email");
const paramAddress = urlParams.get("address");
const paramCity = urlParams.get("city");
const paramState = urlParams.get("state");
const paramZip = urlParams.get("zip");

//json object of the form data to the console
const formData = {
  name: paramName,
  email: paramEmail,
  address: paramAddress,
  city: paramCity,
  state: paramState,
  zip: paramZip,
};

const formDataJson = JSON.stringify(formData);
console.log(formDataJson);

// Get and replace html elements with url params

const formName = document.querySelector(".name");
const formEmail = document.querySelector(".email");
const formAddress = document.querySelector(".address");
const formCity = document.querySelector(".city");
const formState = document.querySelector(".state");
const formZip = document.querySelector(".zip");

formName.innerHTML = paramName;
formEmail.innerHTML = paramEmail;
formAddress.innerHTML = paramAddress;
formCity.innerHTML = paramCity;
formState.innerHTML = paramState;
formZip.innerHTML = paramZip;
