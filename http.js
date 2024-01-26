const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Use a switch statement to handle different request URLs
  switch (req.url) {
    case "/":
      // Respond with a 200 OK status and plain text content type for the home page
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to John Limon's Home Page!");
      break;

    case "/about":
      // Respond with a 200 OK status and plain text content type for the about page
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("This is About Me Page.");
      break;

    default:
      // If the request is for any other path, respond with a 404 Not Found status
      // and plain text content type, and send a "Page not found" message
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
  }
});

// Start the server and listen on port 3000
const port = 3000;
server.listen(port, () => {
  // Log a message to the console indicating that the server is running
  console.log(`Server is running at http://localhost:${port}`);
});