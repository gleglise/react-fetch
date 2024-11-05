import express from "express";

const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
  });

const sayHello = (req, res) => {
    res.send("Hello World!");
  };
    
  app.get("/", sayHello);
  
const port = 8080;

const walter = { alias: "Heisenberg" };

const sayMyName = (req, res) => {
  res.json(walter);
};

app.get("/who", sayMyName);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// const port = 8080;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
