/*
   The validator module in Node.js is a widely used library for data validation. 
   It provides a set of functions to validate various types of data, such as strings, emails, URLs, numbers, and more. 
   The module helps developers ensure that the data they are working with meets certain criteria or standards.
*/

var validator = require("validator");

const email = "john.limon@keyin.com";

// In this snippet, we can see that simply passing the boolean method; .isEmail() will return a true or false if an email is valid.

if (validator.isEmail(email)) {
  console.log(`${email} is a valid email`);
} else {
  console.log(`${email} is not a valid email`);
}

const url = "https://keyin.com";

// In this snippet, much like with emails, the module will simply return a boolean based on the validity of the URL.

if (validator.isURL(url)) {
  console.log(`${url} is a valid URL`);
} else {
  console.log(`${url} is not a valid URL`);
}

const goodpass = "ZiOnE!4yrzOld@Jhann";
const badpass = "code12345";

// Using factors like password length, character variety, and use of capitalization, the module will return a boolean whether the password is strong or not.

if (validator.isStrongPassword(goodpass)) {
  console.log(`${goodpass} is a strong password`);
} else {
  console.log(`${goodpass} is not a strong password`);
}
if (validator.isStrongPassword(badpass)) {
  console.log(`${badpass} is a strong password`);
} else {
  console.log(`${badpass} is not a strong password`);
}
