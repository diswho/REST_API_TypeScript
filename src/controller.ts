// access the data store (store.json)
import fs from "fs";
import path from "path";

// handle requests and reponses
import { ServerResponse, IncomingMessage } from "http";

// access the task structure
import { Task } from "./ITask";

const getTasks = (req: IncomingMessage, res: ServerResponse) => {
  return fs.readFile(
    path.join(__dirname, "store.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            error: err,
          })
        );
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            message: JSON.parse(data),
          })
        );
      }
    }
  );
};

const addTask = (req: IncomingMessage, res: ServerResponse) => {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk.toString();
  });
  req.on("end", () => {
    let task = JSON.parse(data);
    fs.readFile(path.join(__dirname, "store.json"), "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            error: err,
          })
        );
      } else {
        let tasks: [Task] = JSON.parse(data);
        let latest_id = tasks.reduce(
          (max = 0, task: Task) => (task.id > max ? task.id : max),
          0
        );
        task.id = latest_id + 1;
        tasks.push(task);
        fs.writeFile(
          path.join(__dirname, "store.json"),
          JSON.stringify(tasks),
          (err) => {
            if (err) {
              // error, send an error message
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  success: false,
                  error: err,
                })
              );
            } else {
              // no error, send the data
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  success: true,
                  message: task,
                })
              );
            }
          }
        );
      }
    });
  });
};

const updateTask = (req: IncomingMessage, res: ServerResponse) => {
  // Read the data from the request
  let data = "";
  req.on("data", (chunk) => {
    data += chunk.toString();
  });
  // When the request is done
  req.on("end", () => {
    // Parse the data
    let task: Task = JSON.parse(data);
    // Read the store.json file
    fs.readFile(path.join(__dirname, "store.json"), "utf8", (err, data) => {
      // Check out any errors
      if (err) {
        // error, send an error message
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            error: err,
          })
        );
      } else {
        // no error, get the current tasks
        let tasks: [Task] = JSON.parse(data);
        // find the task with the id
        let index = tasks.findIndex((t) => t.id == task.id);
        // replace the task with the new one
        tasks[index] = task;
        // write the new tasks array to the store.json file
        fs.writeFile(
          path.join(__dirname, "store.json"),
          JSON.stringify(tasks),
          (err) => {
            if (err) {
              // error, send an error message
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  success: false,
                  error: err,
                })
              );
            } else {
              // no error, send the data
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  success: true,
                  message: task,
                })
              );
            }
          }
        );
      }
    });
  });
};

const deleteTask = (req: IncomingMessage, res: ServerResponse) => {
  // Read the data from the request
  let data = "";
  req.on("data", (chunk) => {
    data += chunk.toString();
  });
  // When the request is done
  req.on("end", () => {
    // Parse the data
    let task: Task = JSON.parse(data);
    // Read the store.json file
    fs.readFile(path.join(__dirname, "store.json"), "utf8", (err, data) => {
      // Check out any errors
      if (err) {
        // error, send an error message
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            error: err,
          })
        );
      } else {
        // no error, get the current tasks
        let tasks: [Task] = JSON.parse(data);
        // find the task with the id
        let index = tasks.findIndex((t) => t.id == task.id);
        // remove the task
        tasks.splice(index, 1);
        // write the new tasks array to the store.json file
        fs.writeFile(
          path.join(__dirname, "store.json"),
          JSON.stringify(tasks),
          (err) => {
            // Check out any errors
            if (err) {
              // error, send an error message
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  success: false,
                  error: err,
                })
              );
            } else {
              // no error, send the data
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  success: true,
                  message: task,
                })
              );
            }
          }
        );
      }
    });
  });
};

export { getTasks, addTask, updateTask, deleteTask };
