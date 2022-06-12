import chalk from "chalk";
import yargs from "yargs";
import fs from "fs";

function loadData(filename) {
  //read the todos.json file
  const path = "./" + filename;
  //Check if the file exists
  if (fs.existsSync(path)) {
    const buffer = fs.readFileSync("./" + filename);
    const data = buffer.toString();
    return JSON.parse(data);
  } else {
    console.log(
      chalk.bold.red(`Could not read ${filename} because it does not exist`)
    );
  }
}

function saveData(filename, todo) {
  //read the existing data
  let data = loadData(filename);
  if (data) {
    data.push(todo);
    fs.writeFileSync("./" + filename, JSON.stringify(data));
  }
}

function addTodo(todoFileName, todoTitle, todoStatus, todoPriority) {
  saveData(todoFileName, {
    title: todoTitle,
    status: todoStatus,
    priority: todoPriority,
  });
}

yargs.version("1.1.0");

let verifiedAdmin = false;

//Login
yargs.command({
  command: "login",
  describe: "Authenticate user",
  builder: {
    username: {
      describe: "username",
      type: "string",
      demandOptions: true,
    },
    password: {
      describe: "password",
      type: "string",
      demandOptions: true,
    },
  },
  handler: function ({ username, password }) {
    if (username == "admin" && password == "admin") {
      console.log(chalk.bold.green("Successfully logged in"));
      verifiedAdmin = true;
    } else {
      console.log(chalk.bold.red("Incorrect username or password"));
    }
  },
});

//Add
yargs.command({
  command: "add",
  describe: "Add some todo",
  builder: {
    filename: {
      describe: "Name of the file",
      demandOptions: true,
      type: "string",
    },
    title: {
      describe: "Title of the todo",
      demandOptions: true,
      type: "string",
    },
    status: {
      describe: "status of your todo",
      demandOptions: true,
      type: "string",
    },
    priority: {
      describe: "Priority of the todo",
      demandOptions: true,
      type: "string",
    },
  },
  handler: function ({ filename, title, status, priority }) {
    addTodo(filename, title, status, priority);
  },
});

//Read
yargs.command({
  command: "read",
  describe: "Output todo-items to the console",
  builder: {
    filename: {
      describe: "filename",
      type: "string",
      demandOptions: true,
    },
  },
  handler: function (args) {
    const todos = loadData(args.filename);
    if (todos) {
      console.log(todos);
    }
  },
});

//Finish
yargs.command({
  command: "finish",
  describe: "Mark a to-do item as completed",
  builder: {
    filename: {
      describe: "filename",
      type: "string",
      demandOptions: true,
    },
    title: {
      describe: "file's title",
      type: "string",
      demandOptions: true,
    },
  },
  handler: function (args) {
    const todos = loadData(args.filename);
    let updatedItem = "";
    if (todos) {
      for (let { title, status, priority } of todos) {
        if (title === args.title) {
          status = "Completed";
          updatedItem = { title, status, priority };
        }
      }
    }
    let newlist = [...todos, updatedItem];
    newlist = newlist.filter(function (obj) {
      return obj.title !== args.title || obj.status === "Completed";
    });

    fs.writeFileSync("./" + args.filename, JSON.stringify(newlist));
  },
});

//Delete
yargs.command({
  command: "delete",
  describe: "Delete a todo-item",
  builder: {
    filename: {
      describe: "filename",
      type: "string",
      demandOptions: true,
    },
    title: {
      describe: "file's title",
      type: "string",
      demandOptions: true,
    },
  },
  handler: function (args) {
    const todos = loadData(args.filename);

    if (todos) {
      let newlist = [...todos];
      newlist = newlist.filter(function (obj) {
        return obj.title !== args.title;
      });
      fs.writeFileSync("./" + args.filename, JSON.stringify(newlist));
    }
  },
});

yargs.parse();
