# Initialize your project

`npm init -y`

## Let’s configure Node to run TypeScript code

`npm install -D typescript`

## utilize your TypeScript project using

`tsc --init`

This will create a `tsconfig.json` file with the default TypeScript compile options.

`tsc --init` may require you to install TypeScript globally on your computer using the command `npm install -g typescript`

## execute the above dependencies using a Node command

`npm install -D ts-node`

## Then, edit your `package.json` script tags:

`"scripts" > "start": "ts-node ./src/index.ts"`

## Add type definitions for Node to run TypeScript.

`npm install -D @types/node`

# How to create a simple TypeScript HTTP server

`https://blog.logrocket.com/build-rest-api-typescript-using-native-modules/`

import http from "http";

const myServer = http.createServer((req, res) => {
res.write("Hello World!");
res.end();
});

myServer.listen(3000, () => {
console.log("Server is running on port 3000. Go to http://localhost:3000/");
});

// myServer.close();

# How to create a CRUD TypeScript REST API

create a store.json file inside the src folder

The to-do list API will refer to this data to perform server-based methods like GET, POST, PUT, and DELETE.

## Setting up the task structure

Create a new file inside the `src` directory and call it `ITask.ts`

## Adding the API controllers

create a `controller.ts` file inside the `src` directory.

## Adding a new a task

create a function called addTask()

## Updating a task

You might want to update the values of an existing task.

## Deleting a task

Likewise, you can delete a task from the storage.

## Setting the server and the task routes

create and expose various endpoints for creating, reading, updating, and deleting tasks. Endpoints are URLs that execute the requesting data.
