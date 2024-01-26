var fs = require("fs");
const readline = require("readline");
// The writeFile() method will create a specified filename and fill it with the given input. If the file already exists, it will overwrite that file.

fs.writeFile("test.txt", "Pickup time for kids", function (err) {
  if (err) throw err;
  console.log("File has been created");
});

// The appendFile() method will append input to an existing file, or if it does not exist yet create it and fill it with the given input.

fs.appendFile("test.txt", "\nTime saved", function (err) {
  if (err) throw err;
  console.log("File has been appended/created");
});

//  Set up the basic interface for the readline module.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Use the unlink method wrapped in a function so that user input can be taken. In this function, the user should be prompted in their terminal asking whether or not the user would like to delete the file.
// If N is given, the console is updated and the file remains. If Y, the file is deleted and the console will state a delete message. If any other input is given, the function restarts with a message saying please try again.
function delfileq() {
  rl.question("Would you like to delete the file? (Y/N)", (delfile) => {
    if (delfile === "Y") {
      fs.unlink("test.txt", function (err) {
        if (err) throw err;
        console.log("File deleted successfully");
        rl.close();
      });
    }
    if (delfile === "N") {
      console.log("File was not deleted");
    } else {
      console.log("Please try again");
      delfileq();
    }
  });
}
delfileq();
