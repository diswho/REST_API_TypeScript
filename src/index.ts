import http from "http";
import { addTask, deleteTask, getTasks, updateTask } from "./controller";

const myServer = http.createServer((req, res) => {
  // get tasks
  if (req.method == "GET" && req.url == "/api/tasks") {
    return getTasks(req, res);
  }
  // Creating a task
  else if (req.method == "POST" && req.url == "/api/tasks") {
    return addTask(req, res);
  }
  // Updating a task
  else if (req.method == "PUT" && req.url == "/api/tasks") {
    return updateTask(req, res);
  }

  // Deleting a task
  else if (req.method == "DELETE" && req.url == "/api/tasks") {
    return deleteTask(req, res);
  } else {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        error: "wrong method or url path ...",
      })
    );
  }
});

myServer.listen(3000, () => {
  console.log("Server is running on port 3000. Go to http://localhost:3000/");
});

// myServer.close();
