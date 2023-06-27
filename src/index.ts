import http from "http";

const myServer = http.createServer((req, res) => {
  res.write("Hello World!");
  res.end();
});

myServer.listen(3000, () => {
  console.log("Server is running on port 3000. Go to http://localhost:3000/");
});

myServer.close();
