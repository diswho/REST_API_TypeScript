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
