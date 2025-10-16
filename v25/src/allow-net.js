const http = require("node:http");
// Attempt to bypass the permission
const req = http.get("http://example.com", () => {});

req.on("error", (err) => {
  console.log("err", err);
});
