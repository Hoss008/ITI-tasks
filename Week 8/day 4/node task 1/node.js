const http = require("http");
let result;
const fs = require("fs");

function handleOperation(num1, num2, operation) {
  if (!num1 || !num2) {
    result = "Please provide 2 numbers";
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter 2 valid numbers";
    return;
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "div":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    case "multip":
      result = num1 * num2;
      break;
    default:
      result = "invalid operation";
  }
}

const server = http.createServer((req, res) => {
  const method = req.method;

  if (method === "GET" && req.url !== "/favicon.ico") {
    const url = req.url.split("/");
    console.log(url);
    const operation = url[1];
    const num1 = url[2];
    const num2 = url[3];
    handleOperation(num1, num2, operation);

    res.end(JSON.stringify({ num1, num2, operation, result })); // Send response
    const filePath = "myFile.json";
    const fileContent = JSON.stringify({ num1, num2, operation, result });

    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("File written successfully!");
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
