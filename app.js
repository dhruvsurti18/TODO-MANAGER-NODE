const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];
let id = 1;

app.get("/", (req, res) => {
  let total = tasks.length;
  let pending = tasks.filter(t => t.status === "Pending").length;
  let completed = tasks.filter(t => t.status === "Completed").length;

  res.render("dashboard", { tasks, total, pending, completed });
});

app.get("/add", (req, res) => {
  res.render("add-task");
});

app.post("/add", (req, res) => {
  const { title, description, priority } = req.body;

  tasks.push({
    id: id++,
    title,
    description,
    priority,
    status: "Pending"
  });

  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== taskId);
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  res.render("edit-task", { task });
});

app.post("/edit/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  task.title = req.body.title;
  task.description = req.body.description;
  task.priority = req.body.priority;

  res.redirect("/");
});

app.get("/status/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (task.status === "Pending") task.status = "In Progress";
  else if (task.status === "In Progress") task.status = "Completed";

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
